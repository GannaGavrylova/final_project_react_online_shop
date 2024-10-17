import styles from "./styles.module.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import CartItem from "../cartItem";
import { Link } from "react-router-dom";
import OrderForm from "../orderForm";
import React from "react";
import ModalWindow from "../../modalWindow";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slices/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.data);

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(clearCart());
    }, 3000);
  };

  const totalPrice = Array.isArray(carts)
    ? carts.reduce((total, item) => {
        const itemPrice = item.discont_price
          ? Number(item.discont_price)
          : Number(item.price);
        return total + itemPrice * item.quantity;
      }, 0)
    : 0;

  const totalItems = Array.isArray(carts)
    ? carts.reduce((total, item) => total + item.quantity, 0)
    : 0;
  return (
    <div>
      <div className={styles.shop_cart_title}>
        <h1>Shopping cart</h1>
        <hr />
        <Link to="/">
          <button>Bask to the store</button>
        </Link>
      </div>
      {carts.length === 0 ? (
        <div className={styles.messagerCart}>
          <p>Looks like you have no items in your basket currently.</p>
          <Link to="/products/all">
            <Button type="primary">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className={styles.containerCard}>
          <div>
            {carts.map((cart) => {
              return <CartItem key={cart.id} {...cart} />;
            })}
          </div>
          <div className={styles.orderFormCard}>
            <OrderForm
              showLoading={showLoading}
              totalPrice={totalPrice}
              totalItems={totalItems}
            />
          </div>
        </div>
      )}
      <ModalWindow open={open} loading={loading} setOpen={setOpen} />
    </div>
  );
}

export default CartPage;

import styles from "./styles.module.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import CartItem from "../cartItem";
import { Link } from "react-router-dom";

function CartPage() {
  const carts = useSelector((state) => state.cart.data);

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
        <div>
          {carts.map((cart) => {
            return <CartItem key={cart.id} {...cart} />;
          })}
        </div>
      )}
    </div>
  );
}

export default CartPage;

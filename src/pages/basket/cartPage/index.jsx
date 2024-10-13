import styles from "./styles.module.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import CartItem from "../cartItem";
import { Link } from "react-router-dom";
import OrderForm from "../orderForm";
import React, { useState } from "react";
import ModalWindow from "../../modalWindow";
function CartPage() {
  const carts = useSelector((state) => state.cart.data);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

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
            <OrderForm showLoading={showLoading} />
          </div>
        </div>
      )}
      <ModalWindow open={open} loading={loading} setOpen={setOpen} />
    </div>
  );
}

export default CartPage;

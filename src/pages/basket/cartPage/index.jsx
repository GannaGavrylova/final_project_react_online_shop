import styles from "./styles.module.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import CartItem from "../cartItem";

function CartPage() {
  const carts = useSelector((state) => state.cart.data);

  return (
    <div>
      <div>
        <h1>Shopping cart</h1>
        <hr />
        <button>Bask to the store</button>
        <p>Looks like you have no items in your basket currently.</p>
        <Button type="primary">Continue Shopping</Button>
      </div>
      <div>
        {carts.map((cart) => {
          return <CartItem key={cart.id} {...cart} />;
        })}
      </div>
    </div>
  );
}

export default CartPage;

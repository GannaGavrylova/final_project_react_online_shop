import styles from "./styles.module.css";
import BaseAllUrl from "../../../utils/api";
import Counter from "../../products/counter";
import close from "../../../assets/icons/close.svg";
import { removeCart } from "../../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function CartItem({ id, title, image, price, discont_price }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_image}>
        <img src={`${BaseAllUrl}/${image}`} alt={title} />
      </div>

      <div className={styles.container_components}>
        <div className={styles.cart_title}>
          <h4>{title}</h4>

          <button
            className={styles.btn_close}
            onClick={() => dispatch(removeCart(id))}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <div className={styles.cart_price}>
          <Counter />
          <p className={styles.discon_cart}>${discont_price}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

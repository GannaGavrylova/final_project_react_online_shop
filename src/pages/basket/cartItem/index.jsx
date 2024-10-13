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
          <span className={styles.discon_cart}>
            {discont_price ? (
              <>
                <p style={{ fontSize: "40px", fontWeight: "700" }}>
                  ${discont_price}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#8b8b8b",
                    textDecoration: "line-through",
                  }}
                >
                  ${price}
                </p>
              </>
            ) : (
              <p style={{ fontSize: "40px", fontWeight: "700" }}>${price}</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

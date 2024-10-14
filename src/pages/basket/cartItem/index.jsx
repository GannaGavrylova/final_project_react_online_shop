import styles from "./styles.module.css";
import BaseAllUrl from "../../../utils/api";
import close from "../../../assets/icons/close.svg";
import {
  removeCart,
  changeQuantity,
  updateQuantity,
} from "../../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function CartItem({ id, title, image, price, discont_price, quantity }) {
  const dispatch = useDispatch();
  const handleClickChangeBtn = (method, id) => {
    dispatch(changeQuantity({ method, value: 1, id }));
  };
  const handleChangeInput = (id, currentValue) => {
    dispatch(updateQuantity({ id, quantity: currentValue }));
  };

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
          <div className={styles.counter_container_btn}>
            <button onClick={() => handleClickChangeBtn("decrement", id)}>
              -
            </button>
            <input
              onChange={(e) => handleChangeInput(id, e.target.value)}
              type="number"
              min="1"
              value={quantity}
            />
            <button onClick={() => handleClickChangeBtn("plus", id)}>+</button>
          </div>

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

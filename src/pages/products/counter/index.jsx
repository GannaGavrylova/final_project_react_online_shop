import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { minus, plus, resetState } from "../../../redux/slices/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.data);

  return (
    <div className={styles.counter_container}>
      <button
        className={styles.btn_count}
        onClick={() => counter > 1 && dispatch(minus())}
      >
        -
      </button>
      <p>{counter}</p>

      <button className={styles.btn_count} onClick={() => dispatch(plus())}>
        +
      </button>
    </div>
  );
}

export default Counter;

{
  /* {location.pathname === "/cart" ? (
        <button className={styles.btn_close}>X</button>
      ) : (
        <Button onClick={handleClick} type="primary">
          Add to cart
        </Button>
      )} */
}

import styles from "./styles.module.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { minus, plus } from "../../../redux/slices/counterSlice";

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
      <Button type="primary">Add to cart</Button>
    </div>
  );
}

export default Counter;

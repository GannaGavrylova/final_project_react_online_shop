import styles from "./styles.module.css";
import { Button } from "antd";

function Home() {
  return (
    <div className={styles.home_container}>
      <h1>Amazing Discounts on Pets Products!</h1>
      <Button style={{ padding: "16px 56px" }} type="primary">
        Check out
      </Button>
    </div>
  );
}

export default Home;

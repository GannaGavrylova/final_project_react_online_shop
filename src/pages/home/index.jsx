import styles from "./styles.module.css";
import { Button } from "antd";
import Categories from "../categories/index";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styles.home_container}>
        <h1>Amazing Discounts on Pets Products!</h1>
        <Link to="/sale">
          <Button style={{ padding: "16px 56px" }} type="primary">
            Check out
          </Button>
        </Link>
      </div>
      <div className={styles.home_categories_container}>
        <Categories Limit={4} />
      </div>
    </>
  );
}

export default Home;

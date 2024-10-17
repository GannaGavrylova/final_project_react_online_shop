import styles from "./styles.module.css";
import four from "../../assets/icons/four.svg";
import cat_dog from "../../assets/images/cat_dog.png";
import { Link } from "react-router-dom";
import { Button } from "antd";

function NotFound() {
  return (
    <>
      <div className={styles.image_404}>
        <img className={styles.fourNumber} src={four} alt="four" />
        <img src={cat_dog} alt="cat_dog" />
        <img className={styles.fourNumber} src={four} alt="four" />
      </div>
      <div className={styles.message_notFound}>
        <h1>Page Not Found</h1>
        <p>
          We’re sorry, the page you requested could not be found. <br /> Please
          go back to the homepage.
        </p>
        <Link to="/products/all">
          <Button type="primary">Go Home</Button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;

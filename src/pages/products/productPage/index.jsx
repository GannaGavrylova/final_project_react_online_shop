import axios from "axios";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import BaseAllUrl from "../../../utils/api";
import { useParams } from "react-router-dom";
import Counter from "../counter";
import { Link } from "react-router-dom";
import { addProduct } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Button } from "antd";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  // Читаем categoryName из localStorage, если оно там есть
  const storedCategoryName = localStorage.getItem("categoryName");
  useEffect(() => {
    async function getProductData() {
      try {
        const response = await axios.get(`${BaseAllUrl}/products/${id}`);
        setProduct(response.data[0]);
      } catch (error) {
        console.log("There was an error fetching the product", error);
      }
    }
    getProductData();
  }, [id]);

  function handleClick() {
    dispatch(addProduct(product));
    console.log(product);
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const { title, price, discont_price, description, image, categoryId } =
    product;
  return (
    <div>
      <div className={styles.nav_product_page}>
        <Link to="/">
          <button className={styles.btn_productPage}>Main page</button>
        </Link>
        <hr />
        <Link to="/categories">
          <button className={styles.btn_productPage}>Categories</button>
        </Link>
        <hr />
        <Link to={`/categories/${categoryId}`}>
          <button className={styles.btn_productPage}>
            {storedCategoryName || "Unknown Category"}
          </button>
        </Link>

        <hr />
        <button className={styles.btn_productPage}>{product.title}</button>
      </div>

      <div className={styles.product_card_container}>
        <div className={styles.product_image}>
          <img src={`${BaseAllUrl}/${image}`} alt={title} />
        </div>
        <div className={styles.product_discription}>
          <h2>{title}</h2>
          <span>
            {discont_price ? (
              <>
                <p style={{ fontSize: "64px", fontWeight: "700" }}>
                  ${discont_price}
                </p>
                <p
                  style={{
                    fontSize: "40px",
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

          <div className={styles.count_btn}>
            <Counter product={product} isInCart={true} />
            <Button onClick={handleClick} type="primary">
              Add to cart
            </Button>
          </div>

          <div className={styles.discript_text}>
            <h6>Description</h6>
            <p>{description}</p>
            <a href="" style={{ color: "black" }}>
              <p>Read more</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

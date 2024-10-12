import axios from "axios";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import BaseAllUrl from "../../../utils/api";
import { useParams } from "react-router-dom";
import Counter from "../counter";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

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

  if (!product) {
    return <h1>Loading...</h1>;
  }
  const { title, price, discont_price, description, image } = product;
  return (
    <div className={styles.product_card_container}>
      this is page Product
      <div className={styles.product_image}>
        <img
          style={{
            width: "316px",
            height: "284px",
            objectFit: "cover",
          }}
          src={`${BaseAllUrl}/${image}`}
          alt={title}
        />
      </div>
      <div className={styles.product_discription}>
        <h2>{title}</h2>
        <span>
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
        <Counter />

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductPage;

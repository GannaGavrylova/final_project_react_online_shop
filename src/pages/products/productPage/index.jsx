import axios from "axios";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import BaseAllUrl from "../../../utils/api";
import { useParams } from "react-router-dom";

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

  const { title, price, discont_price, description, image } = product;
  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      this is page Product
      <div>
        <img
          style={{
            width: "316px",
            height: "284px",
            objectFit: "cover",
          }}
          src={`${BaseAllUrl}/${image}`}
          alt={title}
        />
        <div>
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
          <h1>{price}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

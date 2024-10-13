import styles from "./styles.module.css";
import BaseAllUrl from "../../utils/api";
import { Link } from "react-router-dom";

function ProductsCategory({ products }) {
  return (
    <div className={styles.product_container}>
      {products.map((product) => {
        return (
          <div className={styles.product_list} key={product.id}>
            <Link key={product.id} to={`/products/${product.id}`}>
              <img
                style={{
                  width: "316px",
                  height: "284px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                src={`${BaseAllUrl}${product.image}`}
                alt={product.title}
              />
            </Link>

            <h4>{product.title}</h4>
            <span>
              {product.discont_price ? (
                <>
                  <p style={{ fontSize: "40px", fontWeight: "700" }}>
                    ${product.discont_price}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "#8b8b8b",
                      textDecoration: "line-through",
                    }}
                  >
                    ${product.price}
                  </p>
                </>
              ) : (
                <p style={{ fontSize: "40px", fontWeight: "700" }}>
                  ${product.price}
                </p>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsCategory;

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import FilterProducts from "../../filterProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseAllUrl from "../../../utils/api";
import { useParams } from "react-router-dom";

function AllProducts() {
  const [productsAll, setProductsAll] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios.get(`${BaseAllUrl}/products/all`);
        setProductsAll(response.data);
      } catch (error) {
        console.log("Error");
      }
    }
    getAllProducts();
  }, []);
  return (
    <div className={styles.allProducts_container}>
      <div className={styles.nav_productsAll}>
        <Link
          to="/"
          style={{
            padding: "8px 16px",
            backgroundColor: "#dddddd",
            border: "none",
            borderRadius: "6px",
          }}
        >
          <button className={styles.btnMain_page}>Main page</button>
        </Link>
        <hr />
        <button>All products</button>
      </div>
      <h1>All products</h1>
      <FilterProducts />
      <div className={styles.products_grid}>
        {productsAll.slice(0, 12).map((product) => {
          return (
            <div key={product.id} className={styles.productList}>
              <Link key={product.id} to={`/products/${product.id}`}>
                {product.image && (
                  <img
                    style={{
                      width: "316px",
                      height: "284px",
                      objectFit: "cover",
                    }}
                    src={`${BaseAllUrl}${product.image}`}
                    alt={product.title}
                  />
                )}
              </Link>

              <h2 className={styles.title_product}>{product.title}</h2>
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
    </div>
  );
}

export default AllProducts;

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import FilterProducts from "../../filterProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseAllUrl from "../../../utils/api";
import ProductCard from "../productCard";

function AllProducts() {
  const [productsAll, setProductsAll] = useState([]);

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

      <ProductCard productsAll={productsAll} />
    </div>
  );
}

export default AllProducts;

// onMouseEnter={() => setIsHoverButton(product.id)}
// onMouserLeave={() => setIsHoverButton(null)}

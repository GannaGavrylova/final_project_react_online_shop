import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import FilterProducts from "../../filterProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseAllUrl from "../../../utils/api";
import ProductCard from "../productCard";

function AllProducts() {
  const [productsAll, setProductsAll] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Отфильтрованные товары

  // Получаем все продукты при загрузке компонента
  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios.get(`${BaseAllUrl}/products/all`);
        setProductsAll(response.data);
        setFilteredProducts(response.data); // Изначально все товары
      } catch (error) {
        console.log("Error", error);
      }
    }
    getAllProducts();
  }, []);

  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
  };
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
      <FilterProducts products={productsAll} onFilter={handleFilter} />

      <ProductCard productsAll={filteredProducts} />
    </div>
  );
}

export default AllProducts;

// onMouseEnter={() => setIsHoverButton(product.id)}
// onMouserLeave={() => setIsHoverButton(null)}

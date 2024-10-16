import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import BaseAllUrl from "../../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterProducts from "../filterProducts";
import DiscountsItem from "../discountsItem";
import { useLocation } from "react-router-dom";

function Discounts({ Limit }) {
  const [sales, setSales] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]); // Отфильтрованные товары
  const location = useLocation();

  useEffect(() => {
    async function getSale() {
      try {
        const response = await axios.get(`${BaseAllUrl}/products/all`);
        const discountedProducts = response.data.filter(
          (product) => product.discont_price !== null
        );
        setSales(discountedProducts); // Товары со скидкой
        setFilteredSales(discountedProducts); // Изначально все товары отображаются
      } catch (error) {
        console.log(error);
      }
    }
    getSale();
  }, []);

  // Функция для обновления отфильтрованных товаров
  const handleFilter = (filteredProducts) => {
    setFilteredSales(filteredProducts);
  };

  return (
    <div className={styles.sale_container}>
      {location.pathname === "/sale" && (
        <div className={styles.nav_discounted}>
          <Link
            to="/"
            style={{
              padding: "8px 16px",
              backgroundColor: "#dddddd",
              border: "none",
              borderRadius: "6px",
            }}
          >
            <button className={styles.btnMain_sale}>Main page</button>
          </Link>
          <hr />
          <button>All sales</button>
        </div>
      )}
      {location.pathname === "/sale" ? (
        <h1>Discounted items</h1>
      ) : (
        <div className={styles.sale_homePage}>
          <h1>Sale</h1>
          <hr />
          <Link to="/sale">
            <button>All sales</button>
          </Link>
        </div>
      )}

      {location.pathname === "/sale" && (
        <FilterProducts products={sales} onFilter={handleFilter} />
      )}
      <DiscountsItem sales={filteredSales} Limit={Limit} />
    </div>
  );
}

export default Discounts;

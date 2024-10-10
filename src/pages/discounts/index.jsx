import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import BaseAllUrl from "../../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterProducts from "../filterProducts";

function Discounts() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getSale() {
      try {
        const response = await axios.get(`${BaseAllUrl}/products/all`);
        setSales(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSale();
  }, []);

  const discountedSale = sales.filter((sale) => sale.discont_price);
  return (
    <div className={styles.sale_container}>
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
      <h1>Discounted items</h1>
      <FilterProducts />
      <div className={styles.sales_grid}>
        {discountedSale.slice(0, 8).map((sale) => (
          <div key={sale.id} className={styles.salesList}>
            <Link key={sale.id}>
              {sale.image && (
                <img
                  style={{
                    width: "316px",
                    height: "284px",
                    objectFit: "cover",
                  }}
                  src={`${BaseAllUrl}${sale.image}`}
                  alt={sale.title}
                />
              )}
            </Link>
            <h2 className={styles.title_sale}>{sale.title}</h2>
            <span>
              {sale.discont_price ? (
                <>
                  <p style={{ fontSize: "40px", fontWeight: "700" }}>
                    ${sale.discont_price}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "#8b8b8b",
                      textDecoration: "line-through",
                    }}
                  >
                    ${sale.price}
                  </p>
                </>
              ) : (
                <p style={{ fontSize: "40px", fontWeight: "700" }}>
                  ${sale.price}
                </p>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discounts;

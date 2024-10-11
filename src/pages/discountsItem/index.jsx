import styles from "./styles.module.css";
import BaseAllUrl from "../../utils/api";
import { Link } from "react-router-dom";

// Функция для случайной сортировки массива
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function DiscountsItem({ Limit, sales }) {
  const discountedSale = sales.filter((sale) => sale.discont_price);

  const shuffleSales = shuffleArray(discountedSale);

  return (
    <div className={styles.sales_grid}>
      {shuffleSales.slice(0, Limit).map((sale) => (
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
  );
}

export default DiscountsItem;

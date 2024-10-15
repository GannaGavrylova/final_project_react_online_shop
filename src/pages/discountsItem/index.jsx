import styles from "./styles.module.css";
import BaseAllUrl from "../../utils/api";
import { Link, useLocation } from "react-router-dom";
import AddToCartButton from "../../components/addToCartButton";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";

// Функция для случайной сортировки массива
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function DiscountsItem({ Limit, sales }) {
  const discountedSale = sales.filter((sale) => sale.discont_price);
  const shuffleSales = shuffleArray(discountedSale);
  const location = useLocation();
  const dispatch = useDispatch();

  function handleAddTocart(sale) {
    dispatch(addProduct({ ...sale, quantity: 1 })); // Добавляем товар с количеством 1
  }
  return (
    <div className={styles.sales_grid}>
      {shuffleSales.slice(0, Limit).map((sale) => {
        const discountPercentage = sale.discont_price
          ? Math.round(((sale.price - sale.discont_price) / sale.price) * 100)
          : 0;
        return (
          <div key={sale.id} className={styles.salesList}>
            <Link
              key={sale.id}
              to={location.pathname === "/" ? "/sale" : `/products/${sale.id}`}
            >
              {sale.image && (
                <img
                  style={{
                    width: "316px",
                    height: "284px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                  src={`${BaseAllUrl}${sale.image}`}
                  alt={sale.title}
                />
              )}
            </Link>
            <div className={styles.addToCartButton}>
              <AddToCartButton onClick={() => handleAddTocart(sale)} />
            </div>
            <div className={styles.addToCartButton}></div>
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
                  <p className={styles.discount_percentage}>
                    -{discountPercentage}%
                  </p>
                </>
              ) : (
                <p style={{ fontSize: "40px", fontWeight: "700" }}>
                  ${sale.price}
                </p>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default DiscountsItem;

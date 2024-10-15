import styles from "./styles.module.css";
import AddToCartButton from "../../../components/addToCartButton";
import BaseAllUrl from "../../../utils/api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/slices/cartSlice";

function ProductCard({ productsAll }) {
  const dispatch = useDispatch();
  // Функция добавления товара в корзину
  function handleAddTocart(product) {
    dispatch(addProduct({ ...product, quantity: 1 })); // Добавляем товар с количеством 1
  }
  return (
    <>
      <div className={styles.products_grid}>
        {productsAll.slice(0, 12).map((product) => {
          const discountPercentage = product.discont_price
            ? Math.round(
                ((product.price - product.discont_price) / product.price) * 100
              )
            : 0;
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
              <div className={styles.addToCartButton}>
                <AddToCartButton onClick={() => handleAddTocart(product)} />
              </div>

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
                    <p className={styles.discount_percentage}>
                      -{discountPercentage}%
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
    </>
  );
}

export default ProductCard;

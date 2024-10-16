import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseAllUrl from "../../utils/api";
import { useLocation } from "react-router-dom";

function Categories({ Limit }) {
  const [allCategories, setAllCategories] = useState([]);
  const location = useLocation(); // Получаем текущее местоположение (путь)

  useEffect(() => {
    async function getAllCategories() {
      try {
        const response = await axios.get(`${BaseAllUrl}/categories/all`);
        setAllCategories(response.data);
      } catch (error) {
        console.log("Error fetching categories:", error);
        return null;
      }
    }
    getAllCategories();
  }, []);

  return (
    <div className={styles.categories_container}>
      {location.pathname === "/categories" && (
        <div className={styles.nav_container}>
          <Link
            to="/"
            style={{
              padding: "8px 16px",
              backgroundColor: "#dddddd",
              border: "none",
              borderRadius: "6px",
            }}
          >
            <button className={styles.btnMainPage}>Main page</button>
          </Link>
          <hr />
          <button>Categories</button>
        </div>
      )}

      {location.pathname === "/categories" ? (
        <h1>Categories</h1>
      ) : (
        <div className={styles.categories_homePage}>
          <h1>Categories</h1>
          <hr />
          <Link to="/categories">
            <button>All categories</button>
          </Link>
        </div>
      )}

      <div className={styles.category_grid}>
        {allCategories.slice(0, Limit).map((category) => {
          return (
            <div className={styles.contegoriesCard} key={category.id}>
              <Link key={category.id} to={`/categories/${category.id}`}>
                {category.image && (
                  <img
                    style={{
                      width: "316px",
                      height: "284px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                    src={`${BaseAllUrl}${category.image}`}
                    alt={category.title}
                  />
                )}
              </Link>
              <Link to={`/categories/${category.id}`}></Link>

              <h2 className={styles.title_categiry}>{category.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;

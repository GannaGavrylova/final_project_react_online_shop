import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseAllUrl from "../../utils/api";

function Categories() {
  const [allCategories, setAllCategories] = useState([]);

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
      <h1>Categories</h1>
      <div className={styles.category_grid}>
        {allCategories.map((category) => {
          return (
            <div key={category.id}>
              <Link key={category.id} to={`/categories/${category.id}`}>
                {category.image && (
                  <img
                    style={{
                      width: "316px",
                      height: "284px",
                      objectFit: "cover",
                    }}
                    src={`${BaseAllUrl}${category.image}`}
                    alt={category.title}
                  />
                )}
              </Link>
              <Link to={`/categories/${category.id}`}></Link>

              <h2>{category.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;

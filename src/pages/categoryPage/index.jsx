import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import React from "react";
import FilterProducts from "../filterProducts";
import BaseAllUrl from "../../utils/api";
import ProductsCategory from "../productsCategory";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CategoryPage() {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${BaseAllUrl}/categories/${id}`);
        setCategoryName(response.data.category.title);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  return (
    <div className={styles.category_container}>
      <div className={styles.nav_category}>
        <Link to="/">
          <button className={styles.btn}>Main page</button>
        </Link>
        <hr />
        <Link to="/categories">
          <button className={styles.btn}>Categories</button>
        </Link>
        <hr />
        {categoryName && <button className={styles.btn}>{categoryName}</button>}
      </div>
      <h1>{categoryName}</h1>
      <FilterProducts />
      <ProductsCategory setProducts={setProducts} products={products} />
    </div>
  );
}

export default CategoryPage;

import styles from "./styles.module.css";
import { Select, Space } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const sortingPrice = [
  "by default",
  "newest",
  "price: high-low",
  "price: low-high",
];

function FilterProducts({ products, onFilter, showDiscountFilter = true }) {
  const [sorting, setSorting] = useState(sortingPrice[0]);
  const [priceForm, setPriceForm] = useState(""); // Цена "от"
  const [priceTo, setPriceTo] = useState(""); // Цена "до"
  const [isDicounted, setIsDicounted] = useState(false);
  const location = useLocation();

  console.log(isDicounted);

  // Функция фильтрации товаров
  const filterProducts = () => {
    let filteredProducts = [...products];
    // Фильтрация по диапазону цен
    if (priceForm) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= Number(priceForm)
      );
    }
    if (priceTo) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= Number(priceTo)
      );
      console.log(priceTo);
    }
    // Фильтрация по скидкам
    if (isDicounted) {
      // console.log(isDicounted);
      filteredProducts = filteredProducts.filter(
        (product) => product.discont_price !== null
      );
    }

    switch (sorting) {
      case "newest":
        filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "price: high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "price: low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    // Передаем отфильтрованные товары через колбек в родительский компонент
    onFilter(filteredProducts);
  };

  // Обработка изменений фильтров, включая изменение состояния скидки
  useEffect(() => {
    filterProducts(); // Вызов фильтрации при любом изменении состояния фильтров
  }, [sorting, priceForm, priceTo, isDicounted, products]); // Добавляем products, чтобы фильтрация срабатывала при обновлении товаров

  const handleFilterChange = () => {
    filterProducts();
  };

  // Функция для изменения цены "от"
  const handlePriceFormChange = (e) => {
    setPriceForm(e.target.value);
  };
  // Функция для изменения цены "до"
  const handlePriceToChange = (e) => {
    setPriceTo(e.target.value);
  };
  // Функция для изменения состояния скидок
  const handleDiscountChange = (e) => {
    setIsDicounted(e.target.checked);
  };
  // Обработчик изменения сортировки
  const handleSortingChange = (value) => {
    setSorting(sortingPrice[value]);
  };

  return (
    <>
      <div className={styles.sortet_container}>
        <div className={styles.price_filter}>
          <h4>Price</h4>
          <input
            type="number"
            name="number"
            placeholder="from"
            value={priceForm}
            onChange={handlePriceFormChange}
            onBlur={handleFilterChange}
          />
          <input
            type="number"
            name="number"
            placeholder="to"
            value={priceTo}
            onChange={handlePriceToChange}
            onBlur={handleFilterChange}
          />
        </div>

        {location.pathname === "/sale" ? null : (
          <div className={styles.discount_filter}>
            <h4>Discounted items </h4>
            <input
              type="checkbox"
              name="checkbox"
              checked={isDicounted}
              onChange={handleDiscountChange}
            />
          </div>
        )}

        <div className={styles.sortet_filter}>
          <h4>Sorted </h4>
          <Space wrap>
            <Select
              defaultValue={sortingPrice[0]}
              style={{
                width: 170,
                color: 1,
              }}
              value={sorting}
              onChange={(value) => {
                handleSortingChange(value);
                handleFilterChange();
              }}
              options={sortingPrice.map((sorting, index) => ({
                label: sorting,
                value: index,
              }))}
            />
          </Space>
        </div>
      </div>
    </>
  );
}

export default FilterProducts;

import styles from "./styles.module.css";
import { Select, Space } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const sortingPrice = [
  "by default",
  "newest",
  "price: high-low",
  "price: low-high",
];

function FilterProducts() {
  const [sorting, setSorting] = useState(sortingPrice[0]);
  const location = useLocation();

  const handleChange = (value) => {
    setSorting(sortingPrice[value]);
  };
  return (
    <>
      <div className={styles.sortet_container}>
        <div className={styles.price_filter}>
          <h4>Price</h4>
          <input type="number" name="number" placeholder="from" />
          <input type="number" name="number" placeholder="to" />
        </div>

        {location.pathname === "/sale" ? null : (
          <div className={styles.discount_filter}>
            <h4>Discounted items </h4>
            <input type="checkbox" name="checkbox" />
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
              onChange={handleChange}
              options={sortingPrice.map((sorting) => ({
                label: sorting,
                value: sorting,
              }))}
            />
          </Space>
        </div>
      </div>
    </>
  );
}

export default FilterProducts;

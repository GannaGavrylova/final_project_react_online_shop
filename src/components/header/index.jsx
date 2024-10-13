import styles from "./styles.module.css";
import logo from "../../assets/icons/logo.svg";
import basket from "../../assets/icons/basket.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.logo_container}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={styles.categories_container}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
            textDecoration: "none",
          })}
        >
          Main Page
        </NavLink>
        <NavLink
          to="/categories"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
            textDecoration: "none",
          })}
        >
          Categories
        </NavLink>
        <NavLink
          to="/products/all"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
            textDecoration: "none",
          })}
        >
          All products
        </NavLink>
        <NavLink
          to="/sale"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
            textDecoration: "none",
          })}
        >
          All sales
        </NavLink>
      </div>

      <div className={styles.basket_container}>
        <NavLink to="/cart">
          <img src={basket} alt="basket" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

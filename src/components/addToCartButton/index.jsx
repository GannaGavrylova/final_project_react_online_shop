import styles from "./styles.module.css";
import { useState } from "react";

function AddToCartButton({ onClick }) {
  const [stateButton, setStateButton] = useState("normal");

  function handleClick(event) {
    setStateButton("Added");
    if (onClick) {
      onClick(event);
    }
    setTimeout(() => setStateButton("normal"), 2000);
  }

  return (
    <div className={styles.blueButton_container}>
      <button
        className={`${styles.blueButton} ${
          stateButton === "Added" ? styles.addedState : ""
        }`}
        onClick={handleClick}
      >
        {stateButton === "Added" ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}

export default AddToCartButton;

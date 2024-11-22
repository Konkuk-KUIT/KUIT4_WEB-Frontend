import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShowFoodCategories.module.css";

const ShowFoodCategories = (props) => {
  const imgSrc = props.foodCategory.src;
  return (
    <div className={styles.container}>
      <Link to="/store" className={styles.foodCategoryLink}>
        <img
          src={imgSrc}
          alt="food category img"
          className={styles.image}
        />
        <p className={styles.foodCategoryName}>{props.foodCategory.category}</p>
      </Link>
    </div>
  );
};

export default ShowFoodCategories;
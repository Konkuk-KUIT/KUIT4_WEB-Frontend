import React from "react";
import ShowFoodCategories from "./ShowFoodCategories/ShowFoodCategories";
import styles from "./Home.module.css";

const Home = () => {
  const foodCategories = [
    { id: 1, category: "피자", src: "./pizza.svg" },
    { id: 2, category: "샐러드", src: "./salad.svg" },
    { id: 3, category: "햄버거", src: "./hamburger.svg" },
    { id: 4, category: "한식", src: "./koreanFood.svg" },
    { id: 5, category: "분식", src: "./snackFood.svg" },
    { id: 6, category: "치킨", src: "./chicken.svg" },
    { id: 7, category: "초밥", src: "./sushi.svg" },
    { id: 8, category: "샌드위치", src: "./sandwich.svg" },
    { id: 9, category: "파스타", src: "pasta.svg" },
    { id: 10, category: "디저트", src: "dessert.svg" },
    { id: 11, category: "커피", src: "coffee.svg" },
    { id: 12, category: "더보기", src: "showMore.svg" },
  ];

  return (
    <div className={styles.mainDiv}>
      <div className={styles.header}>
        <h1 className={styles.headerText}>오늘은 무엇을 먹을까요?</h1>
        <p className={styles.userLocation}>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>
      </div>
      <div className={styles.container}>
        {foodCategories.map((foodCategory) => (
          <ShowFoodCategories foodCategory={foodCategory} key={foodCategory.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { starIcon } from "../../assets";
import styles from "./StoreId.module.css";

import { getStore } from "../../apis/stores";
import MenuItem from "../../components/menuItem/MenuItem";



const StoreId = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState();

  useEffect(() => {
      getStore(storeId).then((value) => setStore(value));
  }, [storeId]);
  
  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
              <h1 className={styles.title}>{store.name}</h1>
              <span className={styles.ratingContainer}>
              <img src={starIcon} alt="star" className={styles.star} />
                  <span className={styles.rating}>{store.rate}</span>
                  <span className={styles.review}>리뷰 {store.reviewCnt}</span>
              </span>
              <div className={styles.titleSubContainer}>
                  <span className={styles.infoStyle}>결제방법</span>
                  <span className={styles.infoStyle}>토스결제</span>
              </div>
              <div className={styles.titleSubContainer}>
                  <span className={styles.infoStyle}>최소주문</span>
                  <span className={styles.infoStyle}>{store.minDeliveryPrice}원</span>
              </div>
              <div className={styles.deliveryContainer}>
                  <span className={styles.infoStyle}>배달시간</span>
                  <span className={styles.infoStyle}>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</span>
              </div>
          </div>
          <div className={styles.menuItem}>
        {store.menus.map((menu) => {
                return <MenuItem menu={menu} store={store} />;
                })}
            </div>
    </div>
  );
};

export default StoreId;
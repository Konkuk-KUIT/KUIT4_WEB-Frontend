import styles from "./ShowSelectedMenus.module.css";

const ShowSelectedMenus = ({ menu, cnt }) => {
  return (
    <div className={styles.container}>
      <img src="http://via.placeholder.com/54x54" className={styles.menuImg} />
      <div className={styles.menuInfo}>
        <h3 className={styles.menuName}>{menu.name}</h3>
        <span className={styles.menuComponents}>{menu.ingredients}</span>
        <span className={styles.menuPrice}>{menu.price}원</span>
      </div>
      <div className={styles.menuCnt}>
        {cnt}개
      </div>
      <img src="/arrowBackRight.svg" alt="arrowBackrightSVG" />
    </div>
  )
}

export default ShowSelectedMenus

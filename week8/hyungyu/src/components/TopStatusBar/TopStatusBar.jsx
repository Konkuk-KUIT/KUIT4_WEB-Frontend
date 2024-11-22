import styles from "./TopStatusBar.module.css";

const TopStatusBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/time.svg" alt="timeSVG" className={styles.time} />
      </div>
      <div className={styles.right}>
        <img src="/mobileSignal.svg" alt="mobileSignalSVG" />
        <img src="/wifi.svg" alt="wifiSVG" />
        <img src="/battery.svg" alt="batterySVG" />
      </div>
    </div>
  )
}

export default TopStatusBar

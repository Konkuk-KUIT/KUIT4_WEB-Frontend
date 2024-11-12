import stores from "../../models/stores";
import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Stores.module.css";
import { Link } from "react-router-dom";


const Stores = ({header_bar}) => {
  const StoreIntro = ({store}) =>{
    return (
    <Link to={`/store/${store.id}`}>
      <div className={styles.box}>
        <div className={styles.graybox}></div>
        <div className={styles.id}>{store.id}위</div>
        <div className={styles.name}>{store.name}</div>
        <img src="/star.svg" alt="starout"className={styles.rate} />
        <div className={styles.rates}>
         
          {store.rate}({store.reviewCnt})
        </div>
        <div className={styles.time}>{store.minDeliveryTime}분~{store.maxDeliveryTime}분∙배달비 {store.deliveryFee}</div>
      </div>
      </Link>
    )
  }
  return <div>
    {header_bar(true)}
    {stores.map((store)=>(
      <StoreIntro key={store.id} store={store}/>
    ))}
    <OrderBar/>
    </div>;
};

export default Stores;

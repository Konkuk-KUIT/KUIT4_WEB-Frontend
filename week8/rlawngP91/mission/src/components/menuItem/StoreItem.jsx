import { useNavigate } from 'react-router-dom';
import styles from './StoreItem.module.css';
import { starIcon } from '../../assets';

const StoreItem = ({ store }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/store/${store.id}`);
    };

    return (
        <div className={styles.storeItem} onClick={handleClick}>
            <div className={styles.imageContainer}>
                <img src='/api/placeholder/70/70' alt="store" className={styles.image} />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.rateNum}>{store.id}위</h2>
                    <h2 className={styles.name}>{store.name}</h2>
                    <div className={styles.ratingContainer}>
                        <span className={styles.rating}>
                            <img src={starIcon} alt="star" className={styles.starIcon} />
                            {store.rate}
                        </span>
                        <span className={styles.reviewCount}>
                            ({store.reviewCnt.toLocaleString()})
                        </span>
                    </div>
                </div>
                <div className={styles.info}>
                    <span>{store.minDeliveryTime}-{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee.toLocaleString()}원</span>
                </div>
            </div>
        </div>
    );
};

export default StoreItem;
import styles from './Cart.module.css';
import CartMenuItem from '../../components/menuItem/CartMenuItem';
import { exclamation } from '../../assets';
import useCartStore from '../../store/cartStore';

const Cart = () => {

    const store = useCartStore((state) => state.store);
    const menus = useCartStore((state) => state.menus);
    
    // 총 주문금액 계산
    const subtotal = menus.reduce((sum, menu) => sum + menu.price, 0);
    const deliveryFee = store?.deliveryFee;
    const total = subtotal + deliveryFee;

    const isMinOrderSatisfied = store && subtotal >= store.minDeliveryPrice;
    
    return (
        <div className={styles.CartContainer}>
            <div className={styles.storeInfoContainer}>
                <h2 className={styles.storeName}>{store?.name}</h2>
                {!isMinOrderSatisfied && (
                    <div className={styles.alert}>
                        <div className={styles.alertContainer}>
                            <span className={styles.minOrderText}>최소금액 미달</span>
                            <img src={exclamation} alt="exclamation-mark" className={styles.exclamationMark} />
                        </div>
                    </div>
                )}
            </div>
            {menus.map((menu, index) => (
                <CartMenuItem 
                    key={index} 
                    menu={menu}
                />
            ))}
            <div className={styles.addMoreContainer}>
                <button className={styles.addMoreButton}>더 담기 +</button>
            </div>
            
            <div className={styles.orderSummaryContainer}>
                <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>주문금액</span>
                    <span className={styles.summaryValue}>{subtotal.toLocaleString()}원</span>
                </div>
                <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>배달요금</span>
                    <span className={styles.summaryValue}>{deliveryFee?.toLocaleString() || "0"}원</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span className={styles.summaryLabel}>총 결제금액</span>
                    <span className={styles.summaryValue}>{total?.toLocaleString()}원</span>
                </div>
            </div>

            <div className={styles.bottombar}>
                <span className={styles.totalPrice}>
                    최소주문금액 {store?.minDeliveryPrice?.toLocaleString()}원
                </span>
                <button 
                    className={styles.orderBtn}
                    disabled={!isMinOrderSatisfied}
                >
                    <span className={styles.orderBtnText}>
                        {total.toLocaleString()}원 결제하기
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Cart;
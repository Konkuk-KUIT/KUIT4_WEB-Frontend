import styles from './CartMenuItem.module.css';
import { menuDetail } from '../../assets';

const CartMenuItem = ({ menu }) => {
    return (
        <div className={styles.cartItemContainer}>
            <img 
                src={menu.image || "/api/placeholder/54/54"} 
                alt={menu.name} 
                className={styles.menuImage} 
            />
            
            <div className={styles.menuInfo}>
                <h3 className={styles.menuName}>{menu.name}</h3>
                <div className={styles.quantityContainer}>
                    <p className={styles.menuOptions}>{menu.ingredients}</p>
                    <span className={styles.quantity}>1개</span>
                    <img 
                        src={menuDetail} 
                        alt="arrow" 
                        className={styles.menuDetailBtn} 
                    />
                </div>
                <span className={styles.itemPrice}>
                    {menu.price.toLocaleString()}원
                </span>
            </div>
        </div>
    );
};

export default CartMenuItem;
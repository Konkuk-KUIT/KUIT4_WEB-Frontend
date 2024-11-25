import { useState } from 'react';
import Button from "../Button";
import styles from './MenuItem.module.css';
import useCartStore from "../../store/cartStore";
import Modal from "../modal/Modal";
import { menuImgIcon } from "../../assets";

const MenuItem = ({ menu, store }) => {
    const [showModal, setShowModal] = useState(false);
    const { addMenu, store: cartStore, menus, resetCart } = useCartStore();

    const handleAddMenu = () => {
        // 장바구니가 비어있는 경우
        if (!cartStore || menus.length === 0) {
            addMenu(menu, store);
            return;
        }

        // 첫 번째 메뉴의 storeId 확인
        const firstMenuStoreId = menus[0].storeId;
        if (firstMenuStoreId === store.id) {
            addMenu(menu, store);
            return;
        }

        // 다른 가게의 메뉴인 경우 모달 표시
        setShowModal(true);
    };
    
    const handleConfirmReset = () => {
        resetCart();
        addMenu(menu, store);
        setShowModal(false);
    };

    return (
        <div className={styles.menuItem}>
            <img src={menuImgIcon} className={styles.menuImg} alt="menuImg" />
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.name}>
                            {menu.name}
                            {menu.isBest && <span className={styles.bestBadge}>인기</span>}
                        </h3>
                    </div>
                    <span className={styles.price}>
                        {menu.price.toLocaleString()}원
                    </span>
                </div>
                <div className={styles.body}>
                    <p className={styles.ingredients}>{menu.ingredients}</p>
                    <div className={styles.buttonContainer}>
                        <Button onClick={handleAddMenu} type="button" size="sm">
                            담기
                        </Button>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal
                    title="장바구니 초기화"
                    message="다른 가게의 메뉴입니다. 장바구니를 초기화하고 새로운 메뉴를 담으시겠습니까?"
                    onConfirm={handleConfirmReset}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default MenuItem;
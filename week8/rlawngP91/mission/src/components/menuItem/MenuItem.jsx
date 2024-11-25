import { useState } from 'react';
import Button from "../Button";
import styles from './MenuItem.module.css';
import useCartStore from "../../store/cartStore";
import Modal from "../modal/Modal";
import { menuImgIcon } from "../../assets";

const MenuItem = ({ menu, store }) => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  // 로딩 상태 추가 (비동기로 처리되면서 생기는 오류방지)
    const { addMenu, resetCart } = useCartStore();

    const handleAddMenu = async () => {
        try {
            setIsLoading(true);
            await addMenu(menu, store);  // CartStore에서 처리
        } catch (error) {
            console.error('Failed to add menu:', error);
        } finally {
            setIsLoading(false);
        }
    };
    const handleConfirmReset = async () => {
        try {
            setIsLoading(true);
            await resetCart();
            await addMenu(menu, store);
            setShowModal(false);
        } catch (error) {
            console.error('Failed to reset and add menu:', error);
        } finally {
            setIsLoading(false);
        }
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
                        <Button 
                            onClick={handleAddMenu} 
                            type="button" 
                            size="sm"
                            disabled={isLoading}  // 로딩 중 버튼 비활성화
                        >
                            {isLoading ? '담는 중...' : '담기'}
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
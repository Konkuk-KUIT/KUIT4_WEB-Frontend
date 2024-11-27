import React from 'react';
import Button from '../Button';
import styles from "./MenuItem.module.css";
import useCartStore from '../../pages/Cart/cartStore';

const MenuItem = ({ menu, handleAddMenu }) => {
    
    //const addMenu = useCartStore((state) => state.addMenu);
    //const handleAddMenu = () => {
    //    addMenu(menu);
    //};

    return (
        <>
            <div className={styles.menuRow}>
                <div className ={styles.allMenu}>
                <img className={styles.menuImg}></img>
                <div className={styles.menuContainer}>
                    <div className={styles.menuName}>{menu.name}</div>
                    <div className={styles.menuPrice}>{menu.price}원</div>
                    <div className={styles.menuIngredients}>{menu.ingredients}</div>
                </div>
                <Button onClick={handleAddMenu} type="button" size="sm">담기</Button>
                </div>
            </div>
        </>
    );
};

export default MenuItem;
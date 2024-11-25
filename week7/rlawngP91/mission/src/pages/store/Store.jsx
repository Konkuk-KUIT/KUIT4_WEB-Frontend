import styles from './Store.module.css';

import StoreItem from "../../components/menuItem/StoreItem";
import stores from "../../models/stores";

const Store = () => {
    if (!stores) {
        return <div>가게를 찾을 수 없어요 🥺</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.categoryTitle}>샐러드</h1>
            <div className={styles.storeList}>
                {stores.map((store) => (
                    <StoreItem key={store.id} store={store} />
                ))}
            </div>
        </div>
    );
};

export default Store;

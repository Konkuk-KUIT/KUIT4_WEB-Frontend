import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Store.module.css';

import StoreItem from "../../components/menuItem/StoreItem";
import { getStores } from '../../apis/stores';

const Store = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const data = await getStores();
                setStores(data);
            } catch (error) {
                console.error('Failed to fetch stores:', error);
            }
        };
        fetchStores();
    }, []);  // 컴포넌트 마운트 시 한 번만 실행

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

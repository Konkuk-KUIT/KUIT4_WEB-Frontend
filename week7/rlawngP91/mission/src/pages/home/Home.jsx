import * as icons from '../../assets';
import styles from './Home.module.css';
import HomeStoreItem from '../../components/menuItem/HomeStoreItem'


const Home = () => {
    const menuItems = [
        { icon: icons.pizzaIcon, label: '피자' },
        { icon: icons.saladIcon, label: '샐러드' },
        { icon: icons.hamburgerIcon, label: '햄버거' },
        { icon: icons.koreanIcon, label: '한식' },
        { icon: icons.noodlesIcon, label: '분식' },
        { icon: icons.chickenIcon, label: '치킨' },
        { icon: icons.sushiIcon, label: '초밥' },
        { icon: icons.sandwichIcon, label: '샌드위치' },
        { icon: icons.pastaIcon, label: '파스타' },
        { icon: icons.dessertIcon, label: '디저트' },
        { icon: icons.cokeIcon, label: '커피' },
        { icon: icons.moreIcon, label: '더보기' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header_container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        오늘은 무엇을 먹을까요?
                    </h1>
                    <span className={styles.address}>한남 중앙로 40길 (한남 빌리지)(으)로 배달</span>
                </div>
            </div>
            <div className={styles.menu_grid}>
                {menuItems.map((item, index) => (
                    <HomeStoreItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </div>
        </div>

    )
}

export default Home
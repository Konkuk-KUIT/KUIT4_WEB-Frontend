import styles from "./home.module.css";
import { Link } from 'react-router-dom';
import OrderBar from "../../components/OrderBar/OrderBar";
const menu =[
  {name :"피자",
    src : "pizza.svg",
  },
  {name :"샐러드",
    src : "salad.svg",
  },{name :"햄버거",
    src : "ham.svg",
  },{name :"한식",
    src : "koreafood.svg",
  },{name :"분식",
    src : "bunsik.svg",
  },{name :"치킨",
    src : "chicken.svg",
  },{name :"초밥",
    src : "chbam.svg",
  },{name :"샌드위치",
    src : "sandwich.svg",
  },{name :"파스타",
    src : "pasta.svg",
  },{name :"디저트",
    src : "donut.svg",
  },{name :"커피",
    src : "coffee.svg",
  },{name :"더보기",
    src : "plusa.svg",
  }
]
const menus = []; // 현재는 빈 배열
  const store = { name: "맛있는 음식점" };
const MenuGrid = () => {
  
  const groupedMenu = menu.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);

  return (
    <div className={styles.grid_food}>
      {groupedMenu.map((group, groupIndex) => (
        <div key={groupIndex} className={styles.category}>
          {group.map((item, itemIndex) => (
            <div key={itemIndex} className={styles.prod}>
              <Link to={{
                  pathname: "/store",
                }} className={styles.prod} >
              <img src={item.src} alt={item.name} className={styles.food} />
              <div className={styles.foodtext}>{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
const Title = () =>{
return <>
<div className={styles.title}>
    <div className={styles.titletext}>
      <div className={styles.bold}>오늘은 무엇을 먹을까요?</div>
      <div className={styles.text}>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt; </div>
    </div>
  </div>
  </>
}
const Home = ({header_bar}) => {
  return <div>
    {header_bar(false)}
    <Title/>
    <MenuGrid/>
    <OrderBar menus={menus} store={store} />

  </div>;
};

export default Home;

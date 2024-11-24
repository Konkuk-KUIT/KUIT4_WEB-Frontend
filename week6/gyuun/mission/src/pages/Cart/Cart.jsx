// import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Cart.module.css";
// import stores from "../../models/stores";
import useCartStore from "../Store/cartStore";
import { BlackBar,BlackBarin} from "../../components/OrderBar/OrderBar.styles"; // 스타일 가져오기
import Button from "../../components/Button";
const Cart = ({header_bar}) => {
  const menus = useCartStore((state)=>state.menus); // 메뉴 목록
  const store = useCartStore((state)=>state.store); // 스토어 정보
  
  const GrayBox = () =>{
    return <div className={styles.grayBox}></div>
  }
  const WhiteBox = () =>{
    return <div className={styles.whiteBox}></div>
  }
  const Saladaccount = ({menu}) => {

    if (!store) {
      return <div>아직 메뉴를 선택하지 않으셨습니다.</div>;  // store 데이터가 없으면 로딩 화면을 표시
    }
    return<div className={styles.saladaccount}>
            <div className={styles.storename}>{store.name}</div>
            <div className={styles.saladbox}></div>

            <div className={styles.storebottom}>
              <div className={styles.saladname}>{menu.name}</div>
              <div className={styles.ingredient}>{menu.ingredients}</div>
              <div className={styles.account}>{menu.price}</div>
            </div>
    </div>
  }
  const SaladPlus = () =>{
    return <div className={styles.plusA}>
      <div className={styles.blueplus}>더 담기+</div>
    </div>
  }
  const AsignCount = ()=>{
    if (!store) {
      return <div></div>;  // store 데이터가 없으면 로딩 화면을 표시
    }
    const currentmoney = menus.reduce((acc, cur) => acc + cur.price, 0)
    const minidelv = store.deliveryFee+currentmoney;

    return <div className={styles.asigncount}>
      <div className={styles.asignaccount}>
        <div className={styles.asignfont}>주문금액</div>
        <div className={styles.asignfont}>{currentmoney}원</div>
      </div>
      <div className={styles.asignaccount}>
        <div className={styles.asignfont}>배달요금</div>
        <div className={styles.asignfont}>{store.deliveryFee}원</div>
      </div>
      <div className={styles.asignaccount}>
        <div className={styles.asignfont}>총 결제금액</div>
        <div className={styles.asignfont}>{minidelv}원</div>
      </div>
    </div>

  }
  const BottomAccount = ()=>{
    if (!store) {
      return <div>아직 메뉴를 선택하지 않으셨습니다.</div>;  // store 데이터가 없으면 로딩 화면을 표시
    }
    const currentmoney = menus.reduce((acc, cur) => acc + cur.price, 0);
    const minidelv = store.deliveryFee+currentmoney;
    const dynamicTop = menus.length * 50;
    
  return <div className={styles.Botbox} style={{ top: `${dynamicTop}px` }}>
            <div className={styles.minde}>최소 주문금액 {store.minDeliveryPrice}원</div>
            <Button type="button" size="xl"disabled={(minidelv < store.minDeliveryPrice)}
          top= "39px" left="20px">
            {/* onClick={handleOrder}  */}
            {minidelv}원 결제하기
           </Button>
            <BlackBar><BlackBarin><img src="/blackbar.svg" alt="blackout" /></BlackBarin></BlackBar>

    </div>
  }
  return <div>
    {header_bar(true)}
    <div className={styles.cartbox}>
      <GrayBox/>
      {menus.map((menu, index) => (
          <div key={index}>
            <Saladaccount menu={menu} />
            <SaladPlus />
            <GrayBox />
          </div>
        ))}
      <WhiteBox/>
      <AsignCount/>
      <BottomAccount/>
    </div>
  </div>;
};

export default Cart;

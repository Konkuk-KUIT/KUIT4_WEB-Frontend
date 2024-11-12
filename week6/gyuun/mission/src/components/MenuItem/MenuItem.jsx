import Button from "../Button";
import { SaladBox, GrayCircle, SaladName, SaladBest, SaladPrice, Saladingredient } from './MenuItem.styles';
import useCartStore from "../../pages/Store/cartStore";
const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state)=>state.addMenu);
  const clearCart = useCartStore((state)=>state.clearCart)
  const currentStore = useCartStore((state) => state.store);  // 현재 store 가져오기
  const menus = useCartStore((state) => state.menus);  // 현재 장바구니의 메뉴들 가져오기

  const handleAddMenu = () => {
    // 현재 장바구니에 담긴 가게와 새로 추가하려는 메뉴의 가게가 다른 경우
    if (menus.length > 0 && menus[0].storeId !== menu.storeId) {
      const confirmClear = window.confirm(
        "장바구니에는 동일 가게의 메뉴만 추가할 수 있습니다. 기존 항목을 초기화할까요?"
      );

      if (confirmClear) {
        // 장바구니를 초기화한 후 새 메뉴를 추가
        clearCart();
        

        addMenu(menu);
      }
    } else {
      // 가게가 같거나 장바구니가 비어있는 경우, 메뉴 추가
      addMenu(menu);
    }
  };

  return (
    <SaladBox>
      <GrayCircle/>
      <SaladName>{menu.name}</SaladName>
      <SaladBest/>
      <SaladPrice>{menu.price}</SaladPrice>
      <Saladingredient>{menu.ingredients}</Saladingredient>
      
      <Button onClick={handleAddMenu} type="button" size="sm"disabled={false} top="19px" left="282px">
        담기
      </Button>
     

      </SaladBox>
    

  );
};

export default MenuItem;

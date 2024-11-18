// OrderBar.jsx
import React from 'react';
import { OrderBarContainer, TotalAmount ,TotalAmountText,BlackBar,BlackBarin} from './OrderBar.styles'; // 스타일 가져오기
import Button from '../Button';
import useCartStore from '../../pages/Store/cartStore';
import { Link } from "react-router-dom";

const OrderBar = () => {
  
  const menus = useCartStore((state)=>state.menus); // 메뉴 목록
  const store = useCartStore((state)=>state.store); // 스토어 정보
  
  const handleOrder = () => {}; // 주문 처리 함수

  return (
    <OrderBarContainer>
      <TotalAmountText>총 주문금액</TotalAmountText>
      <TotalAmount>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</TotalAmount>
      <Link to={"/cart"}>
      <Button onClick={handleOrder} type="button" size="lg" top="19px" left="282px">
        주문하기
      </Button>
      </Link>
    </OrderBarContainer>
  );
};

export default OrderBar;
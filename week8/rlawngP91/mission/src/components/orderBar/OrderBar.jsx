import { useNavigate } from 'react-router-dom';
import Button from "../Button";
import styled from "styled-components";
import useCartStore from "../../store/cartStore";

const OrderBarContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
`;

const OrderBarWrapper = styled.div`
    width: 100%;
    min-height: 100px;
    flex-shrink: 0;
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.10);
    padding: 24px 16px;
    background: white;
    border-top: 1px solid #F5F5F5;
`;

const OrderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
`;


const PriceRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const PriceLabel = styled.div`
    color: #6B7684;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Price = styled.div`
    color: #4E5968;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const OrderBar = () => {
    const navigate = useNavigate();

    const menus = useCartStore((state) => state.menus);
    const store = useCartStore((state) => state.store);
    const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

    const handleOrder = () => {
        navigate('/cart');
    };

    return (
        <OrderBarContainer>
            <OrderBarWrapper>
                <OrderContent>
                    <PriceRow>
                        <PriceLabel>총 주문금액</PriceLabel>
                        <Price>{totalPrice.toLocaleString()}원</Price>
                    </PriceRow>
                    <Button
                        onClick={handleOrder}
                        type="button"
                        disabled={totalPrice === 0}
                    >
                        {store?.name && `${store.name}에서 `}주문하기
                    </Button>
                </OrderContent>
            </OrderBarWrapper>
        </OrderBarContainer>
    );
};

export default OrderBar;

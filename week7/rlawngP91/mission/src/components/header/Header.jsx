import { useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { backBtn } from '../../assets';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height:68px;
    background-color: #FFFF;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;

const BackButton = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    flex-shrink: 0;

    display: flex;  /* 이미지 정렬을 위해 추가 */
    align-items: center;
    justify-content: center;
`;
const ButtonImage = styled.img`
    width: 24px;
    height: 24px;
`;
const OrderCancelButton = styled.button`
    color: #333D4B;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    display: inline-flex;
    flex-shrink: 0;         /* 추가: 크기 고정 */
    margin-left: 16px;
`;

const Header = () => {
    // 아직 안배웠는데 GPT한테 물어봤어요..
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 확인을 위한 hook

    return (
        <HeaderContainer>
            <BackButton onClick={() => navigate(-1)}>
                <ButtonImage src={backBtn} alt="backBtn" />
            </BackButton>
            {location.pathname === '/cart' && (
                <OrderCancelButton>주문취소</OrderCancelButton>
            )}
        </HeaderContainer>
    );
};

export default Header;
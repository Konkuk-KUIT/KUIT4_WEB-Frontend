import styled from "styled-components";
import HeaderBarIMG from "../assets/header-bar.svg";
import ArrowBack from "../assets/arrow-back.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const StyledDiv = styled.div`
  width: 390px;
  height: 47px;
  position: fixed;
  top: 0;
  background-color: white;
`;

const PlaceHolder = styled.div`
  width: 390px;
  height: 41px;
  top: 47px;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 10px;
  box-sizing: border-box;
  > img {
    width: 24px;
    height: 24px;
  }
  > span {
    font-size: 16px;
    font-weight: 600;
    color: #333d4b;
    cursor: pointer;
  }
`;

const Holder = styled.div`
  width: 390px;
  height: 88px;
`;

const Arrow = ({ navigate }) => {
  return (
    <>
      <img
        src={ArrowBack}
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};
const HeaderBar = ({ arrow, cancel }) => {
  const navigate = useNavigate();
  const deleteMenu = useCartStore((state) => state.deleteMenu);

  const handleDelete = () => {
    navigate("/store:storeId", { replace: true });
    navigate("/store", { replace: true });
    deleteMenu();
  };

  return (
    <>
      <StyledDiv>
        <img src={HeaderBarIMG} />
      </StyledDiv>
      <PlaceHolder>
        {arrow && <Arrow navigate={navigate} />}
        {cancel && <span onClick={handleDelete}>주문취소</span>}
      </PlaceHolder>
      <Holder />
    </>
  );
};

export default HeaderBar;

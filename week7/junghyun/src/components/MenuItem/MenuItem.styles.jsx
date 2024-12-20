import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  height: 110px;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 16px;
  jsutify-content: space-between;

> img {
    width: 54px;
    height: 54px;
    border-radius: 27px;
    color: #ECECEC;
  }
`;

const ItemDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 100%;

> span {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    color: #6B7684;
    margin-top: 5px;
  }

> p {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    color: #6B7684;
    margin-top: 5px;
    margin-right: 19px;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  height: 20px;
  box-sizing: border-box;

> h3 {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #333D4B;
    margin-top: 0px;
    margin-bottom: 0px;
  }

> h4 {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #3182F6;
    margin-top: 0px;
    margin-left: 6px;
  }
`;

const ButtonWrapper = styled.div`
    width: 100px;
    padding: 8px 14px 8px 15px;
    font-size: 13px;
    margin-top: 10px;
`;

const ModalBackground = styled.div`
  z-index: 1;
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: #00000080;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 321px;
  heigth: 202px;
  background-color: #FFFFFF;

> .modalTitle {
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: 22px;
    margin-left: 23px;
    margin-right: 52px;
  }

> .modalDesc {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 600;
    line-height: 17.9px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #6B7684;
    margin-top: 12px;
    margin-left: 23px;
  }
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  margin-top: 22px;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 17px;
  jsutify-content: space-between;
`;

const BtnCancel = styled.div`
  width: 139px;
  height: 55px;
  padding-top: 17px;
  padding-bottom: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #F2F4F6;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #505967;
  margin-right: 9px;
`;

const BtnReset = styled.div`
  width: 139px;
  height: 55px;
  padding-top: 17px;
  padding-bottom: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #3182F6;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
`;
export {MenuItemWrapper, ItemDescWrapper, NameWrapper, ButtonWrapper, ModalBackground, ModalWrapper, ModalBtnWrapper, BtnCancel, BtnReset};
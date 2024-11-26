import { useNavigate, useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";

import stores from "../../models/stores";
import BackBtn from "../../components/BackBtn";
import styled from "styled-components";
import StoreDetailInfo from "../../components/Store/StoreDetailInfo";

const Store = () => {
  const { storeId } = useParams();
  const pageStore = stores.find((store) => store.id.toString() === storeId);
  const navigate = useNavigate();

  if (!pageStore) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  const { menus, ...storeInfo } = pageStore;

  return (
    <div>
      <BackBtn onClick={() => navigate(-1)} />
      <StoreDetailInfo storeInfo={storeInfo} />

      <Line />
      <CategoryTitle>샐러드</CategoryTitle>
      <MenuItemWrapper>
        {menus.map((menu) => (
          <MenuItem key={menu.id} menu={menu} pageStore={pageStore} />
        ))}
      </MenuItemWrapper>
    </div>
  );
};

export default Store;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e8eb;

  margin-bottom: 26px;
`;

const CategoryTitle = styled.h4`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 0 0 11px 24px;
`;

const MenuItemWrapper = styled.div`
  height: 380px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

import { useNavigate, useParams } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import BackBtn from "../../components/BackBtn";
import styled from "styled-components";
import StoreDetailInfo from "../../components/Store/StoreDetailInfo";
import { useEffect, useState } from "react";
import { getStore } from "../../api/stores";
import useCartStore from "../../store/cartStore";

const Store = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState();
  const navigate = useNavigate();
  const addMenu = useCartStore((state) => state.addMenu);

  useEffect(() => {
    getStore(storeId).then((value) => setStore(value));
  }, []);

  const handleAddMenu = (menu) => {
    addMenu(menu, store);
  };

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <BackBtn onClick={() => navigate(-1)} />
      <StoreDetailInfo store={store} />

      <Line />
      <CategoryTitle>샐러드</CategoryTitle>
      <MenuItemWrapper>
        {store.menus.map((menu) => (
          <MenuItem
            key={menu.id}
            menu={menu}
            handleAddMenu={() => handleAddMenu(menu)}
          />
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

import { useNavigate, useSearchParams } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import StatusBar from "../../components/StatusBar/StatusBar";
import StoreDetail from "../../components/StoreDetail/StoreDetail";
import { CategoryTitle, StoreDetailWrapper } from "./Store.styles";

import stores from "../../models/stores.js";

const addRankToStores = (stores) => {
  const sortedStores = [...stores].sort((a, b) => b.rate - a.rate);

  // 상위 3개에 rank 속성 추가
  return sortedStores.map((store, index) => {
    if (index < 3) {
      return { ...store, rank: index + 1 };
    }
    return store;
  });
};
const Stores = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sortStores = addRankToStores(stores);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <StatusBar back={true} onClick={handleClick} />
      <div
        style={{
          marginTop: "var(--status-bar)",
          padding: "20px 20px",
          width: "var(--width-variable)",
        }}
      >
        <CategoryTitle>{category || "Category"}</CategoryTitle>
        <StoreDetailWrapper>
          {sortStores.map((store) => (
            <StoreDetail key={store.id} store={store} />
          ))}
        </StoreDetailWrapper>
      </div>
      <OrderBar />
    </>
  );
};

export default Stores;

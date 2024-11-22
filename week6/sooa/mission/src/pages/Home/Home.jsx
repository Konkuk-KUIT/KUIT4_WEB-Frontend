import FoodCategory from "../../components/FoodCategory";
import HeaderBar from "../../components/HeaderBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import { TitleWrapper, CategoryWrapper } from "./Home.styles";
import { Wrapper } from "../../components/Wrapper.styles";

const Home = () => {
  return (
    <Wrapper>
      <HeaderBar arrow={false} cancel={false} />
      <TitleWrapper>
        <p className="title">오늘은 무엇을 먹을까요?</p>
        <p className="sub-title">
          한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
        </p>
      </TitleWrapper>
      <CategoryWrapper>
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
        <FoodCategory children={"피자"} />
      </CategoryWrapper>
      <OrderBar />
    </Wrapper>
  );
};

export default Home;

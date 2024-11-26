import styled from "styled-components";
import FoodCategory from "../../components/Home/FoodCategory";
import { Title } from "../../styles/FontStyle";

import Pizza from "@/assets/pizza.svg";
import Salad from "@/assets/salad.svg";
import Hamburger from "@/assets/hamburger.svg";
import KoreanFood from "@/assets/koreanFood.svg";
import SnackFood from "@/assets/snackFood.svg";
import Chicken from "@/assets/chicken.svg";
import Sushi from "@/assets/sushi.svg";
import Sandwich from "@/assets/sandwich.svg";
import Pasta from "@/assets/pasta.svg";
import Dessert from "@/assets/dessert.svg";
import Coffee from "@/assets/coffee.svg";
import MeatBall from "@/assets/meatballsMenu.svg";

const dummyCategories = [
  { img: <Pizza />, name: "피자" },
  { img: <Salad />, name: "샐러드" },
  { img: <Hamburger />, name: "햄버거" },
  { img: <KoreanFood />, name: "한식" },
  { img: <SnackFood />, name: "분식" },
  { img: <Chicken />, name: "치킨" },
  { img: <Sushi />, name: "초밥" },
  { img: <Sandwich />, name: "샌드위치" },
  { img: <Pasta />, name: "파스타" },
  { img: <Dessert />, name: "디저트" },
  { img: <Coffee />, name: "커피" },
  { img: <MeatBall />, name: "더보기" },
];

const Home = () => {
  return (
    <div>
      <HomeTextWrapper>
        <Title>오늘은 무엇을 먹을까요?</Title>
        <Content>한남중앙로 40길 (한남 빌리지)(으)로 배달 {">"}</Content>
      </HomeTextWrapper>
      <HomeWrapper>
        {dummyCategories.map((category, index) => (
          <FoodCategory key={index} category={category} />
        ))}
      </HomeWrapper>
    </div>
  );
};

export default Home;

const HomeTextWrapper = styled.section`
  display: flex;
  margin-top: 41px;
  padding: 25px 68px 4px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;

const Content = styled.p`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  column-gap: 9px;

  margin: 74px 24px 0 24px;
`;

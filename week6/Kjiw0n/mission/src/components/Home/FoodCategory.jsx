import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FoodCategory = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // api 연결 시 수정 필요
    navigate(`/store`);
  };

  return (
    <FoodCategoryContainer onClick={handleClick}>
      <FoodCategoryImage>{category.img}</FoodCategoryImage>
      <FoodCategoryName>{category.name}</FoodCategoryName>
    </FoodCategoryContainer>
  );
};

export default FoodCategory;

const FoodCategoryContainer = styled.div`
  display: flex;
  width: 108px;
  padding: 12px 0px 13px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: #fafafb;
  cursor: pointer;
`;

const FoodCategoryImage = styled.div`
  width: 28px;
  height: 28px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const FoodCategoryName = styled.p`
  color: #333d4b;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 0;
`;

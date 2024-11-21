import styled from "styled-components";
import Categorys from "./Categorys";
import RigthChevron from "../../assets/right-chevron.svg";
const Header = styled.div`
  width: var(--width-variable);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  > .title {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  > .address {
    display: flex;
    font-size: 17px;
    font-weight: 500;
    > img {
      margin-left: 5px;
      width: 10px;
    }
  }
`;

export default function Main() {
  return (
    <div
      style={{
        marginTop: "var(--status-bar)",
        padding: "20px 20px",
        width: "var(--width-variable)",
      }}
    >
      <Header>
        <div className="title">먹지마</div>
        <div className="address">
          <p>한남중앙로 40길 (한남 빌리지)(으)로 배달</p>
          <img src={RigthChevron} alt="?" />
        </div>
      </Header>
      <Categorys />
    </div>
  );
}

import styled from "styled-components";
import { Title } from "../../styles/FontStyle";
import StoreListItem from "../../components/Store/StoreListItem";
// import stores from "../../models/stores";
import BackBtn from "../../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStores } from "../../api/stores";

const Stores = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStores();
        setStores(data);
      } catch (error) {
        console.error("Failed to fetch stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <div>
      <BackBtn onClick={() => navigate(-1)} />
      <Title style={{ margin: "26px 0 2px 24px" }}>샐러드</Title>

      <StoreList>
        {stores.map((store, index) => (
          <StoreListItem key={index} store={store} />
        ))}
      </StoreList>
    </div>
  );
};

export default Stores;

const StoreList = styled.section`
  height: 558px;
  overflow-y: auto;
`;

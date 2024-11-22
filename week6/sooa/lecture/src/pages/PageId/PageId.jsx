import { useLocation, useParams, useSearchParams } from "react-router-dom";

const PageId = () => {
  const { pageId } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeParam = () => {
    setSearchParams({ key: 321313123 });
  };

  return (
    <div>
      PageId
      <div>페이지 아이디는 {pageId}입니다.</div>
      <div>pathname: {location.pathname}</div>
      <div>query string: {location.search}</div>
      <div>searchParams: {searchParams.get("key")}</div>
      <button onClick={onChangeParam}>setSearchParams</button>
    </div>
  );
};

export default PageId;

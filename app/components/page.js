import {
  button,
  search,
  searchWrapper,
} from "./index.css";
import Search from "../svgs/search.svg";
import Card from "./card";
import Address from "./address";

export default function () {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "10px"
      }}
    >
      <button className={button()}>시작하기</button>
      <button className={button()} disabled>
        시작하기
      </button>
      <div className={searchWrapper}>
        <Search />
        <input
          className={search}
          placeholder='지역, 주소, 건물명을 입력해보세요'
        />
      </div>
      <Address title="인하주택" description="인천 미추홀구 경인남길 48" />
      <Card
        title='인하주택'
        image='https://via.placeholder.com/150'
        description='인천 미추홀구 경인남길 48'
        like={true}
        size={'small'}
      />
      <Card
        title='인하주택'
        image='https://via.placeholder.com/150'
        description='인천 미추홀구 경인남길 48'
        like={false}
        size={'large'}
      />
    </div>
  );
}

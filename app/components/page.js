import * as Styles from "./index.css";
import Search from "../svgs/search.svg";
import Card from "./card";
import Address from "./address";

export default function () {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        padding: "10px",
        gap: "10px"
      }}
    >
      <button className={Styles.button()}>시작하기</button>
      <button className={Styles.button()} disabled>
        시작하기
      </button>
      <div className={Styles.searchWrapper}>
        <Search />
        <input
          className={Styles.search}
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
      <span className={Styles.tag({ color: "primary" })}>원룸</span>
      <span className={Styles.tag({ color: "yellow" })}>투룸</span>
      <span className={Styles.tag({ color: "green" })}>오피스텔</span>
    </div >
  );
}

import * as Styles from "./index.css";
import Card from "./card";
import Address from "./address";
import Search from "./search";

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
      <Search placeholder="어떤 집의 리뷰를 볼까요?" />
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

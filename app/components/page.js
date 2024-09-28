import Button from "./Button";
import Card from "./Card";
import Address from "./Address";
import Search from "./Search";
import Tag from "./Tag";
import Check from "./Check";

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
      <Button color="primary">시작하기</Button>
      <Button color="primary" disabled>시작하기</Button>
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
      <Tag color="primary">원룸</Tag>
      <Tag color="yellow">투룸</Tag>
      <Tag color="green">오피스텔</Tag>
      <Check color="primary">🗑 분리수거</Check>
    </div >
  );
}

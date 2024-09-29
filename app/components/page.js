import Button from "./Button";
import Card from "./Card";
import Address from "./Address";
import Search from "./Search";
import Tag from "./Tag";
import Check from "./Check";
import TextArea from "./TextArea";

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
      <Check variant="default" checkboxVisible>편의점</Check>
      <Check variant="circle">4</Check>
      <Check variant="tag">🗑 분리수거</Check>
      <Check variant="square">냉장고</Check>
      <Check variant="box" checkboxVisible>인하주택</Check>
      <TextArea defaultValue="이 방은 대학까지 걸어서 10분 정도라 통학이 정말 편리했어요. 주변에 편의점, 카페, 마트도 가까워서 생활하기에 편리했고, 특히 근처에 24시간 운영하는 편의점이 있어서 늦게까지 공부하거나 야식을 먹을 때 도움이 많이 됐습니다.
방 크기는 원룸치고는 꽤 넓은 편이었고, 채광이 좋아서 낮에는 전등을 켜지 않아도 충분히 밝았어요. 특히 옷장과 책상이 기본 옵션으로 제공되어 가구를 따로 구매할 필요가 없어서 좋았습니다. 에어컨과 보일러도 잘 작동해서 여름과 겨울 모두 쾌적하"/>
    </div >
  );
}

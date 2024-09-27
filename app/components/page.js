import { button, search, searchWrapper } from "./index.css";
import Search from "../svgs/search.svg";

export default function () {
  return (
    <div style={{ display: "flex", flexDirection: 'column', padding: '10px', gap: '10px' }}>
      <button className={button()}>시작하기</button>
      <button className={button()} disabled>시작하기</button>
      <div className={searchWrapper}>
        <Search />
        <input className={search} placeholder="지역, 주소, 건물명을 입력해보세요" />
      </div>
    </div>
  );
}

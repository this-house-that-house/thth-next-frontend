import { button, icon, search, searchWrapper, addressBox, typo, addressTextBox } from "./index.css";
import Search from "../svgs/search.svg";
import Map from "../svgs/map.svg";

export default function () {
  return (
    <div style={{ display: "flex", flexDirection: 'column', padding: '10px', gap: '10px' }}>
      <button className={button()}>시작하기</button>
      <button className={button()} disabled>시작하기</button>
      <div className={searchWrapper}>
        <Search />
        <input className={search} placeholder="지역, 주소, 건물명을 입력해보세요" />
      </div>
      <div className={addressBox}>
        <Map className={icon({ color: "lightGray" })} />
        <div className={addressTextBox}>
          <span className={typo({ type: 'bodyM18', color: 'gray' })}>인하주택</span>
          <span className={typo({ type: 'bodyM18', color: 'lightGray' })}>인천 미추홀구 경인남길 48</span>
        </div>
      </div>
    </div>
  );
}

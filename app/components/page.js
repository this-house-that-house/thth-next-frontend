import { button } from "./index.css";

export default function () {
  return (
    <div>
      <button className={button()}>시작하기</button>
      <button className={button()} disabled>시작하기</button>
    </div>
  );
}

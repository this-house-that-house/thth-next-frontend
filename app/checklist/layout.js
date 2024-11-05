"use client";

import { container, topBar, vars } from "../components/index.css"
import Nav from "../components/Nav"
import { useSearchParams } from "next/navigation";
import BackwardButton from "../components/BackwardButton";
import Button from "../components/Button";

export default function ({ children }) {
  const params = useSearchParams();
  const id = params.get('id');
  const text = +id < 0 ? '체크리스트 추가' : '체크리스트 수정';
  return (
    <>
      <div className={topBar}>
        {
          id ?
            <>
              <BackwardButton />
              <h1 style={{ ...vars.font.headingSB18, flex: 1, textAlign: 'center' }}>{text}</h1>
              <Button type="submit" form="checklist" color={"textPrimary"} style={{ paddingRight: 6 }}>완료</Button>
            </>
            :
            <>
              <h1 style={{ ...vars.font.headingSB22 }}>체크리스트</h1>
              <div style={{ width: 30 }}></div>
            </>
        }
      </div>
      <div className={container}>
        {children}
      </div>
      <Nav />
    </>
  )
}
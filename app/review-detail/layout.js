"use client";

import { container, topBar, vars } from "../components/index.css"
import BackwardButton from "../components/BackwardButton";

export default function ({ children }) {
  return (
    <>
      <div className={topBar}>
        <BackwardButton />
        <h1 style={{ ...vars.font.headingSB18 }}>리뷰 상세</h1>
        <div style={{ width: 30 }}></div>
      </div>
      <div className={container}>
        {children}
      </div>
    </>
  )
}
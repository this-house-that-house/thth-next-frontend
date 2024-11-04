import BackwardButton from "../components/BackwardButton"
import { container, topBar, vars } from "../components/index.css"

export default function ({ children }) {
  return (
    <>
      <div className={topBar}>
        <BackwardButton />
        <h1 style={{ ...vars.font.headingSB18 }}>스타일 입력하기</h1>
        <div style={{ width: 30 }}></div>
      </div>
      <div className={container}>
        {children}
      </div>
    </>
  )
}
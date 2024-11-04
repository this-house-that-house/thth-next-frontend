import BackwardButton from "../../components/BackwardButton"
import Nav from "../../components/Nav"
import { container, topBar, vars } from "../../components/index.css"

export default function ({ children }) {
  return (
    <>
      <div className={topBar}>
        <BackwardButton />
        <h1 style={{ ...vars.font.headingSB18 }}>위시리스트</h1>
        <div style={{ width: 30 }}></div>
      </div>
      <div className={container}>
        {children}
      </div>
    </>
  )
}
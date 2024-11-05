import { container, topBar, vars } from "../components/index.css"
import Nav from "../components/Nav"

export default function ({ children }) {
  return (
    <>
      <div className={topBar}>
        <h1 style={{ ...vars.font.headingSB22 }}>체크리스트</h1>
        <div style={{ width: 30 }}></div>
      </div>
      <div className={container}>
        {children}
      </div>
      <Nav />
    </>
  )
}
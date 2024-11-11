import BackwardButton from "../components/BackwardButton"
import { container, topBar } from "../components/index.css"

export default function ({ children }) {
  return (
    <>
      <div className={topBar} style={{ justifyContent: 'start' }}>
        <BackwardButton />
      </div>
      <div className={container} style={{ marginBottom: 34 }}>
        {children}
      </div>
    </>
  )
}
import Nav from "../components/Nav";
import { container } from "../components/index.css"

export default function ({ children }) {
  return (
    <>
      <div className={container}>
        {children}
      </div>
      <Nav style={{ zIndex: 100 }} />
    </>
  )
}
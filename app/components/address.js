import Map from "../svgs/map.svg";
import * as Styles from "./index.css"

export default function ({ title, description }) {
  return (
    <div className={Styles.addressBox}>
      <Map className={Styles.icon({ color: "lightGray" })} />
      <div className={Styles.addressTextBox}>
        <span className={Styles.typo({ type: "bodyM14", color: "gray" })}>
          {title}
        </span>
        <span className={Styles.typo({ type: "bodyR14", color: "lightGray" })}>
          {description}
        </span>
      </div>
    </div>
  )
}
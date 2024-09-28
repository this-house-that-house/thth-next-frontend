import * as Styles from "./index.css";
import SearchIcon from "../svgs/search.svg";

export default function ({ ...props }) {
  return (
    <div className={Styles.searchWrapper}>
      <SearchIcon />
      <input
        className={Styles.search}
        {...props}
      />
    </div>
  )
}
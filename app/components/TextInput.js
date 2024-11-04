import * as Styles from "./index.css";

export default function ({ unit, ...props }) {
  return (
    <div className={Styles.textInputContainer}>
      <input
        className={Styles.textInput}
        {...props}
      />
      {unit && <span className={Styles.textInputUnit}>{unit}</span>}
    </div>
  )
}
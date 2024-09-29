import * as Styles from "./index.css";
export default function ({ ...props }) {
  return (
    <textarea className={Styles.textArea} {...props}></textarea>
  );
}
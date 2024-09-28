import * as Styles from './index.css'
export default function ({ color, children, ...props }) {
  return (
    <label className={Styles.toggleButtonWrapper}>
      <input type='checkbox' className={Styles.toggleInput} {...props} />
      {children}
    </label>
  );
}


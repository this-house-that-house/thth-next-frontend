import * as Styles from './index.css'

export default function ({ color, children, ...props }) {
  return (
    <span className={Styles.tag({ color })} {...props}>{children}</span>
  )
}
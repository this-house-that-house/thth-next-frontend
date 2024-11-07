import { selectStyle } from './index.css'

export default function ({ children, className, ...props }) {
  return (
    <select className={`${selectStyle} ${className}`} {...props}>
      {children}
    </select>
  )
}
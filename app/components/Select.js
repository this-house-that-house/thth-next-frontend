import { selectStyle } from './index.css'

export default function ({ variant, children, className, ...props }) {
  return (
    <select className={`${selectStyle({ variant })} ${className}`} {...props}>
      {children}
    </select>
  )
}
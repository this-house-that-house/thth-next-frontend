export default function ({ children, show, style, ...props }) {
  return (
    <div style={{
      ...style,
      flex: show ? 1 : 0,
      overflowY: show ? 'auto' : 'hidden',
    }} {...props}>
      {children}
    </div>
  )
}
"use client";

export default function ({ children, style, ...props }) {
  return (
    <form style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      flex: 1,
      overflowY: 'auto',
      ...style
    }} {...props}>
      {children}
    </form>
  )
}
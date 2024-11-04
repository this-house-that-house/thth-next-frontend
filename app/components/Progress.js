import { progressContainer, vars } from "./index.css"

export default function ({ total, current }) {
  return (
    <>
      <div className={progressContainer}>
        <div style={{
          width: `${(current / total) * 100}%`,
          height: 3,
          backgroundColor: vars.color.primary[100],
          borderRadius: 1.5,
          transition: 'width 0.5s',
        }} />
      </div>
    </>
  )
}
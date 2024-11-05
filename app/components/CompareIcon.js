import { center, vars } from './index.css'
import HouseBorderIcon from '../svgs/house-border.svg'

export default function ({ title }) {
  return (
    <div className={center} style={{
      flexDirection: 'column',
      width: 'fit-content',

    }}>
      <HouseBorderIcon />
      <h1 style={{ ...vars.font.headingSB18, width: 'max-content' }}>{title}</h1>
    </div>
  )
}
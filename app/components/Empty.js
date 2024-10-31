import * as Styles from './index.css';
import EmptyIcon from '../svgs/empty.svg';

export default function ({ text }) {
  return (
    <div className={Styles.center} style={{ flexDirection: 'column', width: '100%', height: '100%', gap: 20 }}>
      <span style={{ ...Styles.vars.font.bodyM16, color: Styles.vars.color.gray[400], whiteSpace: 'pre', textAlign: 'center' }}>{text}</span>
      <EmptyIcon />
    </div>
  )
}
import Link from 'next/link'
import * as Styles from './index.css'
import ArrowRightIcon from '../svgs/arrow-right.svg'

export default function ({ onClick, href, title, description, color = Styles.vars.color.gray[900], icon = true }) {
  return (
    <>
      <Link className={Styles.LinkItem} href={href} onClick={onClick}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 2,
        }}>
          <h1 style={{ ...Styles.vars.font.headingSB18, color }}>{title}</h1>
          <span style={{ ...Styles.vars.font.bodyM14, color: Styles.vars.color.gray[400] }}>{description}</span>
        </div>
        {icon && <ArrowRightIcon />}
      </Link>
    </>
  )
}
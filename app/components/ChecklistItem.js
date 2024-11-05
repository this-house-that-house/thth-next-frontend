import Link from 'next/link';
import { checklistItem, vars } from './index.css';
import EditIcon from '../svgs/edit.svg';

export default function ({ title, id, style, ...props }) {
  return (
    <Link className={checklistItem} href={`/checklist/${id}`} style={{
      textDecoration: 'none',
      ...style
    }} {...props}>
      <span style={{
        ...vars.font.headingSB18,
        color: vars.color.gray[900],
        flex: 1
      }}>{title}</span>
      <div style={{
        display: 'flex',
        alignItems: 'end',
        height: 72
      }}>
        <EditIcon />
      </div>
    </Link>
  )
}
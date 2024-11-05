import { vars, compareMemoLayout, verticalDivider, center } from './index.css'
import React from 'react'

export default function ({ title, data1, data2 }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    }}>
      <h2 style={{ ...vars.font.bodyM18, marginLeft: 4 }}>{title}</h2>
      <div className={compareMemoLayout}>
        <p style={{ ...vars.font.bodyM14, padding: '40px 0', whiteSpace: 'pre' }}>{data1}</p>
        <div className={center} style={{ padding: '0px 25px', height: '100%' }}>
          <div className={verticalDivider} />
        </div>
        <p style={{ ...vars.font.bodyM14, padding: '40px 0', whiteSpace: 'pre' }}>{data2}</p>
      </div>
    </div>
  )
}
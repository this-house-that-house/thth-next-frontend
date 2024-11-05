import { vars, compareListLayout, compareListItemName, centerWrapper } from './index.css'
import React from 'react'
import CheckCircleIcon from '../svgs/check-circle.svg'
import CancelIcon from '../svgs/cancel.svg'

export default function ({ title, list }) {
  const displayData = (data, data2) => {
    if (typeof data === 'boolean') {
      return (
        <div>
          {data ? <CheckCircleIcon style={{ width: 20 }} /> : <CancelIcon style={{ width: 20 }} />}
        </div>
      )
    }
    if (typeof data === 'number') {
      return <div style={{ ...vars.font.bodyM14, color: data === 5 || data > data2 ? vars.color.primary[100] : vars.color.gray[900] }}>{data}</div>
    }
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    }}>
      <h2 style={{ ...vars.font.bodyM18, marginLeft: 4 }}>{title}</h2>
      <div className={compareListLayout}>
        {
          list.map((item, idx) => (
            <React.Fragment key={item.name}>
              {
                item.name &&
                <>
                  <div />
                  <div style={{ ...vars.font.bodyM14, color: vars.color.blue, marginBottom: 4, marginTop: idx === 0 ? 0 : 30 }}>{item.name}</div>
                  <div />
                </>
              }
              {
                item.list.map(listItem => (
                  <React.Fragment key={listItem.name}>
                    <div className={centerWrapper}><div>{displayData(listItem.data[0], listItem.data[1])}</div></div>
                    <div className={compareListItemName}>{listItem.name}</div>
                    <div className={centerWrapper}><div>{displayData(listItem.data[1], listItem.data[0])}</div></div>
                  </React.Fragment>
                ))
              }
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}
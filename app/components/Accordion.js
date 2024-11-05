import React from 'react'
import { accordionLayout, accordionTitle, accordionInfo, accordionItem, vars, divider, iconBtn } from './index.css'
import ArrowUpIcon from '../svgs/arrow-up.svg'

export default function ({ title, description, children, open }) {
  const [isOpen, setIsOpen] = React.useState(open ?? false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={accordionLayout}>
        <div className={accordionTitle} onClick={toggle}>
          <div className={accordionInfo}>
            <span style={{ ...vars.font.bodyM18, color: vars.color.gray[900] }}>{title}</span>
            <span style={{ ...vars.font.bodyM14, color: vars.color.gray[400] }}>{description}</span>
          </div>
          <button type="button" className={iconBtn}>
            <ArrowUpIcon style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.25s' }} />
          </button>
        </div>
        <div className={accordionItem} style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ paddingTop: 18 }}>
              {children}
            </div>
          </div>
        </div>
      </div >
      <div className={divider()} />
    </>
  )
}
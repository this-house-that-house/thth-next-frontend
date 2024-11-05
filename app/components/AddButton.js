"use client";

import PlusIcon from '../svgs/plus.svg'
import { addButton } from './index.css'

export default function ({ ...props }) {
  return (
    <button className={addButton} {...props}>
      <PlusIcon />
    </button>
  )
}
import { rangeHorizontalBar, rangeCheck, rangeContainer, vars } from './index.css';
import Check from './Check';
import { useState } from 'react';

export default function ({ lowText, highText }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={rangeContainer}>
      <div className={rangeHorizontalBar}>
        {
          new Array(5).fill(0).map((_, i) => (
            <Check
              variant="circle"
              key={i}
              className={rangeCheck}
              style={{
                left: `${i * 25}%`,
                width: 24 + (Math.abs(i - 2) * 6),
                height: 24 + (Math.abs(i - 2) * 6)
              }}
              checked={activeIndex === i}
              onChange={() => setActiveIndex(i)}
            >
              {i + 1}
            </Check>
          ))
        }
      </div>
      <span style={{ ...vars.font.bodyM14, color: vars.color.gray[600] }}>{lowText}</span>
      <span style={{ ...vars.font.bodyM14, color: vars.color.gray[600] }}>{highText}</span>
    </div>
  )
}
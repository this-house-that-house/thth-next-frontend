"use client";

import * as Styles from "./index.css"
import StarFullIcon from "../svgs/star-full.svg"
import StarHalfIcon from "../svgs/star-half.svg"
import StarEmptyIcon from "../svgs/star-empty.svg"
import StarFullIconBig from "../svgs/star-full-big.svg"
import StarHalfIconBig from "../svgs/star-half-big.svg"
import StarEmptyIconBig from "../svgs/star-empty-big.svg"
import React, { useState, useRef } from "react";

export default function ({ rating, input = false }) {
  const [value, setValue] = useState(rating);
  const dragRef = useRef(null);
  const full = Number(Math.floor(value));
  const half = Number(value % 1 >= 0.5);

  return (
    <div style={{
      display: 'flex',
      gap: '5px',
    }}>
      {
        !input &&
        <span style={{ ...Styles.vars.font.bodyM16, color: Styles.vars.color.gray[900] }}>
          {rating}
        </span>
      }
      <div
        style={{
          display: 'flex',
          gap: input ? 20 : 0
        }}
        ref={dragRef}
        onClick={e => {
          const target = dragRef.current;
          const rect = target.getBoundingClientRect();
          const offsetX = event.clientX - rect.left;
          let rating = Math.ceil((offsetX / rect.width) * 10) / 2;
          if (rating === 0.5 && value === 0.5) rating = 0;
          setValue(rating);
        }} >
        {
          new Array(5).fill().map((_, i) => {
            if (i < full) return <React.Fragment key={i} >{input ? <StarFullIconBig /> : <StarFullIcon />}</React.Fragment>;
            if (i < full + half) return <React.Fragment key={i} >{input ? <StarHalfIconBig /> : <StarHalfIcon />}</React.Fragment>;
            return <React.Fragment key={i} >{input ? <StarEmptyIconBig /> : <StarEmptyIcon />}</React.Fragment>
          })
        }
      </div>
      {
        input && <input type="number" min="0" max="5" step="0.5" value={value} name="rating" onChange={() => { }} style={{ width: 0, height: 0, outline: 'none', border: 'none', margin: 0, padding: 0 }} />
      }
    </div>
  )
}
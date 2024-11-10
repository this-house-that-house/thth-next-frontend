"use client";

import Button from "../components/Button"
import { vars } from "../components/index.css"
import Star from "../components/Star";
import TextArea from "../components/TextArea";
import { useState } from "react";


export default function () {
  const [textLength, setTextLength] = useState(0);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflowY: 'auto',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflowY: 'auto',
      }}>
        <h1 style={{ ...vars.font.headingSB18 }}>별점을 남겨주세요</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          margin: '25px 0 50px 0'
        }}>
          <Star rating={0} input />
        </div>

        <h1 style={{ ...vars.font.headingSB18 }}>다른 입주자들을 위해 자세한 리뷰를 적어주세요</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '4px 0 12px 0'
        }}>
          <span style={{ ...vars.font.bodyM14, color: vars.color.blue }}>(30자이상)</span>
          <span style={{ ...vars.font.bodyM14, color: vars.color.gray[500] }}>{textLength}/1000</span>
        </div>
        <TextArea name="description" placeholder="예시: 채광이 좋아서 낮에 전등을 안 켜도 밝았어요!" style={{ height: 200 }} onChange={e => setTextLength(e.target.value.length)} />
      </div>
      <Button type="submit" variant="primary" style={{ width: '100%', marginTop: 30 }}>완료</Button>
    </div>
  )
}
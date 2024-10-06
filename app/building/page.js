"use client";

import * as Styles from "../components/index.css"
import BackwardButton from "../components/BackwardButton"
import Star from "../components/Star"
import { useState } from "react";

export default function () {
  const images = [
    'http://test.com/test.png',
    'http://test.com/test.png',
    'http://test.com/test.png',
    'http://test.com/test.png',
    'http://test.com/test.png',
  ]
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      id: 0,
      name: "홈",
      content: '홈?'
    },
    {
      id: 1,
      name: "리뷰보기",
      content: '리뷰'
    }
  ]
  const data = {
    name: '인하주택',
    address_name: '인천시 미추홀구 경인남길 48',
    average_rating: "2.5"
  }
  return (
    <>
      {/* 상단 바 */}
      <div className={Styles.floatingTopBar}>
        <BackwardButton />
      </div>
      {/* 콜라주 */}
      <div className={Styles.collage}>
        {
          images.map((image, idx) =>
            <img href={image} key={idx} />
          )
        }
      </div>
      {/* 기본 정보 */}
      <div style={{
        width: '100%',
        padding: '24px 16px',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "end"
      }}>
        <div>
          <h1 style={{ ...Styles.vars.font.headingSB22, color: Styles.vars.color.gray[900] }}>{data.name}</h1>
          <span style={{ ...Styles.vars.font.bodyR14, color: Styles.vars.color.gray[400] }}>{data.address_name}</span>
        </div>
        <Star rating={data.average_rating} />
      </div>
      {/* divider */}
      <div style={{
        width: '100%',
        height: 8,
        backgroundColor: Styles.vars.color.gray[100]
      }} />
      {/* 상세 정보 */}
      <div className={Styles.tabs}>
        {
          tabs.map(v => {
            return (
              <div className={Styles.tab({ active: v.id === selectedTab })} key={v.id} onClick={() => setSelectedTab(v.id)}>
                {v.name}
              </div>
            )
          })
        }
      </div>
      {
        tabs.find(tab => tab.id === selectedTab).content
      }
    </>
  )
}
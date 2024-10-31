"use client";

import * as Styles from "../components/index.css"
import BackwardButton from "../components/BackwardButton"
import Star from "../components/Star"
import { useState } from "react";
import Home from "./home"
import HeartEmptyIcon from '../svgs/heart-empty.svg'
import HeartFillIcon from '../svgs/heart-fill.svg'
import Button from '../components/Button'
import Reviews from './reviews'

export default function () {
  const [selectedTab, setSelectedTab] = useState(0);
  const [topBarColor, setTopBarColor] = useState('#ffffff00');

  const tabs = [
    {
      id: 0,
      name: "홈",
      content: <Home />
    },
    {
      id: 1,
      name: "리뷰보기",
      content: <Reviews />
    }
  ]
  const data = {
    "id": "4f718bfb-1dc7-4ef2-9b1e-1599a831a2f1",
    "name": "인하주택",
    "address_name": "인천 미추홀구 경인남길 48",
    "road_address_name": "인천 미추홀구 경인남길 48",
    "region_1depth_name": "인천",
    "region_2depth_name": "미추홀구",
    "region_3depth_h_name": "용현1.4동",
    "region_3depth_name": "용현동",
    "wgs84_latitude": 37.4528506666139,
    "wgs84_longitude": 126.655796757926,
    "average_deposit": 10,
    "average_monthly_rent": 100,
    "average_maintenance_fee": 5,
    "average_rating": 4,
    "average_lighting": 3,
    "average_water_pressure": 3,
    "average_mold": 4,
    "average_havc": 2,
    "average_noise": 3,
    "image": "https://cnfyuagrxxfh.compat.objectstorage.ap-seoul-1.oraclecloud.com/bucket-20241002-1716/images/9c74f006-d65e-4a5e-bfc6-326ac889e7c8.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=a9baa9595cdaf21197299c31871a7e9732a96eeb%2F20241028%2Fap-seoul-1%2Fs3%2Faws4_request&X-Amz-Date=20241028T020916Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=df4edc90b16bb310967a0d8b6ecbfbfe79af82cf1e31802154c651aa135b847a"
  }
  const scrollHandler = (e) => {
    const scroll = e.target.scrollTop;
    if (scroll < 100) {
      setTopBarColor(`#ffffff${Math.floor(scroll / 100 * 255).toString(16)}`);
    } else {
      setTopBarColor(`#ffffff${Math.floor(255).toString(16)}`);
    }
  }
  return (
    <>
      <div className={Styles.container} onScroll={scrollHandler}>
        {/* 상단 바 */}
        <div className={Styles.floatingTopBar} style={{ backgroundColor: topBarColor }}>
          <BackwardButton />
        </div>
        {/* 콜라주 */}
        <div className={Styles.collage}>
          {
            [data.image].map((image, idx) =>
              <img href={image} key={idx} />
            )
          }
        </div>
        {/* 기본 정보 */}
        <div className={Styles.houseBasicInfoContainer}>
          <div>
            <h1 style={{ ...Styles.vars.font.headingSB22, color: Styles.vars.color.gray[900] }}>{data.name}</h1>
            <span style={{ ...Styles.vars.font.bodyR14, color: Styles.vars.color.gray[400] }}>{data.address_name}</span>
          </div>
          <Star rating={data.average_rating} />
        </div>
        {/* divider */}
        <div className={Styles.divider({ size: 'large' })} />
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
      </div>
      <div className={Styles.bottomBar}>
        <button className={Styles.iconBtn} style={{
          backgroundColor: Styles.vars.color.gray[100],
          padding: 13,
          borderRadius: Styles.vars.borderRadius
        }}>
          <HeartEmptyIcon fill={Styles.vars.color.gray[300]} />
        </button>
        <Button color='primary' style={{ padding: '17px 0px', flex: '1' }}>리뷰 남기기</Button>
      </div>
    </>
  )
}
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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { reqGetHouse } from "../apis/house";
import { reqGetReview } from "../apis/review";
import PlaceHolderIcon from "../svgs/placeholder.svg";

export default function () {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get('id');
  if (!id) {
    alert('잘못된 접근입니다.');
    router.back();
    return null;
  }
  const [selectedTab, setSelectedTab] = useState(0);
  const [topBarColor, setTopBarColor] = useState('#ffffff00');
  const [data, setData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const tabs = [
    {
      id: 0,
      name: "홈",
      content: <Home house={data} />
    },
    {
      id: 1,
      name: "리뷰보기",
      content: <Reviews reviews={reviews} />
    }
  ]
  const scrollHandler = (e) => {
    const scroll = e.target.scrollTop;
    if (scroll < 100) {
      setTopBarColor(`#ffffff${Math.floor(scroll / 100 * 255).toString(16)}`);
    } else {
      setTopBarColor(`#ffffff${Math.floor(255).toString(16)}`);
    }
  }
  const getHouse = async () => {
    const res = await reqGetHouse({ id });
    if (res.status === 200) {
      setData(res.data);
    }
  }
  const getReview = async () => {
    const res = await reqGetReview({ id });
    if (res.status === 200) {
      setReviews(res.data);
    }
  }

  useEffect(() => {
    getHouse();
    getReview();
  }, [])

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
            [...new Array(4).fill(true).map((v, i) => reviews?.[i]?.image || '')].map((image, idx) =>
              <div key={idx} className={Styles.collageItem}>
                {
                  image !== '' ?
                    <img src={image} width='100%' height='100%' /> :
                    <PlaceHolderIcon />
                }
              </div>
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
        <button onClick={() => setIsLiked(prev => !prev)} className={Styles.iconBtn} style={{
          backgroundColor: isLiked ? Styles.vars.color.primary.lighten['400/50'] : Styles.vars.color.gray[100],
          padding: 13,
          borderRadius: Styles.vars.borderRadius
        }}>
          {
            isLiked
              ? <HeartFillIcon fill={Styles.vars.color.primary.lighten[100]} />
              : <HeartEmptyIcon fill={Styles.vars.color.gray[300]} />
          }
        </button>
        <Button color='primary' style={{ padding: '17px 0px', flex: '1' }}>리뷰 남기기</Button>
      </div>
    </>
  )
}
"use client";

import * as Styles from '../components/index.css'
import HeaderLogoIcon from '../svgs/header-logo.svg'
import Search from '../components/Search'
import ArrowRightIcon from '../svgs/arrow-right-tail.svg'
import Card from '../components/Card'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { reqGetUser } from '../apis/user';
import { reqGetStyle } from '../apis/style';
import { reqGetReviewStyle } from '../apis/review';
import { reqGetStyleHouse } from '../apis/house';

export default function () {
  const [name, setName] = useState('구름');
  const [region, setRegion] = useState('용현동');
  const [styleList, setStyleList] = useState([]);
  const [ratingList, setRatingList] = useState([]);
  const [recentList, setRecentList] = useState([]);

  const getUser = async () => {
    const res = await reqGetUser();
    if (res.status === 200) {
      setName(res.data[0].nickname);
    }
  }
  const getRegion = async () => {
    const res = await reqGetStyle();
    if (res.status === 200) {
      setRegion(res.data.preferred_area);
    }
  }
  const getStyleList = async () => {
    const res = await reqGetStyleHouse();
    if (res.status === 200) {
      setStyleList(res.data);
    }
  }
  const getRatingList = async () => {
    const res = await reqGetReviewStyle({ filter: 'rating' });
    if (res.status === 200) {
      setRatingList(res.data);
    }
  };
  const getRecentList = async () => {
    const res = await reqGetReviewStyle();
    if (res.status === 200) {
      setRecentList(res.data);
    }
  };


  useEffect(() => {
    getUser();
    getRegion();
    getStyleList();
    getRatingList();
    getRecentList();
  }, []);
  return (
    <>
      {/* 상단바 */}
      <div className={Styles.logoHeader}>
        <HeaderLogoIcon />
        <span className={Styles.logoText}>
          이집저집
        </span>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        margin: '0 16px 27px'
      }}>
        <span style={{ ...Styles.vars.font.headingSB20, textWrap: 'nowrap' }}>안녕하세요 {name}님</span>
        <div style={{ flex: 1 }}>
          <Search placeholder="어떤 집의 리뷰를 볼까요?" />
        </div>
      </div >
      {/* 내 스타일 */}
      {
        styleList.length > 0
          ?
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginBottom: 40,
            paddingLeft: 16,
          }}>
            <p style={{ ...Styles.vars.font.headingSB20 }}>
              나에게 딱 맞는 자취방
            </p>
            <div style={{
              display: 'flex',
              gap: 12,
              overflowX: 'auto',
              paddingBottom: 16
            }}>
              {
                styleList.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    like={item.like}
                    size={'large'}
                  />
                ))
              }
            </div>
          </div>
          :
          <div className={Styles.shadowBox} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 175,
            padding: '12px 22px',
            margin: '0px 16px 30px'
          }}>
            <div style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              wordBreak: 'keep-all'
            }}>
              <span style={{ ...Styles.vars.font.headingSB18 }}>
                나에게 딱 맞는 자취방을 추천받고 싶다면?
              </span>
              <span style={{
                ...Styles.vars.font.bodyM14,
                display: 'flex',
                alignItems: 'center',
              }}>
                <ArrowRightIcon />
                스타일 입력하러가기
              </span>
            </div>
            <Image src="/imgs/search.png" width={150} height={150} />
          </div>
      }
      {/* 추천 목록 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: 16,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginBottom: 40
        }}>
          <p style={{ ...Styles.vars.font.headingSB18 }}>
            별점이 높은 <span style={{ color: Styles.vars.color.primary[100] }}>{region}</span> 집이에요!
          </p>
          <div style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            paddingBottom: 16
          }}>
            {
              ratingList.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  like={item.like}
                  size={'middle'}
                />
              ))
            }
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginBottom: 40
        }}>
          <p style={{ ...Styles.vars.font.headingSB18 }}>
            최근에 리뷰가 달린 <span style={{ color: Styles.vars.color.primary[100] }}>{region}</span> 집이에요!
          </p>
          <div style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            paddingBottom: 16
          }}>
            {
              recentList.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  like={item.like}
                  size={'middle'}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

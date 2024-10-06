"use client";

import * as Styles from '../components/index.css'
import HeaderLogoIcon from '../svgs/header-logo.svg'
import Search from '../components/Search'
import ArrowRightIcon from '../svgs/arrow-right-tail.svg'
import Card from '../components/Card'
import Image from 'next/image'

export default function () {
  const name = '구름'
  const region = '용현동'
  const recommendList = [
    {
      subject: '별점이 높은',
      list: [
        {
          title: '인하주택',
          image: '',
          description: '평균 별점 4.7',
          like: true
        },
        {
          title: '인하주택',
          image: '',
          description: '평균 별점 4.7',
          like: false
        },
        {
          title: '인하주택',
          image: '',
          description: '평균 별점 4.7',
          like: false
        },
        {
          title: '인하주택',
          image: '',
          description: '평균 별점 4.7',
          like: false
        }
      ]
    },
    {
      subject: '최근에 리뷰가 달린',
      list: [{
        title: '인하주택',
        image: '',
        description: '평균 별점 4.7',
        like: false
      }, {
        title: '인하주택',
        image: '',
        description: '평균 별점 4.7',
        like: true
      }]
    },
  ]
  return (
    <>
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
        <div>
          <Image src="/imgs/search.png" width={150} height={150} />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: 16,
      }}>
        {
          recommendList.map((recommendItem, index) => (
            <div key={recommendItem.subject} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginBottom: 40
            }}>
              <p style={{ ...Styles.vars.font.headingSB18 }}>
                {recommendItem.subject} <span style={{ color: Styles.vars.color.primary[100] }}>{region}</span> 집이에요!
              </p>
              <div style={{
                display: 'flex',
                gap: 12,
                overflowX: 'auto',
                paddingBottom: 16
              }}>
                {
                  recommendItem.list.map((item, index) => (
                    <Card
                      key={index}
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      like={item.like}
                      size={'small'}
                    />
                  ))
                }
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
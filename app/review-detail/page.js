"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { reqGetReviewDetail } from '../apis/review';
import * as Styles from '../components/index.css';
import Check from '../components/Check';
import Star from '../components/Star';
import { ResponsiveRadar } from '@nivo/radar'


export default function () {
  const params = useSearchParams();
  const id = params.get('id');
  const [review, setReview] = useState({});
  const tagTypes = [
    {
      name: '좋았어요',
      category: 'pros'
    },
    {
      name: '별로였어요',
      category: 'cons'
    }
  ]
  const [basicTableDatas, setBasicTableDatas] = useState([]);
  const [graphTableDatas, setGraphTableDatas] = useState([]);
  const getReview = async () => {
    const res = await reqGetReviewDetail({ id });
    if (res.status === 200) {
      setReview(res.data);
    }
  }
  useEffect(() => {
    getReview();
  }, [])

  useEffect(() => {
    if (!review.id) return;
    const residence_start_date = new Date(review.residence_start_date);
    const residence_end_date = new Date();
    const year = residence_end_date.getFullYear() - residence_start_date.getFullYear();
    const month = residence_end_date.getMonth() - residence_start_date.getMonth();
    const diffString = review.residence_start_date ? `${year}년 ${month}개월` : "비공개";
    const floor = {
      basement: "지하",
      ground: "1층",
      lower: "저층",
      rooftop: "고층"
    }
    setBasicTableDatas([
      {
        name: "거주기간",
        value: `${diffString}`
      },
      {
        name: "거주층수",
        value: `${floor[review.residence_floor]}`
      },
      {
        name: "보증금",
        value: `${review.deposit}만원`
      },
      {
        name: "월세",
        value: `${review.monthly_rent}만원`
      },
      {
        name: "관리비",
        value: `${review.maintenance_fee}만원`
      },
      {
        name: "가전 옵션",
        value: review.tags.filter(tag => tag.category === "appliances").map(tag => tag.name).join(", ")
      },
      {
        name: "가구 옵션",
        value: review.tags.filter(tag => tag.category === "furniture").map(tag => tag.name).join(", ")
      }
    ])
    setGraphTableDatas([
      {
        name: "채광",
        house: review.lighting
      },
      {
        name: "수압",
        house: review.water_pressure
      },
      {
        name: "냉난방",
        house: review.havc
      },
      {
        name: "주변소음",
        house: review.noise
      },
      {
        name: "곰팡이",
        house: review.mold
      },
    ])
  }, [review])

  console.log(review, basicTableDatas, graphTableDatas)
  return (
    <>
      {
        review.id && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            padding: '0 16px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <span style={{ ...Styles.vars.font.bodyM14, color: Styles.vars.color.gray[400], marginRight: 27 }}>익명</span>
                <span style={{ ...Styles.vars.font.bodyM14, color: Styles.vars.color.gray[400] }}>{review.residence_start_date}</span>
              </div>
              <Star rating={review.rating} />
            </div>
            <div style={{
              display: 'flex',
              gap: 12,
              overflowX: 'auto',
            }}>
              <img src={review.image} className={Styles.square()} />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 16
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'end',
                gap: 10
              }}>
                <p style={{
                  color: Styles.vars.color.gray[800],
                  ...Styles.vars.font.bodyR14
                }}>
                  {review.description}
                </p>
              </div>
              <div className={Styles.divider()} />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7
              }}>
                {
                  tagTypes.map(({ name, category }) => (
                    <div key={name} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3
                    }}>
                      <span style={{ width: 75, ...Styles.vars.font.bodyM14, color: Styles.vars.color.gray[500] }}>{name}</span>
                      <div style={{
                        display: 'flex',
                        gap: 3,
                        flex: 1,
                        flexWrap: 'wrap',
                      }}>
                        {
                          review.tags.filter(v => v.category === category).map(tag => {
                            return (
                              <Check variant="rectangle" key={tag.name} disabled style={{ padding: '4px 10px', fontSize: 12 }}>{tag.name}</Check>
                            )
                          })
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
              <table style={{
                textAlign: 'left',
              }}>
                <tbody>
                  {
                    basicTableDatas.map(({ name, value }) => (
                      <tr key={name}>
                        <th style={{ ...Styles.vars.font.bodyM14, color: Styles.vars.color.gray[400], width: 90 }}>{name}</th>
                        <td style={{ ...Styles.vars.font.bodyR14, color: Styles.vars.color.gray[800] }}>{value}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <table style={{
                  textAlign: 'left',
                  height: 'fit-content'
                }}>
                  <tbody>
                    {
                      graphTableDatas.map(({ name, house }) => (
                        <tr key={name}>
                          <th style={{ ...Styles.vars.font.bodyM14, color: Styles.vars.color.gray[400], width: 90 }}>{name}</th>
                          <td style={{ ...Styles.vars.font.bodyR14, color: Styles.vars.color.gray[800] }}>{house}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <div style={{
                  flex: 1,
                  height: 200,
                }}>
                  {
                    graphTableDatas.length &&
                    <ResponsiveRadar
                      data={graphTableDatas}
                      keys={['house']}
                      indexBy="name"
                      maxValue={5}
                      valueFormat=">-.2f"
                      margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                      borderColor="#ff2c2c"
                      gridShape="linear"
                      dotSize={10}
                      dotColor="#ff2c2c"
                      dotBorderWidth={0}
                      dotBorderColor="#ff2c2c"
                      isInteractive={false}
                      animate={false}
                      colors={{ scheme: 'set1' }}
                      fillOpacity={0.15}
                      text={{
                        fontSize: 12,
                        fill: Styles.vars.color.gray[600]
                      }}
                      grid={{
                        line: {
                          stroke: Styles.vars.color.primary[100],
                          strokeWidth: 1
                        }
                      }}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
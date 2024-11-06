"use client";

import * as Styles from '../components/index.css';
import Check from '../components/Check';
import Link from 'next/link';
import Star from '../components/Star';
import Empty from '../components/Empty';
import React from 'react';

export default function ({ reviews = [] }) {
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

  return (
    <>
      <div className={Styles.ReviewsContainer}>
        {
          !reviews.length ?
            <Empty text={`아직 리뷰가 등록되지 않았어요!\n여러분의 리뷰가 필요해요`} />
            : <>
              <div className={Styles.center} style={{ justifyContent: 'space-between' }}>
                <span style={{ ...Styles.vars.font.headingSB20 }}>
                  실거주자 리뷰
                </span>
                <select>
                  <option>
                    최신순
                  </option>
                </select>
              </div>
              {
                reviews.map(review => {
                  return (
                    <React.Fragment key={review.id}>
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
                          <p className={Styles.descriptionPreview}>
                            {review.description}
                          </p>
                          <Link href={''} style={{
                            textDecoration: 'none',
                            ...Styles.vars.font.bodyR14,
                            color: Styles.vars.color.primary[100]
                          }}>더보기</Link>
                        </div>
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
                                {
                                  review.tags.filter(v => v.category === category).map(tag => {
                                    return (
                                      <Check variant="rectangle" key={tag.name} disabled>{tag.name}</Check>
                                    )
                                  })
                                }
                              </div>
                            ))
                          }
                        </div>
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
                      </div>
                      <div className={Styles.divider()} />
                    </React.Fragment>
                  )
                })
              }
            </>
        }
      </div>
    </>
  )
}
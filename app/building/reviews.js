"use client";

import * as Styles from '../components/index.css';
import Check from '../components/Check';
import Link from 'next/link';
import Star from '../components/Star';
import Empty from '../components/Empty';
import React from 'react';

export default function () {
  const reviews = [
    {
      "id": "2b3face4-51232318d2-4003-84e92-ca76d43d1c67",
      "user": "f218dba1-6c05-46ec-b9b9-0cf9cd5bf340",
      "house": "4f718bfb-1dc7-4ef2-9b1e-1599a831a2f1",
      "residence_start_date": "2024-10-01",
      "residence_floor": "basement",
      "deposit": 10,
      "monthly_rent": 100,
      "maintenance_fee": 5,
      "lighting": 3,
      "water_pressure": 3,
      "mold": 4,
      "havc": 2,
      "noise": 3,
      "tags": [
        {
          "id": "09185972-b142-4fca-97ab-85e85e3a671e",
          "name": "🚌 교통 환경",
          "category": "pros"
        },
        {
          "id": "0ff82e5e-a08d-443c-b46e-6f83fd578a05",
          "name": "🌡 냉난방",
          "category": "cons"
        },
        {
          "id": "2e6efef8-54c1-438e-bb25-9ed1f5e1fc4d",
          "name": "🕷 벌레",
          "category": "cons"
        }
      ],
      "rating": 4,
      "description": "학교까지 걸어서 3분이라 위치는 좋고, 주변에 편의점과 마트도 있어 편리해요. 방은 깨끗한 편인데 여름에 벌레가 조금 나오는 게 좀 그랬어요",
      "image": "https://cnfyuagrxxfh.compat.objectstorage.ap-seoul-1.oraclecloud.com/bucket-20241002-1716/images/9c74f006-d65e-4a5e-bfc6-326ac889e7c8.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=a9baa9595cdaf21197299c31871a7e9732a96eeb%2F20241028%2Fap-seoul-1%2Fs3%2Faws4_request&X-Amz-Date=20241028T020855Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=23d876e044199cf82076d5892ab5a0a9bdace7fe67f3c05cbfa7c1ae5e9beb49"
    },
    {
      "id": "2b3face4-51321238d23-4003-84e9-ca76d43d1c67",
      "user": "f218dba1-6c05-46ec-b9b9-0cf9cd5bf340",
      "house": "4f718bfb-1dc7-4ef2-9b1e-1599a831a2f1",
      "residence_start_date": "2024-10-01",
      "residence_floor": "basement",
      "deposit": 10,
      "monthly_rent": 100,
      "maintenance_fee": 5,
      "lighting": 3,
      "water_pressure": 3,
      "mold": 4,
      "havc": 2,
      "noise": 3,
      "tags": [
        {
          "id": "09185972-b142-4fca-97ab-85e85e3a671e",
          "name": "🚌 교통 환경",
          "category": "pros"
        },
        {
          "id": "0ff82e5e-a08d-443c-b46e-6f83fd578a05",
          "name": "🌡 냉난방",
          "category": "cons"
        },
        {
          "id": "2e6efef8-54c1-438e-bb25-9ed1f5e1fc4d",
          "name": "🕷 벌레",
          "category": "cons"
        }
      ],
      "rating": 4,
      "description": "학교까지 걸어서 3분이라 위치는 좋고, 주변에 편의점과 마트도 있어 편리해요. 방은 깨끗한 편인데 여름에 벌레가 조금 나오는 게 좀 그랬어요",
      "image": "https://cnfyuagrxxfh.compat.objectstorage.ap-seoul-1.oraclecloud.com/bucket-20241002-1716/images/9c74f006-d65e-4a5e-bfc6-326ac889e7c8.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=a9baa9595cdaf21197299c31871a7e9732a96eeb%2F20241028%2Fap-seoul-1%2Fs3%2Faws4_request&X-Amz-Date=20241028T020855Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=23d876e044199cf82076d5892ab5a0a9bdace7fe67f3c05cbfa7c1ae5e9beb49"
    },
    {
      "id": "2b3face4-58d2-4003-84e9-ca76d43d1c67",
      "user": "f218dba1-6c05-46ec-b9b9-0cf9cd5bf340",
      "house": "4f718bfb-1dc7-4ef2-9b1e-1599a831a2f1",
      "residence_start_date": "2024-10-01",
      "residence_floor": "basement",
      "deposit": 10,
      "monthly_rent": 100,
      "maintenance_fee": 5,
      "lighting": 3,
      "water_pressure": 3,
      "mold": 4,
      "havc": 2,
      "noise": 3,
      "tags": [
        {
          "id": "09185972-b142-4fca-97ab-85e85e3a671e",
          "name": "🚌 교통 환경",
          "category": "pros"
        },
        {
          "id": "0ff82e5e-a08d-443c-b46e-6f83fd578a05",
          "name": "🌡 냉난방",
          "category": "cons"
        },
        {
          "id": "2e6efef8-54c1-438e-bb25-9ed1f5e1fc4d",
          "name": "🕷 벌레",
          "category": "cons"
        }
      ],
      "rating": 4,
      "description": "학교까지 걸어서 3분이라 위치는 좋고, 주변에 편의점과 마트도 있어 편리해요. 방은 깨끗한 편인데 여름에 벌레가 조금 나오는 게 좀 그랬어요",
      "image": "https://cnfyuagrxxfh.compat.objectstorage.ap-seoul-1.oraclecloud.com/bucket-20241002-1716/images/9c74f006-d65e-4a5e-bfc6-326ac889e7c8.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=a9baa9595cdaf21197299c31871a7e9732a96eeb%2F20241028%2Fap-seoul-1%2Fs3%2Faws4_request&X-Amz-Date=20241028T020855Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=23d876e044199cf82076d5892ab5a0a9bdace7fe67f3c05cbfa7c1ae5e9beb49"
    }
  ]
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
          false ?
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
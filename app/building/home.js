import * as Styles from '../components/index.css'
import QuestionIcon from '../svgs/question-circle.svg'
import Empty from '../components/Empty'
import { ResponsiveRadar } from '@nivo/radar'
import { useEffect, useState } from 'react'

export default function ({ house = {} }) {
  const [graphData, setGraphData] = useState([])
  const texts = [
    {
      text: '주변 소음',
      isHighlight: true
    },
    {
      text: '이 적고 ',
      isHighlight: false
    },
    {
      text: '채광이 좋으며 수압',
      isHighlight: true
    },
    {
      text: '도 짱짱한 집이에요',
      isHighlight: false
    }
  ]
  useEffect(() => {
    if (!Object.keys(house).length) return;
    setGraphData([
      {
        "key": "채광",
        'house': house.average_lighting || 0,
      },
      {
        "key": "곰팡이",
        'house': house.average_mold || 0,
      },
      {
        "key": "주변소음",
        'house': house.average_noise || 0,
      },
      {
        "key": "냉난방",
        'house': house.average_havc || 0,
      },
      {
        "key": "수압",
        'house': house.average_water_pressure || 0,
      }
    ])
  }, [house])
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '100%',
        padding: '25px 16px',
        flex: 1
      }}>
        <div className={Styles.center} style={{
          gap: 4,
          marginBottom: 20
        }}>
          <span style={{
            ...Styles.vars.font.bodyM16,
            color: Styles.vars.color.gray[900]
          }}>AI가 요약한 리뷰 분석 결과에요!</span>
          <QuestionIcon />
        </div>
        {
          false ?
            <Empty text="아직 분석 결과를 볼 수 없어요!" />
            :
            <>
              <div className={Styles.center} style={{
                gap: 39,
                marginBottom: 22
              }}>
                <div style={{
                  width: 240,
                  height: 220
                }}>
                  <ResponsiveRadar
                    data={graphData}
                    keys={['house']}
                    indexBy="key"
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
                </div>
                <p style={{
                  ...Styles.vars.font.bodyM16,
                  color: Styles.vars.color.gray[900]
                }}>
                  평균 월세는<br />
                  {house.average_deposit?.toFixed(0)} / {house.average_monthly_rent?.toFixed(0)}
                </p>
              </div>
              <span className={Styles.center} style={{
                width: '100%',
                ...Styles.vars.font.bodyM14,
                color: Styles.vars.color.gray[900]
              }}>
                {
                  texts.map((text, idx) =>
                    <span key={idx} style={{ color: text.isHighlight ? Styles.vars.color.primary[100] : Styles.vars.color.gray[900], whiteSpace: 'pre' }}>
                      {text.text}
                    </span>
                  )
                }
              </span>
            </>
        }
      </div>
    </>
  )
}
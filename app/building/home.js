import * as Styles from '../components/index.css'
import QuestionIcon from '../svgs/question-circle.svg'

export default function () {
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
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      width: '100%',
      padding: '25px 16px'
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
      <div className={Styles.center} style={{
        gap: 39,
        marginBottom: 22
      }}>
        <div style={{
          backgroundColor: 'red',
          width: 206,
          height: 172
        }} />
        <p style={{
          ...Styles.vars.font.bodyM16,
          color: Styles.vars.color.gray[900]
        }}>
          평균 월세는<br />
          100 / 38
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
    </div>
  )
}
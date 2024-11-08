import { progressIntroComplete, progressIntroLayout, progressIntroVerticalBar, progressStepContent, progressStepIndex, progressStepLayout } from './index.css'

export default function ({ steps }) {
  return (
    <>
      <div className={progressIntroLayout}>
        <div className={progressIntroVerticalBar} />
        {
          steps.map((step, index) => {
            return (
              <div key={index} className={progressStepLayout}>
                <span className={progressStepIndex}>{index + 1}</span>
                <span className={progressStepContent}>{step}</span>
              </div>
            )
          })
        }
      </div>
      <span className={progressIntroComplete}>멋진 리뷰 작성 완료!</span>
    </>
  )
}
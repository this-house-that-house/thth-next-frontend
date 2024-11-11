import Button from '../components/Button'
import { vars, questionContainer, container, dash, rangeInputContainer } from '../components/index.css'
import Search from '../components/Search';
import TextInput from '../components/TextInput';

export default function ({ onDone, preferredArea, minMonthlyRent, maxMonthlyRent }) {
  return (
    <>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>원하는 동네를 알려주세요</span>
        <Search placeholder="원하는 구, 동을 입력해주세요" name="preferred_area" defaultValue={preferredArea} />
      </div>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>월세는 얼마정도 생각하나요?</span>
        <div className={rangeInputContainer}>
          <TextInput unit="만원" style={{ flex: 1 }} name="min_monthly_rent" defaultValue={minMonthlyRent} type="number" />
          <span className={dash} />
          <TextInput unit="만원" style={{ flex: 1 }} name="max_monthly_rent" defaultValue={maxMonthlyRent} type="number" />
        </div>
      </div>
      <div className={container} />
      <Button type="button" onClick={onDone}>다음</Button>
    </>
  )
}
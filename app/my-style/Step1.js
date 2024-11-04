import Button from '../components/Button'
import { vars, questionContainer, container, dash, rangeInputContainer } from '../components/index.css'
import Search from '../components/Search';
import TextInput from '../components/TextInput';

export default function ({ onDone }) {
  return (
    <>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>원하는 동네를 알려주세요</span>
        <Search placeholder="원하는 구, 동을 입력해주세요" />
      </div>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>월세는 얼마정도 생각하나요?</span>
        <div className={rangeInputContainer}>
          <TextInput unit="만원" style={{ flex: 1 }} />
          <span className={dash} />
          <TextInput unit="만원" style={{ flex: 1 }} />
        </div>
      </div>
      <div className={container} />
      <Button onClick={onDone}>다음</Button>
    </>
  )
}
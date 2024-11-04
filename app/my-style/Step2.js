import Button from '../components/Button'
import Check from '../components/Check';
import { vars, questionContainer, container, dash, rangeInputContainer, toggleContainer } from '../components/index.css'
import TextInput from '../components/TextInput';

export default function ({ onDone }) {
  const conditionList = [
    '🌤️ 채광',
    '💧 수압',
    '🛒 편의 시설 인접',
    '📢 방음',
    '🗑 방의 상태',
    '🚌 교통 환경',
    '🛠 건물 관리',
    '🌡 냉난방',
    '📦 보안',
    '🏫 학교 근접',
    '🌀 환기',
    ' 🍃 조용한 환경',
    '🧺 기본 옵션 제공',
    '🤝🏻 집주인과의 소통'
  ];
  const nessessaryList = [
    "주차장",
    "현관 CCTV",
    "경비원",
    "엘레베이터",
    "옥상 출입가능",
    "업어도 괜찮아요"
  ]
  return (
    <>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>가장 중요하게 생각하는 3가지를 골라주세요</span>
        <div className={toggleContainer}>
          {conditionList.map((condition, index) => (
            <Check key={index} variant={"tag"}>{condition}</Check>
          ))}
        </div>
      </div>
      <div className={questionContainer}>
        <span style={{ ...vars.font.headingSB18 }}>이 시설은 꼭 있어야해요!</span>
        <div className={toggleContainer}>
          {nessessaryList.map((condition, index) => (
            <Check key={index} variant={"tag"}>{condition}</Check>
          ))}
        </div>
      </div>
      <div className={container} />
      <Button onClick={onDone}>다음</Button>
    </>
  )
}
"use client";

import AddButton from "../components/AddButton";
import { absoluteCenter, center, relative, vars, checklistCompareButton } from "../components/index.css";
import SpeechBubbleIcon from '../svgs/speech-bubble.svg'
import RedHouseOIcon from '../svgs/red-house-o.svg'
import ChecklistItem from '../components/ChecklistItem'
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter()
  const list = [
    {
      id: 1,
      user: 'user1',
      title: '인하주택',
      lighting: 1,
      water_pressure: 1,
      mold: 1,
      havc: 1,
      noise: 1,
      tags: [{
        id: 1,
        name: '매매',
        category: 'type'
      }],
      memo: '메모1'
    },
    {
      id: 2,
      user: 'user1',
      title: '인하주택',
      lighting: 1,
      water_pressure: 1,
      mold: 1,
      havc: 1,
      noise: 1,
      tags: [{
        id: 1,
        name: '매매',
        category: 'type'
      }],
      memo: '메모1'
    }
  ]
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      gap: 14,
      padding: '4px 16px 0',
      position: 'relative'
    }}>
      {
        list.map((item, index) => (
          <ChecklistItem key={item.id} id={item.id} title={item.title} />
        ))
      }
      <AddButton style={{ padding: '46px 0px' }} onClick={() => router.push('/checklist?id=-1')} />
      {
        list.length === 0 && (
          <div className={center} style={{
            flexDirection: 'column',
            gap: 16,
            flex: 1
          }}>
            <div className={`${center} ${relative}`}>
              <SpeechBubbleIcon />
              <span className={absoluteCenter} style={{
                ...vars.font.bodyM16,
                color: vars.color.gray[400],
                width: '100%',
                textAlign: 'center',
                paddingBottom: 16
              }}>
                집을 보고 계시나요? <br />
                각 집의 특징을 체크리스트로 정리하세요
              </span>
            </div>
            <RedHouseOIcon />
          </div>
        )
      }
      {
        list.length > 1 && (
          <Button className={checklistCompareButton} onClick={() => router.push('/checklist-compare')}>
            비교하기
          </Button>
        )
      }
    </div>
  )
}
import { vars, checklistWrapper } from "../components/index.css"
import Button from "../components/Button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Range from "../components/Range";


export default function () {
  const params = useSearchParams();
  const id = params.get('id');
  const houseId = params.get('houseId');
  const detailTags = [
    {
      name: "채광 🌤️",
      id: "lighting",
      lowText: "완전 암막",
      highText: "햇빛 쨍쨍"
    },
    {
      name: "수압 💧",
      id: "water_pressure",
      lowText: "매우 약함",
      highText: "매우 강함"
    },
    {
      name: "곰팡이 🍄",
      id: "mold",
      lowText: "관리 필요",
      highText: "매우 깨끗"
    },
    {
      name: "냉난방 🌡️",
      id: "havc",
      lowText: "조절 불가",
      highText: "완벽 온도"
    },
    {
      name: "주변 소음 📢",
      id: "noise",
      lowText: "매우 높음",
      highText: "완전 방음"
    },
  ]
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflowY: 'auto',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflowY: 'auto',
      }}>
        <h1 style={{
          ...vars.font.headingSB20,
          marginBottom: 33
        }}>세부사항을 체크해주세요</h1>
        <div className={checklistWrapper} style={{ gap: 49 }}>
          {
            detailTags.map((tag, index) => {
              return (
                <div className={checklistWrapper} key={tag.id}>
                  <span style={{ ...vars.font.bodyM18, color: vars.color.gray[700] }}>
                    {tag.name}
                  </span>
                  <Range lowText={tag.lowText} highText={tag.highText} name={tag.id} />
                </div>
              )
            })
          }
        </div>
      </div>
      <Link href={`/review?houseId=${houseId}&id=${id}&step=5`} style={{ textDecoration: 'none', marginTop: 30 }}>
        <Button variant="primary" style={{ width: '100%' }}>다음</Button>
      </Link>
    </div>
  )
}
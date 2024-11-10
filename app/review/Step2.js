import { vars } from "../components/index.css"
import Button from "../components/Button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Check from "../components/Check";

export default function ({ tags }) {
  const params = useSearchParams();
  const id = params.get('id');
  const houseId = params.get('houseId');
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
          ...vars.font.headingSB20
        }}>입지 환경은 어땠나요?</h1>
        <span style={{
          ...vars.font.bodyM16,
          color: vars.color.gray[600],
        }}>걸어서 <span style={{ color: vars.color.primary[100] }}>5분 거리</span> 안에 있는 <br />편의시설을 골라주세요</span>
        <span style={{
          marginTop: 50,
          marginBottom: 8,
          color: vars.color.gray[700],
          ...vars.font.bodyM16
        }}>편의시설</span>
        <div style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
        }}>
          {
            tags.filter(tag => tag.category === 'amenities').map(tag => (
              <Check key={tag.id} variant="square" name="tag_ids" value={tag.id}>{tag.name}</Check>
            ))
          }
        </div><span style={{
          marginTop: 50,
          marginBottom: 8,
          color: vars.color.gray[700],
          ...vars.font.bodyM16
        }}>건물환경</span>
        <div style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
        }}>
          {
            tags.filter(tag => tag.category === 'environment').map(tag => (
              <Check key={tag.id} variant="square" name="tag_ids" value={tag.id}>{tag.name}</Check>
            ))
          }
        </div>
      </div>
      <Link href={`/review?houseId=${houseId}&id=${id}&step=3`} style={{ textDecoration: 'none', marginTop: 10 }}>
        <Button variant="primary" style={{ width: '100%' }}>다음</Button>
      </Link>
    </div>
  )
}
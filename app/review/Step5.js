import { vars, questionContainer, toggleContainer } from "../components/index.css"
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
        gap: 45
      }}>
        <div className={questionContainer} style={{ paddingLeft: 5 }}>
          <span style={{ ...vars.font.headingSB18 }}>특히 어떤 점이 좋았나요?</span>
          <div className={toggleContainer}>
            {tags.filter(tag => tag.category === 'pros').map(tag => (
              <Check
                key={tag.id}
                variant={"tag"}
                name={"tag_ids"}
                value={tag.id}
              >
                {tag.name}
              </Check>
            ))}
          </div>
        </div>
        <div className={questionContainer} style={{ paddingLeft: 5 }}>
          <span style={{ ...vars.font.headingSB18 }}>어떤 점이 별로였나요?</span>
          <div className={toggleContainer}>
            {tags.filter(tag => tag.category === 'cons').map(tag => (
              <Check
                key={tag.id}
                variant={"tag"}
                name={"tag_ids"}
                value={tag.id}
              >
                {tag.name}
              </Check>
            ))}
          </div>
        </div>
        <div className={questionContainer} style={{ paddingLeft: 5 }}>
          <span style={{ ...vars.font.headingSB18 }}>집주인은 어떤 분이었나요?</span>
          <div className={toggleContainer}>
            {tags.filter(tag => tag.category === 'landlord').map(tag => (
              <Check
                key={tag.id}
                variant={"tag"}
                name={"tag_ids"}
                value={tag.id}
              >
                {tag.name}
              </Check>
            ))}
          </div>
        </div>
      </div>
      <Link href={`/review?houseId=${houseId}&id=${id}&step=6`} style={{ textDecoration: 'none', marginTop: 30 }}>
        <Button variant="primary" style={{ width: '100%' }}>다음</Button>
      </Link>
    </div>
  )
}
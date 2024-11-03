import * as Styles from "./index.css"
import StarFullIcon from "../svgs/star-full.svg"
import StarHalfIcon from "../svgs/star-half.svg"
import StarEmptyIcon from "../svgs/star-empty.svg"

export default function ({ rating }) {
  const full = Number(Math.floor(rating));
  const half = Number(rating % 1 >= 0.5);

  return (
    <div style={{
      display: 'flex',
      gap: '5px'
    }}>
      <span style={{ ...Styles.vars.font.bodyM16, color: Styles.vars.color.gray[900] }}>
        {rating}
      </span>
      <div>
        {
          new Array(5).fill().map((_, i) => {
            if (i < full) return <StarFullIcon key={i} />;
            if (i < full + half) return <StarHalfIcon key={i} />;
            return <StarEmptyIcon key={i} />
          })
        }
      </div>
    </div>
  )
}
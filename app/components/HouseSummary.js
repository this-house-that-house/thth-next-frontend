"use client";

import { houseSummaryLayout, houseBasicInfoContainer, vars, divider, toggleContainer } from "./index.css";
import { useRouter } from "next/navigation";
import Star from "./Star";
import Check from "./Check";

export default function ({ house }) {
  if (!house) return null;
  const router = useRouter();
  return (
    <div className={houseSummaryLayout} onClick={() => router.push(`/building?id=${house.id}`)}>
      {/* 기본 정보 */}
      <div className={houseBasicInfoContainer} style={{ padding: 0 }}>
        <div>
          <h1 style={{ ...vars.font.headingSB22, color: vars.color.gray[900] }}>{house.name}</h1>
          <span style={{ ...vars.font.bodyR14, color: vars.color.gray[400] }}>{house.address_name}</span>
        </div>
        <Star rating={house.average_rating} />
      </div>
      {/* divider */}
      <div className={divider()} />
      <div>
        <p style={{ ...vars.font.bodyM16, margin: '0px 0px 8px 4px' }}>😀 최근 리뷰, 이런 점이 좋았어요!</p>
        <div className={toggleContainer}>
          <Check variant="rectangle" disabled>🌤️ 채광</Check>
          <Check variant="rectangle" disabled>💧 수압</Check>
          <Check variant="rectangle" disabled>🌡 냉난방</Check>
        </div>
      </div>
    </div>
  )
}

"use client";

import BackwardButton from "../components/BackwardButton"
import Button from "../components/Button"
import { container, topBar, vars } from "../components/index.css"
import { useRouter, useSearchParams } from "next/navigation"

export default function ({ children }) {
  const router = useRouter();
  const params = useSearchParams();
  const ids = params.get('ids')?.split(',');
  const isCompare = ids?.length > 1;
  const text = isCompare ? '비교하기' : '비교 할 항목들을 골라주세요'
  return (
    <>
      <div className={topBar} style={{ gap: 11 }}>
        <BackwardButton />
        <h1 style={{ ...vars.font.headingSB18, flex: 1, textAlign: isCompare ? 'center' : 'left' }}>{text}</h1>
        <Button color={"textPrimary"} style={{ paddingRight: 6 }} onClick={() => router.push('/checklist')}>닫기</Button>
      </div>
      <div className={container}>
        {children}
      </div>
    </>
  )
}
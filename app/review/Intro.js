"use client";

import { reviewIntroLayout, reviewIntroContent, reviewIntroTitle } from '../components/index.css';
import Link from 'next/link';
import Button from '../components/Button';
import ProgressIntro from '../components/ProgressIntro';
import { useSearchParams } from 'next/navigation';

export default function () {
  const params = useSearchParams();
  const id = params.get('id');
  const houseId = params.get('houseId');
  return (
    <div className={reviewIntroLayout}>
      <div className={reviewIntroContent}>
        <h1 className={reviewIntroTitle}>리뷰는 다음 순서로<br />진행되어요!  👀</h1>
        <ProgressIntro steps={[
          '기본 정보',
          '입지 환경',
          '기본 옵션',
          '세부 사항 체크',
          '장단점 체크',
          '최종 별점'
        ]}
        />
      </div>
      <Link href={`/review?houseId=${houseId}&id=${id}&step=1`} style={{ textDecoration: 'none' }}>
        <Button variant="primary" style={{ width: '100%' }}>다음</Button>
      </Link>
    </div>
  )
}
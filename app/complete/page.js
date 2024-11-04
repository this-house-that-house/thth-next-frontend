'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import Button from "../components/Button";
import { center, vars } from '../components/index.css';
import CompleteRedSvg from '../svgs/complete-red.svg';
import CompleteYellowSvg from '../svgs/complete-yellow.svg';

export default function () {
  const router = useRouter()
  const searchParams = useSearchParams()
  const variant = searchParams.get('variant') || 'default';
  const data = {
    "default": {
      title: '이집저집\n비교하며 고르기 힘들때?',
      description: '체크리스트 기능을 통해 내가 원하는 자취방을\n비교하며 꼼곰히 체크해보세요',
      image: <CompleteRedSvg />,
      buttonText: '체크리스트 시작하기',
      buttonLink: '/checklist'
    },
    "my-style": {
      title: '스타일 작성이 완료됐어요!',
      description: '이제 구름님에게 딱 맞는\n자취방을 추천받을 수 있어요',
      image: <CompleteRedSvg />,
      buttonText: '맞춤 추천 보러가기',
      buttonLink: '/home'
    },
    "review": {
      title: '리뷰 작성이 완료됐어요!',
      description: '구름님의 소중한 리뷰 감사드려요\n다른 자취생들에게 큰 도움이 될거예요',
      image: <CompleteYellowSvg />,
      buttonText: '홈으로 가기',
      buttonLink: '/home'
    }
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      padding: '0px 16px'
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        padding: '58px 0px 112px'
      }}>
        <div>
          <h1 style={{ ...vars.font.introTitle, textAlign: 'left' }}>{data[variant].title}</h1>
          <p style={{ ...vars.font.introDesc, textAlign: 'left' }}>{data[variant].description}</p>
        </div>
        <div className={center}>
          {data[variant].image}
        </div>
      </div>
      <Button style={{ width: '100%' }} onClick={() => router.push(data[variant].buttonLink)}>{data[variant].buttonText}</Button>
    </div>
  )
}
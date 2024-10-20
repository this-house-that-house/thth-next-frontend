"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Styles from './components/index.css';
import Button from './components/Button';
import Carousel from './components/Carousel';
import { TOKEN_KEY_NAME } from '/app/constants/auth'

export default function () {
  const router = useRouter();
  const [stepIdx, setStepIdx] = useState(0);
  const steps = [
    {
      title: '내가 살 집은 살아본 사람이\n가장 잘 아니까!',
      description: '실제 자취생들이 남긴 솔직한 리뷰를 통해\n내가 살 집에 대한 정보를 자세히 파악해보세요',
      image: '/imgs/intro1.png'
    },
    {
      title: '이집저집\n비교하며 고르기 힘들때?',
      description: '체크리스트 기능을 통해 내가 원하는 자취방을\n비교하며 꼼곰히 체크해보세요',
      image: '/imgs/intro2.png'
    },
    {
      title: '나에게 딱 맞는\n자취방 어디 없을까?',
      description: '나의 자취방 스타일을 지정하여\n딱 맞는 자취방을 추천받아보세요',
      image: '/imgs/intro3.png'
    }
  ]

  const start = () => {
    localStorage.setItem('isVisited', true);
    router.push('/login');
  }

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY_NAME);
    const isVisited = localStorage.getItem('isVisited');
    if (token) {
      router.push('/home');
      return;
    }
    if (isVisited) {
      router.push('/login');
      return;
    }
  }, [router]);

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
        width: '100%',
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <Carousel activeIndex={stepIdx} setActiveIndex={setStepIdx}>
          {
            steps.map((step, idx) => (
              <div key={idx} style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '35px',
              }}>
                <div style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <h1 style={{ ...Styles.vars.font.introTitle, width: '100%' }}>{step.title}</h1>
                  <p style={{ ...Styles.vars.font.introDesc, width: '100%' }}>{step.description}</p>
                </div>
                <img src={step.image} />
              </div>
            ))
          }
        </Carousel>
      </div >
      {
        stepIdx === 2 ?
          <Button style={{ width: '100%', }} onClick={start}>시작하기</Button> :
          <Button style={{ width: '100%' }} onClick={() => setStepIdx(prev => prev + 1)}>다음</Button>
      }
    </div >
  );
}

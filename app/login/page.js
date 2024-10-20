"use client";

import Link from 'next/link';
import * as Styles from '../components/index.css';
import RedHouseIcon from '../svgs/red-house.svg';
import YellowHouseIcon from '../svgs/yellow-house.svg';

export default function () {

  function kakaoLogin() {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/login/kakao',
    });
  }

  return (
    <div className={Styles.center} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      padding: '100px 16px 0px'
    }}>
      <span className={Styles.logoText} style={{
        fontSize: '34px',
        marginBottom: 36
      }}>
        이집저집
      </span>
      <div style={{ marginBottom: 48 }}>
        <RedHouseIcon style={{ marginRight: 9 }} />
        <YellowHouseIcon />
      </div>
      <span style={{
        ...Styles.vars.font.headingSB20,
        textAlign: 'center',
        marginBottom: 85
      }}>
        대학가 자취방, <br />이제 똑똑하게 비교하며 고르세요!
      </span>
      <img
        src="/imgs/kakao_login_large_wide.png"
        onClick={kakaoLogin}
        style={{
          width: '100%',
          marginBottom: 57
        }} />
      <Link href='/home' style={{
        ...Styles.vars.font.bodyM16,
        color: '#989898',
        textDecoration: 'none',
        paddingBottom: 2,
        borderBottom: '1px solid #989898'
      }}>
        로그인 없이 둘러보기
      </Link>
    </div>
  )
}
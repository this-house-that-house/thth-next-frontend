"use client";

import * as Styles from '../components/index.css'
import LinkItem from '../components/LinkItem'

export default function () {
  const logout = () => {
    alert("로그아웃 되었습니다.");
    localStorage.removeItem("token");
  }
  return (
    <>
      <div className={Styles.topBar}>
        <h1 style={{ ...Styles.vars.font.headingSB22 }}>마이 페이지</h1>
      </div>
      <LinkItem href={""} title="구름님 안녕하세요!" description="inhaGoorm@naver.com" icon={false} />
      <div className={Styles.divider({ size: "large" })} />
      <LinkItem href={""} title="나의 자취방 스타일 설정하기" />
      <div className={Styles.divider()} />
      <LinkItem href={""} title="작성한 실거주 리뷰" icon={false} />
      <div className={Styles.divider()} />
      <LinkItem href={""} title="나의 위시리스트" icon={false} />
      <div className={Styles.divider({ size: 'large' })} />
      <LinkItem href={"/login"} title="로그아웃" icon={false} onClick={logout} />
      <div className={Styles.divider()} />
      <LinkItem href={""} title="회원탈퇴" icon={false} color={Styles.vars.color.primary[100]} />
    </>
  )
}
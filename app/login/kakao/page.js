"use client";

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react';
import { reqAuth } from '/app/apis/auth';
import { TOKEN_KEY_NAME } from '/app/constants/auth';

export default function () {
  const router = useRouter();
  const searchParams = useSearchParams()

  const authCode = searchParams.get('code')
  const kakaoServerError = searchParams.get('error')

  const loginHandler = useCallback(
    async (code) => {
      const res = await reqAuth({
        code,
        redirect_uri: 'http://localhost:3000/login/kakao',
      })
      if (res.status === 200) {
        localStorage.setItem(TOKEN_KEY_NAME, res.data.token);
        router.push('/home');
      } else {
        localStorage.removeItem(TOKEN_KEY_NAME);
        router.push('/login?error=kakao-login');
      }
    },
    [router]
  );

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);
    } else if (kakaoServerError) {
      router.push('/login?err=kakao-server');
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  return (
    <h2>로그인 중입니다..</h2>
  );
};
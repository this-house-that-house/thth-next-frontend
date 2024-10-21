"use client";
import Script from 'next/script';

export default function () {
  const onLoad = () => {
    console.log(`kakao js : ${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}`);
    try {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
    catch (e) {
      alert("Kakao API initialization failed");
    }
  }
  return (<>
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
      integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
      crossorigin="anonymous"
      onLoad={onLoad}
    />
  </>)
}
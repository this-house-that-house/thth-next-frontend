export default function () {
  return (
    <>
      {process.env.NEXT_PUBLIC_BASE_URL}
      <br />
      {process.env.NEXT_PUBLIC_API_BASE_URL}
      <br />
      {process.env.NEXT_PUBLIC_KAKAO_JS_KEY}
    </>
  )
}
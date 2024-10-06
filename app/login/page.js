"use client";

export default function () {
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    console.log(username
      , password);
  };

  function kakaoLogin() {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/login/kakao',
    });
  }
  return (<>
    <h1>Login</h1>
    <p>Enter your username and password</p>
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <button type="button" onClick={kakaoLogin}>Kakao Login</button>
    </form>
  </>)
}
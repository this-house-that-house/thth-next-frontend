import "./globals.css";
import { themeClass, container } from "./components/index.css";
import Nav from "./components/Nav";
import KakaoInit from "./components/KakaoInit";

export const metadata = {
  title: "이집저집",
  description: "대학가 자취방, 이제 똑똑하게 비교하며 고르세요!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <KakaoInit />
      <body className={themeClass}>
        <div className={container}>
          {children}
        </div>
        <Nav />
      </body>
    </html>
  );
}

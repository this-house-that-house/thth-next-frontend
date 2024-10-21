import "./globals.css";
import { themeClass } from "./components/index.css";
import KakaoInit from "./components/KakaoInit";
import { Suspense } from "react";

export const metadata = {
  title: "이집저집",
  description: "대학가 자취방, 이제 똑똑하게 비교하며 고르세요!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={null}>
        <KakaoInit />
        <body className={themeClass}>
          {children}
        </body>
      </Suspense>
    </html>
  );
}

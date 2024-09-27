import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    gray: {
      900: "#18181B",
      800: "#27272A",
      700: "#3F3F46",
      600: "#52525B",
      500: "#71717A",
      400: "#A1A1AA",
      300: "#D4D4D8",
      200: "#E4E4E7",
      100: "#F4F4F5",
      50: "#FAFAFA",
    },
    primary: {
      100: "#ff2c2c",
      lighten: {
        100: "#ff4d4d",
        200: "#ff7d7d",
        300: "#ffa0a0",
        400: "#ffe1e1",
      },
      darken: {
        100: "#c82020",
        200: "#5f0000",
      },
    },
    yellow: "#FFDA45",
    lightYellow: "#FFEFB2",
    orange: "#FFAB45",
    green: "#5DD763",
    lightGreen: "#E0FBDD",
  },
  borderRadius: "10px",
  font: {
    buttonNormal: {
      fontFamily: "Pretendard-Regular",
      fontSize: "18px",
      lineHeight: "130%",
      letterSpacing: "-0.45px",
    },
    headingB28: {
      fontFamily: "Pretendard-Bold",
      fontSize: "28px",
      lineHeight: "130%",
      letterSpacing: "-0.7px",
    },
    headingSB28: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "28px",
      lineHeight: "130%",
      letterSpacing: "-0.7px",
    },
    headingSB24: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "24px",
      lineHeight: "130%",
      letterSpacing: "-0.6px",
    },
    bodyM18: {
      fontFamily: "Pretendard-Medium",
      fontSize: "18px",
      lineHeight: "140%",
      letterSpacing: "-0.45px",
    },
    bodyM16: {
      fontFamily: "Pretendard-Medium",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-0.4px",
    },
    bodyR18: {
      fontFamily: "Pretendard-Regular",
      fontSize: "18px",
      lineHeight: "140%",
      letterSpacing: "-0.45px",
    },
    bodyR16: {
      fontFamily: "Pretendard-Regular",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-0.4px",
    },
    buttonLarge: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "18px",
      lineHeight: "130%",
      letterSpacing: "-0.45px",
    },
    labelNormal: {
      fontFamily: "Pretendard-Regular",
      fontSize: "14px",
      lineHeight: "130%",
      letterSpacing: "-0.35px",
    },
  },
});

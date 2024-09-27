import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

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

export const container = style({
  width: "100%",
  flex: 1,
});

export const icon = recipe({
  variants: {
    color: {
      gray: { fill: vars.color.gray[400] },
      primary: { fill: vars.color.primary[100] },
      yellow: { fill: vars.color.yellow },
      orange: { fill: vars.color.orange },
      green: { fill: vars.color.green },
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

export const button = recipe({
  base: {
    display: "flex",
    padding: "17px",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: vars.borderRadius,
    color: vars.color.gray[50],
    ":disabled": {
      backgroundColor: vars.color.gray[200],
      color: vars.color.gray[500],
    },
  },
  variants: {
    color: {
      primary: { backgroundColor: vars.color.primary[100] },
      secondary: { backgroundColor: vars.color.gray[200] },
      yellow: { backgroundColor: vars.color.yellow },
      orange: { backgroundColor: vars.color.orange },
      green: { backgroundColor: vars.color.green },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
export const nav = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 30px 30px 30px",
  boxShadow: "0px -4px 5px 0px rgba(87, 87, 87, 0.03)",
});

export const link = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: vars.color.gray[400],
    gap: "4px",
    textDecoration: "none",
    ...vars.font.labelNormal,
  },
  variants: {
    isActive: {
      false: { color: vars.color.gray[400] },
      true: { color: vars.color.primary[100] },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const searchWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "11px 14px",
  borderRadius: 29,
  border: `2px solid ${vars.color.gray[300]}`,
  backgroundColor: vars.color.gray[50],
  ...vars.font.labelNormal,
});

export const search = style({
  flex: 1,
  border: `none`,
  outline: "none",
  ...vars.font.labelNormal,
});

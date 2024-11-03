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
        "400/50": "#ffe1e180",
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
    headingB28: {
      fontFamily: "Pretendard-Bold",
      fontWeight: "700",
      fontSize: "28px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    headingSB28: {
      fontFamily: "Pretendard-SemiBold",
      fontWeight: "600",
      fontSize: "28px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    headingSB24: {
      fontFamily: "Pretendard-SemiBold",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    headingSB22: {
      fontFamily: "Pretendard-SemiBold",
      fontWeight: "600",
      fontSize: "22px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    headingSB20: {
      fontFamily: "Pretendard-SemiBold",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    headingSB18: {
      fontFamily: "Pretendard-SemiBold",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    bodyM18: {
      fontFamily: "Pretendard-Medium",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "140%",
      letterSpacing: "-2.5%",
    },
    bodyM16: {
      fontFamily: "Pretendard-Medium",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-2.5%",
    },
    bodyM14: {
      fontFamily: "Pretendard-Medium",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "140%",
      letterSpacing: "-2.5%",
    },
    bodyR18: {
      fontFamily: "Pretendard-Regular",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "140%",
      letterSpacing: "-2.5%",
    },
    bodyR16: {
      fontFamily: "Pretendard-Regular",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-2.5%",
    },
    bodyR14: {
      fontFamily: "Pretendard-Regular",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      letterSpacing: "-2.5%",
    },
    buttonLarge: {
      fontFamily: "Pretendard-SemiBold",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    buttonNormal: {
      fontFamily: "Pretendard-Regular",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    labelNormal: {
      fontFamily: "Pretendard-Regular",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
    },
    logoText: {
      fontFamily: "YdestreetB",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "120%",
    },
    introTitle: {
      fontFamily: "Pretendard-SemiBold",
      fontWeight: "600",
      fontSize: "30px",
      lineHeight: "130%",
      letterSpacing: "-2.5%",
      whiteSpace: "pre-line",
      textAlign: "center",
    },
    introDesc: {
      fontFamily: "Pretendard-Regular",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "150%",
      letterSpacing: "-2.5%",
      whiteSpace: "pre-line",
      textAlign: "center",
      color: "#666666",
    },
  },
});

export const container = style({
  width: "100%",
  flex: 1,
  overflowY: "auto",
});

export const icon = recipe({
  variants: {
    color: {
      transparent: { fill: "transparent" },
      gray: { fill: vars.color.gray[400] },
      lightGray: { fill: vars.color.gray[300] },
      primary: { fill: vars.color.primary[100] },
      yellow: { fill: vars.color.yellow },
      orange: { fill: vars.color.orange },
      green: { fill: vars.color.green },
    },
    strokeColor: {
      transparent: { stroke: "transparent" },
      gray: { stroke: vars.color.gray[400], strokeWidth: 2 },
      lightGray: { stroke: vars.color.gray[300], strokeWidth: 2 },
      white: { stroke: vars.color.gray[50], strokeWidth: 2 },
      primary: { stroke: vars.color.primary[100], strokeWidth: 2 },
      yellow: { stroke: vars.color.yellow, strokeWidth: 2 },
      orange: { stroke: vars.color.orange, strokeWidth: 2 },
      green: { stroke: vars.color.green, strokeWidth: 2 },
    },
  },
  defaultVariants: {
    color: "transparent",
    strokeColor: "transparent",
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
    ...vars.font.bodyM16,
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
    ...vars.font.bodyM14,
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
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "11px 14px",
  borderRadius: 29,
  border: `2px solid ${vars.color.gray[300]}`,
  backgroundColor: vars.color.gray[50],
});

export const search = style({
  width: 0,
  flex: 1,
  border: `none`,
  outline: "none",
  backgroundColor: "transparent",
  ...vars.font.bodyR14,
});

export const addressBox = style({
  display: "flex",
  gap: 8,
  padding: "0px 13px",
});

export const addressTextBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const typo = recipe({
  variants: {
    type: {
      headingB28: vars.font.headingB28,
      headingSB28: vars.font.headingSB28,
      headingSB24: vars.font.headingSB24,
      headingSB22: vars.font.headingSB22,
      headingSB20: vars.font.headingSB20,
      headingSB18: vars.font.headingSB18,
      bodyM18: vars.font.bodyM18,
      bodyM16: vars.font.bodyM16,
      bodyM14: vars.font.bodyM14,
      bodyR18: vars.font.bodyR18,
      bodyR16: vars.font.bodyR16,
      bodyR14: vars.font.bodyR14,
      buttonLarge: vars.font.buttonLarge,
      buttonNormal: vars.font.buttonNormal,
      labelNormal: vars.font.labelNormal,
    },
    color: {
      gray: { color: vars.color.gray[900] },
      lightGray: { color: vars.color.gray[400] },
      primary: { color: vars.color.primary[100] },
      yellow: { color: vars.color.yellow },
      orange: { color: vars.color.orange },
      green: { color: vars.color.green },
    },
  },
  defaultVariants: {
    type: "labelNormal",
    color: "gray",
  },
});

export const cardBox = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    position: "relative",
    flexShrink: 0,
  },
  variants: {
    size: {
      small: { width: 130, height: 178 },
      large: { width: 294, height: 244 },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const cardImg = style({
  flex: 1,
  width: "100%",
  objectFit: "cover",
  minHeight: 0,
  backgroundColor: vars.color.gray[200],
  borderRadius: vars.borderRadius,
});

export const cardTitle = style({
  ...vars.font.bodyM16,
  color: vars.color.gray[900],
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const cardDesc = style({
  ...vars.font.bodyR14,
  color: vars.color.gray[500],
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const iconBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
});

export const cardIcon = style({
  position: "absolute",
  top: 8,
  right: 8,
});

export const tag = recipe({
  base: {
    padding: "2px 12px",
    borderRadius: 5,
    ...vars.font.labelNormal,
  },
  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.primary.lighten[400],
        color: vars.color.primary[100],
      },
      yellow: {
        backgroundColor: vars.color.lightYellow,
        color: vars.color.orange,
      },
      green: {
        backgroundColor: vars.color.lightGreen,
        color: vars.color.green,
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const checkWrapper = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  variants: {
    variant: {
      default: {
        color: vars.color.gray[900],
        ...vars.font.bodyM16,
      },
      circle: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        boxShadow: "none !important",
        border: `1.5px solid ${vars.color.gray[300]}`,
        backgroundColor: vars.color.gray[100],
        color: "transparent",
        ...vars.font.bodyM16,
        selectors: {
          "&:has(input[type=checkbox]:checked)": {
            backgroundColor: "#FFF2F2",
            borderColor: vars.color.primary.lighten[100],
            color: vars.color.primary[100],
          },
        },
      },
      box: {
        padding: "18px",
        backgroundColor: "white",
        border: `1.5px solid white`,
        borderRadius: vars.borderRadius,
        boxShadow: `0px 0px 6px 0px rgba(74, 74, 74, 0.20)`,
        ...vars.font.headingSB18,
        "&:has(input[type=checkbox]:checked)": {
          backgroundColor: "#FFF2F2",
          borderColor: vars.color.primary.lighten[200],
        },
      },
      square: {
        width: 112,
        height: 112,
        backgroundColor: vars.color.gray[100],
        border: `1.5px solid ${vars.color.gray[100]}`,
        borderRadius: vars.borderRadius,
        color: vars.color.gray[900],
        ...vars.font.bodyM18,
        selectors: {
          "&:has(input[type=checkbox]:checked)": {
            backgroundColor: "#FFF2F2",
            borderColor: vars.color.primary.lighten[200],
            color: vars.color.primary[100],
          },
        },
      },
      tag: {
        padding: "10px 14px",
        borderRadius: vars.borderRadius,
        color: vars.color.gray[700],
        backgroundColor: "white",
        border: "1.5px solid transparent",
        boxShadow: `0px 0px 5px 0px rgba(24, 24, 27, 0.14)`,
        ...vars.font.labelNormal,
        selectors: {
          "&:has(input[type=checkbox]:checked)": {
            backgroundColor: "#FFF2F2",
            borderColor: vars.color.primary.lighten[200],
            color: vars.color.primary.lighten[100],
            boxShadow: "0px 0px 10px 0px rgba(24, 24, 27, 0.07)",
          },
        },
      },
    },
  },
});

export const none = style({
  display: "none",
});

export const checkbox = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: `2px solid ${vars.color.gray[300]}`,
  backgroundColor: vars.color.gray[100],
  selectors: {
    "&:has(input[type=checkbox]:checked)": {
      backgroundColor: vars.color.primary[100],
      color: vars.color.gray[50],
      borderColor: vars.color.primary[100],
    },
  },
});

export const textArea = style({
  padding: "18px",
  backgroundColor: vars.color.gray[100],
  borderRadius: vars.borderRadius,
  outline: "none",
  border: "none",
  ...vars.font.bodyR14,
});

export const slider = style({
  width: "100%",
  padding: 0,
  overflow: "hidden",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "nowrap",
  backgroundColor: "transparent",
});

export const sliderItemWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const sliderLinks = style({});

export const sliderLink = recipe({
  base: {
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
    padding: 0,
    margin: "0 5px",
    cursor: "pointer",
    border: "none",
  },
  variants: {
    isActive: {
      false: { backgroundColor: "#D9D9D9" },
      true: { backgroundColor: vars.color.primary[100] },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const sliderItem = recipe({
  base: {
    boxSizing: "border-box",
    minWidth: "100%",
    height: "auto",
    overflow: "hidden",
    objectFit: "cover",
    transform: "translateX(0)",
    transition: "transform 1s ease",
  },
  variants: {
    index: {
      0: { transform: "translateX(0)" },
      1: { transform: "translateX(-100%)" },
      2: { transform: "translateX(-200%)" },
    },
  },
  defaultVariants: {
    index: 0,
  },
});

export const logoHeader = style({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: 8,
  width: "100%",
  padding: "12px 0 24px 16px",
});

export const logoText = style({
  color: vars.color.primary[100],
  ...vars.font.logoText,
});

export const shadowBox = style({
  borderRadius: vars.borderRadius,
  backgroundColor: "white",
  boxShadow: "0px 0px 6px 0px rgba(74, 74, 74, 0.20)",
});

export const imagePlaceholder = style({
  backgroundColor: vars.color.gray[200],
  borderRadius: vars.borderRadius,
  width: "100%",
  flex: 1,
  minHeight: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const floatingTopBar = style({
  position: "absolute",
  width: "100%",
  padding: "14px 16px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const transparent = style({
  opacity: 0,
});

export const collage = style({
  display: "flex",
  width: "100%",
  height: "228px",
});

export const tabs = style({
  display: "flex",
  width: "100%",
});

export const tab = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: "16px 0px",
    borderBottom: "3px solid " + vars.color.gray[100],
    color: vars.color.gray[500],
    ...vars.font.bodyM16,
  },
  variants: {
    active: {
      true: {
        borderBottomColor: vars.color.primary[100],
        color: vars.color.gray[900],
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const center = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const topBar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "78px",
  padding: "16px",
  boxShadow: "0px 4px 10px 0px rgba(24, 24, 27, 0.07)",
});

export const bottomBar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  padding: "13px 16px 30px",
  boxShadow: "0px -4px 5px 0px rgba(87, 87, 87, 0.08)",
});

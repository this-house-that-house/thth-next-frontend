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
      50: "#FAFAFA"
    },
    primary: {
      100: "#ff2c2c",
      lighten: {
        100: "#ff4d4d",
        200: "#ff7d7d",
        300: "#ffa0a0",
        400: "#ffe1e1"
      },
      darken: {
        100: "#c82020",
        200: "#5f0000"
      }
    },
    yellow: "#FFDA45",
    lightYellow: "#FFEFB2",
    orange: "#FFAB45",
    green: "#5DD763",
    lightGreen: "#E0FBDD"
  },
  borderRadius: "10px",
  font: {
    headingB28: {
      fontFamily: "Pretendard-Bold",
      fontSize: "28px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    headingSB28: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "28px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    headingSB24: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "24px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    headingSB22: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "24px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    headingSB20: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "20px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    headingSB18: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "24px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    bodyM18: {
      fontFamily: "Pretendard-Medium",
      fontSize: "18px",
      lineHeight: "140%",
      letterSpacing: "-2.5%"
    },
    bodyM16: {
      fontFamily: "Pretendard-Medium",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-2.5%"
    },
    bodyM14: {
      fontFamily: "Pretendard-Medium",
      fontSize: "14px",
      lineHeight: "140%",
      letterSpacing: "-2.5%"
    },
    bodyR18: {
      fontFamily: "Pretendard-Regular",
      fontSize: "18px",
      lineHeight: "140%",
      letterSpacing: "-2.5%"
    },
    bodyR16: {
      fontFamily: "Pretendard-Regular",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-2.5%"
    },
    bodyR14: {
      fontFamily: "Pretendard-Regular",
      fontSize: "14px",
      lineHeight: "140%",
      letterSpacing: "-2.5%"
    },
    buttonLarge: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "18px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    buttonNormal: {
      fontFamily: "Pretendard-Regular",
      fontSize: "18px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    },
    labelNormal: {
      fontFamily: "Pretendard-Regular",
      fontSize: "14px",
      lineHeight: "130%",
      letterSpacing: "-2.5%"
    }
  }
});

export const container = style({
  width: "100%",
  flex: 1,
  overflowY: "auto"
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
      green: { fill: vars.color.green }
    },
    strokeColor: {
      transparent: { stroke: "transparent" },
      gray: { stroke: vars.color.gray[400] },
      lightGray: { stroke: vars.color.gray[300] },
      white: { stroke: vars.color.gray[50] },
      primary: { stroke: vars.color.primary[100] },
      yellow: { stroke: vars.color.yellow },
      orange: { stroke: vars.color.orange },
      green: { stroke: vars.color.green }
    }
  },
  defaultVariants: {
    color: "transparent",
    strokeColor: "transparent"
  }
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
      color: vars.color.gray[500]
    },
    ...vars.font.bodyM18
  },
  variants: {
    color: {
      primary: { backgroundColor: vars.color.primary[100] },
      secondary: { backgroundColor: vars.color.gray[200] },
      yellow: { backgroundColor: vars.color.yellow },
      orange: { backgroundColor: vars.color.orange },
      green: { backgroundColor: vars.color.green }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
export const nav = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 30px 30px 30px",
  boxShadow: "0px -4px 5px 0px rgba(87, 87, 87, 0.03)"
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
    ...vars.font.bodyM14
  },
  variants: {
    isActive: {
      false: { color: vars.color.gray[400] },
      true: { color: vars.color.primary[100] }
    }
  },
  defaultVariants: {
    isActive: false
  }
});

export const searchWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "11px 14px",
  borderRadius: 29,
  border: `2px solid ${vars.color.gray[300]}`,
  backgroundColor: "transparent"
});

export const search = style({
  flex: 1,
  border: `none`,
  outline: "none",
  ...vars.font.bodyR14
});

export const addressBox = style({
  display: "flex",
  gap: 8,
  padding: "0px 13px"
});

export const addressTextBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 4
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
      labelNormal: vars.font.labelNormal
    },
    color: {
      gray: { color: vars.color.gray[900] },
      lightGray: { color: vars.color.gray[400] },
      primary: { color: vars.color.primary[100] },
      yellow: { color: vars.color.yellow },
      orange: { color: vars.color.orange },
      green: { color: vars.color.green }
    }
  },
  defaultVariants: {
    type: "labelNormal",
    color: "gray"
  }
});

export const cardBox = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    position: "relative"
  },
  variants: {
    size: {
      small: { width: 130, height: 198 },
      large: { width: 294, height: 195 }
    }
  },
  defaultVariants: {
    size: "small"
  }
});

export const cardImg = style({
  flex: 1,
  width: "100%",
  objectFit: "cover",
  minHeight: 0,
  backgroundColor: vars.color.gray[200],
  borderRadius: vars.borderRadius
});

export const cardTitle = style({
  ...vars.font.bodyM16,
  color: vars.color.gray[900],
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden"
});

export const cardDesc = style({
  ...vars.font.bodyR14,
  color: vars.color.gray[500],
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden"
});

export const iconBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  padding: 0,
  margin: 0
});

export const cardIcon = style({
  position: "absolute",
  top: 8,
  right: 8
});

export const tag = recipe({
  base: {
    padding: "2px 12px",
    borderRadius: 5,
    ...vars.font.labelNormal
  },
  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.primary.lighten[400],
        color: vars.color.primary[100]
      },
      yellow: {
        backgroundColor: vars.color.lightYellow,
        color: vars.color.orange
      },
      green: {
        backgroundColor: vars.color.lightGreen,
        color: vars.color.green
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

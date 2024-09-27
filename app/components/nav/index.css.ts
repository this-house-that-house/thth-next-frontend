import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";
import { recipe } from "@vanilla-extract/recipes";

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

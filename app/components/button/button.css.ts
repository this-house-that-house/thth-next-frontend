import { vars } from "../theme.css";
import { recipe } from "@vanilla-extract/recipes";

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

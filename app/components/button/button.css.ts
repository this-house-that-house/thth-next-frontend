import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const button = style({
  display: "flex",
  padding: "17px",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: vars.borderRadius,
  color: vars.color.gray[50],
  backgroundColor: vars.color.primary[100],
  ":disabled": {
    backgroundColor: vars.color.gray[200],
    color: vars.color.gray[500],
  },
});

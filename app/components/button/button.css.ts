import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const button = style({
  display: "flex",
  padding: "17px",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: vars.borderRadius,
});

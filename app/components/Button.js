"use client";

import * as Styles from "./index.css";

export default function ({ color, children, ...props }) {
  return (
    <button className={Styles.button({ color })} {...props}>
      {children}
    </button>
  );
}
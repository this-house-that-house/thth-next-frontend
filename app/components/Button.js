"use client";

import * as Styles from "./index.css";

export default function ({ color, children, className, ...props }) {
  return (
    <button className={`${Styles.button({ color })} ${className}`} {...props}>
      {children}
    </button>
  );
}
"use client";

import * as Styles from "./index.css";
import BackwardIcon from "../svgs/arrow-left.svg"
import { useRouter } from 'next/navigation'


export default function ({ ...props }) {
  const router = useRouter();
  const onClick = () => router.back();

  return (
    <button className={Styles.iconBtn} {...props} onClick={onClick}>
      <BackwardIcon />
    </button>
  );
}
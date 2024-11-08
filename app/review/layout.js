"use client";

import { container, topBar, vars } from "../components/index.css"
import { useSearchParams } from "next/navigation";
import BackwardButton from "../components/BackwardButton";
import { useEffect, useState } from "react";
import { reqGetHouse } from "../apis/house";

export default function ({ children }) {
  const params = useSearchParams();
  const id = params.get('id');
  const step = +params.get('step');
  const [data, setData] = useState({});
  const getHouse = async () => {
    const res = await reqGetHouse({ id });
    if (res.status === 200) {
      setData(res.data);
    }
  }
  useEffect(() => {
    getHouse();
  }, [])
  return (
    <>
      <div className={topBar}>
        <BackwardButton />
        <h1 style={{ ...vars.font.headingSB18 }}>{step !== 0 && data.name}</h1>
        <div style={{ width: 30 }}></div>
      </div>
      <div className={container}>
        {children}
      </div>
    </>
  )
}
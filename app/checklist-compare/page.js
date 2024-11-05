"use client";

import { useSearchParams } from "next/navigation";
import Compare from "./Compare";
import Selector from "./Selector";

export default function () {
  const params = useSearchParams();
  const ids = params.get('ids')?.split(',');
  const isCompare = ids?.length > 1;
  return (
    <>
      {isCompare ? <Compare ids={ids} /> : <Selector />}
    </>
  )
}
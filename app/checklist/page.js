"use client";

import { useSearchParams } from "next/navigation";
import List from "./List";
import Edit from "./Edit";

export default function () {
  const params = useSearchParams();
  const id = params.get('id');
  return (
    <>
      {id && <Edit id={id} />}
      {!id && <List />}
    </>
  )
}
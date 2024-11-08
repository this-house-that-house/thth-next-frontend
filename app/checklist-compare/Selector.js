"use client";

import Button from "../components/Button";
import Check from "../components/Check";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { reqGetChecklist } from "../apis/checklist";

export default function () {
  const router = useRouter();
  const [list, setList] = useState([]);
  const getList = async () => {
    const res = await reqGetChecklist();
    if (res.status === 200) {
      setList(res.data);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  const compare = (e) => {
    e.preventDefault();
    const checked = e.target.querySelectorAll('input[type="checkbox"]:checked');
    if (checked.length < 2) {
      alert('2개 이상 선택해주세요');
      return;
    }
    if (checked.length > 2) {
      alert('2개만 선택해주세요');
      return;
    }
    const checkedIds = [...checked].map((item) => item.getAttribute('item-id'));
    router.push(`/checklist-compare?ids=${checkedIds.join(',')}`);
  }
  return (
    <form onSubmit={compare} style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      padding: '0 16px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: '4px',
        flex: 1,
        overflowY: 'auto',
      }}>
        {
          list.map((item, index) => (
            <Check key={item.id} variant="box" checkboxVisible item-id={item.id} style={{ width: '100%' }} >
              {item.title}
            </Check>
          ))
        }
      </div>
      <Button type="submit" color="primary">
        비교하기
      </Button>
    </form>
  )
}
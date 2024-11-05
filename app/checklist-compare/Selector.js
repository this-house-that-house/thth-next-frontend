"use client";

import Button from "../components/Button";
import Check from "../components/Check";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter()
  const list = [
    {
      id: 1,
      user: 'user1',
      title: '인하주택',
      lighting: 1,
      water_pressure: 1,
      mold: 1,
      havc: 1,
      noise: 1,
      tags: [{
        id: 1,
        name: '매매',
        category: 'type'
      }],
      memo: '메모1'
    },
    {
      id: 2,
      user: 'user1',
      title: '인하주택',
      lighting: 1,
      water_pressure: 1,
      mold: 1,
      havc: 1,
      noise: 1,
      tags: [{
        id: 1,
        name: '매매',
        category: 'type'
      }],
      memo: '메모1'
    },
    {
      id: 3,
      user: 'user1',
      title: '인하주택',
      lighting: 1,
      water_pressure: 1,
      mold: 1,
      havc: 1,
      noise: 1,
      tags: [{
        id: 1,
        name: '매매',
        category: 'type'
      }],
      memo: '메모1'
    }
  ]
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
            <Check key={item.id} variant="box" checkboxVisible item-id={item.id}>
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
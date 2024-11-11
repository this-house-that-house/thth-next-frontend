import { vars, graySelectStyle, selectStyle } from "../components/index.css"
import TextInput from "../components/TextInput"
import Button from "../components/Button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Select from "../components/Select"
import DatePicker from "react-datepicker"
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css";

export default function () {
  const params = useSearchParams();
  const id = params.get('id');
  const houseId = params.get('houseId');
  const [date, setDate] = useState(new Date());
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }}>
      <h1 style={{
        ...vars.font.headingSB20
      }}>리뷰 전, 기본정보를 먼저<br />입력해주세요</h1>
      <span style={{
        marginTop: 30,
        marginBottom: 10,
        ...vars.font.bodyM18
      }}>언제부터 거주하셨나요?</span>
      <div className={graySelectStyle}>
        <DatePicker selected={date} onChange={(date) => setDate(date)} className={selectStyle} style={{ width: '100%' }} name="residence_start_date" />
      </div>
      <span style={{
        marginTop: 30,
        marginBottom: 10,
        ...vars.font.bodyM18
      }}>몇층에 거주하셨나요?</span>
      <div className={graySelectStyle}>
        <Select name="residence_floor" variant={"gray"} style={{
          width: '100%',
          appearance: "none"
        }}>
          <option value='basement'>지하</option>
          <option value='ground'>1층</option>
          <option value='lower'>저층</option>
          <option value='rooftop'>고층</option>
        </Select>
      </div>
      <span style={{
        marginTop: 30,
        marginBottom: 10,
        ...vars.font.bodyM18
      }}>보증금은 얼마였나요?</span>
      <TextInput unit="만원" name="deposit" type="number" />
      <span style={{
        marginTop: 30,
        marginBottom: 10,
        ...vars.font.bodyM18
      }}>월세는 얼마였나요?</span>
      <TextInput unit="만원" name="monthly_rent" type="number" />
      <span style={{
        marginTop: 30,
        marginBottom: 10,
        ...vars.font.bodyM18
      }}>관리비는 얼마였나요?</span>
      <TextInput unit="만원" name="maintenance_fee" type="number" />
      <Link href={`/review?houseId=${houseId}&id=${id}&step=2`} style={{ textDecoration: 'none', marginTop: 'auto' }}>
        <Button variant="primary" style={{ width: '100%' }}>다음</Button>
      </Link>
    </div>
  )
}
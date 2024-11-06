"use client";

import Progress from '../components/Progress';
import { myStyleContainer } from '../components/index.css';
import Step1 from './Step1';
import Step2 from './Step2';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StepPage from '../components/StepPage';
import StepForm from '../components/StepForm';
import { reqGetStyle, reqPostStyle, reqPutStyle } from '../apis/style';

export default function () {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [style, setStyle] = useState({});
  const getStyle = async () => {
    const res = await reqGetStyle();
    if (res.status === 200) {
      setStyle(res.data);
    }
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      tag_ids: []
    };
    formData.forEach((value, key) => {
      if (key === 'tag_ids') data.tag_ids.push(value);
      else data[key] = value;
    });

    let res
    if (style.id) res = await reqPutStyle(data);
    else res = await reqPostStyle(data);
    if (res.status === 201 || res.status === 200) {
      alert('저장되었습니다.');
      router.push('/complete?variant=my-style');
    }
  }
  useState(() => {
    getStyle();
  }, []);
  return (
    <StepForm id="style-form" onSubmit={onSubmitHandler}>
      {step <= 2 && <Progress total={2} current={step} />}
      <StepPage show={step === 1} className={myStyleContainer}>
        <Step1
          onDone={() => setStep(2)}
          preferredArea={style.preferred_area}
          minMonthlyRent={style.min_monthly_rent}
          maxMonthlyRent={style.max_monthly_rent}
        />
      </StepPage>
      <StepPage show={step === 2} className={myStyleContainer}>
        <Step2 selectedTags={style.preferred_tags} />
      </StepPage>
    </StepForm>
  )
}
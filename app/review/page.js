"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Progress from "../components/Progress";
import StepForm from "../components/StepForm";
import StepPage from "../components/StepPage";
import { myStyleContainer } from "../components/index.css";
import Intro from "./Intro";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import { useEffect, useState } from "react";
import { reqGetTag } from "../apis/tag";
import { reqPatchReview, reqPostReview } from "../apis/review";

export default function () {
  const params = useSearchParams();
  const router = useRouter();
  const houseId = params.get('houseId');
  const id = +params.get('id');
  const step = +params.get('step');
  const [tags, setTags] = useState([]);
  const getTags = async () => {
    const res = await reqGetTag();
    if (res.status === 200) {
      setTags(res.data);
    }
  }

  const steps = [
    <Intro />,
    <Step1 />,
    <Step2 tags={tags} />,
    <Step3 tags={tags} />,
    <Step4 />,
    <Step5 tags={tags} />,
    <Step6 />,
  ]

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      house: houseId,
      tag_ids: []
    };
    formData.forEach((value, key) => {
      if (key === 'tag_ids') data.tag_ids.push(value);
      else data[key] = value;
    });

    let res;
    if (id === -1) res = reqPostReview(data);
    else res = reqPatchReview(data);
    if (res.status === 200 || res.status === 201) {
      alert('리뷰가 저장되었습니다.');
      router.push(`/building/${houseId}`);
    }
  }

  useEffect(() => {
    getTags();
  }, [])
  return (
    <>
      <StepForm id="review-form" onSubmit={onSubmitHandler}>
        {step > 0 && step <= 6 && <Progress total={6} current={step} />}
        {
          steps.map((stepComponent, index) => {
            return (
              <StepPage key={index} show={step === index} className={myStyleContainer}>
                {stepComponent}
              </StepPage>
            )
          })
        }
      </StepForm>
    </>
  )
}
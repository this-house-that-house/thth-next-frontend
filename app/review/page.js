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

export default function () {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.get('id');
  const step = +params.get('step');

  const steps = [
    <Intro />,
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
  ]

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      tag_ids: []
    };
    formData.forEach((value, key) => {
      if (key === 'tag_ids') data.tag_ids.push(value);
      else data[key] = value;
    });
    console.log(id, data);
  }
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
"use client";

import Button from "../components/Button";
import Carousel from "../components/Carousel";
import { useState } from "react";
import { introMain, carouselInner } from "../components/index.css";

export default function () {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={introMain}>
      <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <div className={carouselInner}>
          <img src="https://via.placeholder.com/150" />
        </div>
        <img src="https://via.placeholder.com/200" />
      </Carousel>
      <Button color="primary">시작하기</Button>
    </div>
  );
}

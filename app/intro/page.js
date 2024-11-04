"use client";

import Button from "../components/Button";
import Carousel from "../components/Carousel";
import { useState } from "react";

export default function () {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <div>
          <img src="https://via.placeholder.com/150" />
        </div>
        <img src="https://via.placeholder.com/200" />
      </Carousel>
      <Button color="primary">시작하기</Button>
    </div>
  );
}

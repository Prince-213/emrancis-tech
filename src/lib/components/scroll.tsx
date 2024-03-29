"use client";

import Lottie from "react-lottie";
import animationData from "@/lib/components/Animation - 1711731663844.json";

export const ScrollDown = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animation-container">
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

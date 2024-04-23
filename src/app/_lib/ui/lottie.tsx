"use client";

import Lottie from "react-lottie";

export const CustomLottie = ({ animation }: any) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animation-container">
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

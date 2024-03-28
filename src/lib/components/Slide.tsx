import React, { useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useAnimationControls,
} from "framer-motion";
import { useRef } from "react";

interface Props {
    children: React.ReactNode
}

const Slide = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: .5 });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
      console.log('fire')
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.3,
        damping: 8,
        delay: 0.1,
        stiffness: 100,
      }}
      initial="hidden"
      animate={control}
    >

        {children}
    </motion.div>
  );
};

export default Slide;

"use client";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import {
  motion,
  AnimatePresence,
  useAnimate,
  useAnimationControls,
  useSpring,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/all";
import HeaderNav from "./_lib/ui/header";

export default function Template({ children }: { children: React.ReactNode }) {
  const burger = useRef<any>();
  const root: any = useRef();
  const [containerWidth, setContainerWidth] = useState(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const controls = useAnimationControls();

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
    console.log(open);
    controls.start({ height: open ? `0em` : "14.5rem" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={root}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.45 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

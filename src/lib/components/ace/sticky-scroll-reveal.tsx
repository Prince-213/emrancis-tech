"use client";
import React, { useLayoutEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    background: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const root = useRef<any>()
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const mainProgress = useScroll().scrollYProgress

  console.log(scrollYProgress)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    

    
    let ctx = gsap.context(() => {
      // all your animations go in here...
      let maintimeline = gsap.timeline();


      
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      id="trigger"
      animate={{
        /* background: backgroundColors[activeCard % backgroundColors.length], */
      }}
      className=" trigger h-[30em] overflow-auto w-[100%]  flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div scroll relative flex text-left items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div id={index == 3 ? 'last' : ''} key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-black"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-black max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          /* background: linearGradients[activeCard % linearGradients.length], */
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white  sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

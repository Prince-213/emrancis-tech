"use client";

import Image from "next/image";
import Link from "next/link";
import React, {
  LegacyRef,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  Component,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import { InfiniteMovingCardsDemo } from "@/lib/components/inifinite";
import { AnimatedPinDemo } from "@/lib/components/3d-pin";
import { CheckCircle2, Facebook, Star } from "lucide-react";

import { StickyScroll } from "@/lib/components/ui/sticky-scroll-reveal";
import { motion, useSpring, useAnimationControls } from "framer-motion";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { GlobeDemo } from "@/lib/components/globe";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
    background:
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Realtime Changes
      </div>
    ),
    background:
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
    background:
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
    background:
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  },
];

const testimonials: {
  rating: number;
  comment: string;
  profile: string;
  name: string;
  position: string;
}[] = [
  {
    rating: 5,
    comment:
      "We struggled for years to find an IT company that we could trust. While others would try to sell us IT solutions. We actually took the time to listen to what made us unique as a business.",
    profile: "",
    name: "",
    position: "",
  },
  {
    rating: 5,
    comment:
      "We struggled for years to find an IT company that we could trust. While others would try to sell us IT solutions. We actually took the time to listen to what made us unique as a business.   We struggled for years to find an IT company that we could trust.",
    profile: "",
    name: "",
    position: "",
  },
  {
    rating: 5,
    comment:
      "We struggled for years to find an IT company that we could trust. While others would try to sell us IT solutions. We actually took the time to listen to what made us unique as a business.",
    profile: "",
    name: "",
    position: "",
  },
  {
    rating: 5,
    comment:
      "We struggled for years to find an IT company that we could trust. While others would try to sell us IT solutions. We actually took the time to listen to what made us unique as a business. ",
    profile: "",
    name: "",
    position: "",
  },
  {
    rating: 5,
    comment:
      "We struggled for years to find an IT company that we could trust. While others would try to sell us IT solutions. We actually took the time to listen to what made us unique as a business. We struggled for years to find an IT company that we could trust.",
    profile: "",
    name: "",
    position: "",
  },
  {
    rating: 5,
    comment:
      "We struggled for years to find an IT company that we could trust. While others would try to sell us IT solutions. We actually took the time to listen to what made us unique as a business.",
    profile: "",
    name: "",
    position: "",
  },
];

export default function Home() {
  const root: any = useRef();
  const animate = useAnimationControls()

  type TransformIdeas = {
    title: string;
    image: string;
    writeup: string;
    points: string[];
  };

  const transfromIdeas: TransformIdeas[] = [
    {
      title: "Collect Ideas",
      image:
        "https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c",
      writeup:
        "With Emrancis, you can create landing pages that convert more visitors than any other website. You can easily create a page using a variety of unique blocks.",
      points: [
        "We collect ideas from different design inspirations.",
        "Analysis data for any kind of corrections.",
        "Finalize the product for the production to be done.",
      ],
    },
    {
      title: "Data Analysis",
      image:
        "https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c",
      writeup:
        "With Emrancis, you can create landing pages that convert more visitors than any other website. You can easily create a page using a variety of unique blocks.",
      points: [
        "We collect ideas from different design inspirations.",
        "Analysis data for any kind of corrections.",
        "Finalize the product for the production to be done.",
      ],
    },
    {
      title: "Finalize Products",
      image:
        "https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c",
      writeup:
        "With Emrancis, you can create landing pages that convert more visitors than any other website. You can easily create a page using a variety of unique blocks.",
      points: [
        "We collect ideas from different design inspirations.",
        "Analysis data for any kind of corrections.",
        "Finalize the product for the production to be done.",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = SplitType.create("#title");

    let ctx = gsap.context(() => {
      // all your animations go in here...
      let maintimeline = gsap.timeline();

    gsap.from(text.chars, {
        yPercent: 90,
        stagger: 0.1,
        ease: "power2.out",
      }); 

      

      const container = document.querySelector(".container");
      const sections = gsap.utils.toArray(".container section");
      const texts = gsap.utils.toArray(".anim");
      const mask = document.querySelector(".mask");
      const ctaButton = gsap.utils.toArray(".cta");
      const tl = gsap.timeline();

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          end: "+=3000",
          //snap: 1 / (sections.length - 1),
        },
      });

      gsap.to(mask, {
        width: "110%",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top left",
          scrub: 1,
        },
      });

      // whizz around the sections
      sections.forEach((section: any) => {
        // grab the scoped text
        let text = section.querySelectorAll(".anim");

        // bump out if there's no items to animate
        if (text.length === 0) return;

        // do a little stagger
        gsap.from(text, {
          y: -130,
          opacity: 0,
          duration: 2,
          ease: "elastic",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
          },
        });
      });

      maintimeline.from(".sec-title", {
        y: 100,
        duration: 1,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".sec-title",
          start: "top 85%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  });

  return (
    <main ref={root} className=" bg-white w-full overflow-x-hidden font-space">
      <header className=" h-fit w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0]">
        <main className=" w-[90%]  lg:w-[85%]  mx-auto">
          <div className=" pb-10 border-b-2 w-full flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center">
            <div className=" flex-col mt-16 lg:mt-0 w-full flex gap-y-1 lg:w-[50%] ">
              <motion.h1
              
                id="title"
                className=" text-[2rem] lg:text-6xl lg:text-left text-center overflow-hidden leading-[2.5rem] lg:leading-[4rem] font-bold"
              >
                Unlock <span className=" text-blue-500">Coding</span> Mastery
                with Emrancis.
              </motion.h1>
              <p className=" text:base lg:text-left text-center lg:text-lg">
                Welcome to your gateway to comprehensive programming education.
                Whether you are a beginner or an experienced developer, our
                expertly crafted courses cater to all levels. Join us to unlock
                the full potential of programming and shape your future in the
                tech landscape.
              </p>
              <div className=" mt-6 flex lg:flex-row flex-col items-center space-y-5 lg:space-y-0  lg:space-x-6">
                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                  Get Started
                </button>
                <button className="shadow-[0_0_0_3px_#000000e_inset] px-6 py-4 bg-transparent border border-[#00000027] dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Hire an expert
                </button>
              </div>
            </div>
            <motion.div
              variants={{
                initial: { opacity: 0, y: 150 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{
                ease: "anticipate",
                duration: ".6",
              }}
              initial="initial"
              whileInView="show"
              viewport={{ once: true }}
              className=" w-full lg:w-[40%]"
            >
              <AnimatedPinDemo />
              <div className=" bg-white p-1 lg:hidden rounded-xl">
                <Image
                  src="https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c"
                  height="1000"
                  width="1000"
                  className=" h-[30vh] lg:h-[56vh] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
          <div className=" flex relative flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 py-16">
            <h1 className=" text-xl text-center lg:text-left max-w-[70%] mx-auto lg:max-w-full lg:text-2xl relative   font-semibold">
              We offer a variety of tech stacks
            </h1>

            <InfiniteMovingCardsDemo />
          </div>
        </main>
      </header>
      <motion.main className=" w-[100%] text-center relative wrap  flex flex-col pt-[10vh] lg:pt-[15vh]">
        <div className=" w-[85%] mx-auto  ">
          <motion.h2
            variants={{
              initial: { opacity: 0, y: 100 },
              show: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            className=" text-3xl lg:text-5xl lg:max-w-[60%] clip    mx-auto overflow-hidden lg:leading-[4rem] leading-[2rem] font-bold"
          >
            Transform Ideas into Reality Learn{" "}
            <span className=" text-blue-500">Tech</span> Today!
          </motion.h2>
        </div>

        <div className="wrapper ">
          <div className="container pt-10 lg:pt-0 scrollx">
            <svg
              className="svg"
              viewBox="0 0 900 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#D9D9D9"
              />
              <mask
                id="mask0_0_1"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="900"
                height="10"
              >
                <path
                  d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_0_1)">
                <rect className="mask" y="-49" height="99" fill="black" />
              </g>
            </svg>
            <section className="sec1  items-center  justify-between pin text-left">
              <div className="  lg:-translate-y-0 lg:w-[54%]">
                <span>Advanced</span>
                <h1 className=" font-semibold lg:text-4xl text-2xl">
                  Collect Ideas
                </h1>

                <div className="col space-y-8 mt-2 ">
                  <p className=" text-base lg:text-lg max-w-[90%]">
                    With our Techty company, you can create landing pages that
                    convert more visitors than any other website. You can easily
                    create a page using a variety of unique blocks.
                  </p>
                  <div className=" flex flex-col space-y-2">
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                  </div>
                </div>

                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold mt-10 bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                  Get Started
                </button>
              </div>
              <Image
                src="https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c"
                height="1000"
                width="1000"
                className=" h-[65vh] lg:block hidden w-[40%] object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                loading="lazy"
              />
            </section>
            <section className="sec2  items-center  justify-between pin text-left">
              <div className=" lg:w-[54%]">
                <span className=" anim">Advanced</span>
                <h1 className=" anim text-2xl lg:text-4xl font-semibold">
                  Collect Ideas
                </h1>

                <div className="col space-y-8 mt-2 ">
                  <p className=" anim text-base lg:text-lg max-w-[90%]">
                    With our Techty company, you can create landing pages that
                    convert more visitors than any other website. You can easily
                    create a page using a variety of unique blocks.
                  </p>
                  <div className=" flex flex-col space-y-2">
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                  </div>
                </div>

                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold mt-10 bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                  Get Started
                </button>
              </div>
              <Image
                src="https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c"
                height="1000"
                width="1000"
                className=" anim h-[65vh] hidden lg:block w-[40%] object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                loading="lazy"
              />
            </section>
            <section className="sec3  items-center  justify-between pin text-left">
              <div className=" lg:w-[54%]">
                <span className=" anim">Advanced</span>
                <h1 className=" anim text-2xl lg:text-4xl font-semibold">
                  Collect Ideas
                </h1>

                <div className="col space-y-8 mt-2 ">
                  <p className=" anim text-base lg:text-lg max-w-[90%]">
                    With our Techty company, you can create landing pages that
                    convert more visitors than any other website. You can easily
                    create a page using a variety of unique blocks.
                  </p>
                  <div className=" flex flex-col space-y-2">
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                    <span className=" flex space-x-4 items-center">
                      <CheckCircle2 strokeWidth="1px" />
                      <p className=" text-base lg:text-lg font-medium">
                        We collect ideas from different design inspirations.
                      </p>
                    </span>
                  </div>
                </div>

                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold mt-10 bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                  Get Started
                </button>
              </div>
              <Image
                src="https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c"
                height="1000"
                width="1000"
                className=" anim h-[65vh] hidden lg:block w-[40%] object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                loading="lazy"
              />
            </section>
          </div>
        </div>

        <section style={{ backgroundColor: "lightblue" }}></section>
      </motion.main>
      <section className=" w-full py-[10vh] lg:py-[20vh] bg-[#F2F5F8]">
        <div className=" w-[85%] flex lg:flex-row flex-col justify-between items-start  mx-auto">
          <motion.h1
            variants={{
              initial: { x: 50, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            className=" lg:w-[35%] clip font-bold text-4xl text-center lg:text-left lg:text-5xl"
          >
            Unleash full <span className=" text-blue-500">business</span>{" "}
            potential.
          </motion.h1>
          <motion.div
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.4,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" lg:w-[60%] grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-0 gap-y-10 lg:gap-y-0 lg:gap-x-10"
          >
            {[1, 2, 3].map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  className=" space-y-5 flex-col flex justify-center items-center lg:items-start lg:justify-start"
                >
                  <div className=" w-16 h-16 flex items-center justify-center rounded-[50%] bg-white text-blue-500">
                    <CheckCircle2 size={"32px"} />
                  </div>
                  <h2 className=" text-xl font-bold">SEO Expert Team</h2>
                  <p className=" text-base text-center lg:text-left">
                    Creating products to meet our user needs and market demands.
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <section className=" w-full h-screen bg-white py-20 flex justify-center items-center">
        <div className=" w-[85%] priority flex lg:flex-row flex-col justify-between items-center mx-auto">
          <div className=" lg:w-[40%] relative">
            <Image
              src="https://source.unsplash.com/woman-in-black-top-using-surface-laptop-glRqyWJgUeY"
              height="1000"
              width="1000"
              className=" h-[30vh] lg:h-[65vh] pro-card w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              loading="lazy"
            />
            <motion.div
              variants={{
                initial: { opacity: 0, x: -100 },
                show: { opacity: 1, x: 0 },
              }}
              initial="initial"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
              }}
              className=" text-pretty space-y-2 p-6 rounded-lg bg-white shadow-xl top-[30%] lg:top-[45%] lg:-right-[15%] -right-[10%] absolute lg:w-[20em] w-[15em] h-fit"
            >
              <h1 className=" text-2xl lg:text-4xl font-bold">$840k</h1>
              <p className=" lg:text-base text-sm">
                I want to learn everything that it takes to build an ecommerce
                website{" "}
              </p>
              <p className=" bg-yellow-400 lg:text-base text-sm w-fit p-1 rounded-lg text-red-400 font-medium">
                Fullstack Developmet
              </p>
            </motion.div>
          </div>
          <div className=" space-y-20 text-left flex flex-col items-center justify-center lg:items-start lg:justify-start lg:text-center lg:w-[50%]">
            <div className=" space-y-5">
              <h1 className=" text-4xl lg:text-5xl text-center lg:text-left leading-snug font-bold">
                Our most priority is to provide the effective{" "}
                <span className=" text-blue-500">solutions.</span>{" "}
              </h1>
              <p className=" text-lg text-center lg:text-left ">
                With a library full of thousands of templates to choose from, go
                idea to launch in a matter of minutes. Try uploading your own
                for sale.
              </p>
            </div>

            <motion.button
              variants={{
                initial: { y: 60 },
                show: { y: 0 },
              }}
              transition={{
                duration: ".2",
                ease: "linear",
              }}
              initial="initial"
              whileInView="show"
              viewport={{ once: true }}
              className=" pro-cta  shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold bg-blue-500 rounded-md text-white  transition duration-200 ease-linear"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>
      <section className=" w-full lg:h-screen bg-[#171A1F]">
        <div className=" w-[85%] flex lg:flex-row flex-col-reverse justify-between mx-auto py-[10vh] lg:py-[20vh]">
          <div className=" space-y-10 lg:w-[40%]">
            <h1 className=" font-bold text-4xl text-center lg:text-left lg:text-5xl text-white">
              Let's make your
              <span className=" text-blue-500"> business</span> &{" "}
              <span className=" text-blue-500">ideas</span> reach out.
            </h1>
            <p className=" lg:text-lg text-base text-center lg:text-left text-white">
              Our advisors approach each client individually, so each time we
              select the appropriate insurance for your needs. Thanks to
              conversation, we will adjust the appropriate cover.
            </p>
            <div className=" text-white items-start justify-start flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 lg:space-x-28">
              <div className=" space-y-2">
                <h1 className=" font-bold text-5xl">99.7%</h1>
                <p className=" font-medium">Customer Satisfaction</p>
                <div className=" flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((item, idx) => {
                    return (
                      <Star
                        key={idx}
                        fill="rgb(250 204 21)"
                        className=" text-yellow-400"
                      />
                    )
                  })}
                </div>
              </div>
              <div className=" space-y-2">
                <h1 className=" font-bold text-5xl">4x</h1>
                <p className=" font-medium">Job Offers</p>
                <div className=" flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((item, idx) => {
                    return (
                      <Star
                        key={idx}
                        fill="rgb(250 204 21)"
                        className=" text-yellow-400"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-[50%]">
            <GlobeDemo />
          </div>
        </div>
      </section>
      <section className=" w-full min-h-screen py-[10vh] lg:py-[15vh]">
        <div className=" w-[85%] mx-auto">
          <motion.h1
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 5,
                opacity: 1,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" text-4xl lg:text-5xl lg:max-w-[60%] mx-auto clip  font-bold text-center"
          >
            Read what the <span className=" text-blue-500 ">customers</span> are
            saying about us.
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" w-full mt-10 space-y-5 grid lg:mt-20 lg:grid-cols-3 grid-cols-1 gap-5  "
          >
            {testimonials.map((item, idx) => {
              return (
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  key={idx}
                  className={` h-fit  rounded-lg  border-2 p-10 ${idx == 0 ? 'mt-5' : ''} `}>
                  <div className=" space-y-5">
                    <div className=" flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((item, idx) => {
                        return (
                          <Star
                            key={idx}
                            fill="rgb(250 204 21)"
                            className=" text-yellow-400"
                          />
                        );
                      })}
                    </div>
                    <p className=" text-lg font-medium">“{item.comment}”</p>
                    <div className=" flex items-center space-x-2">
                      <Image
                        src="/pexels-jimmy-jimmy-1484806.jpg"
                        height="1000"
                        width="1000"
                        className=" h-20 w-20 object-cover rounded-[50%] group-hover/card:shadow-xl"
                        alt="thumbnail"
                        loading="lazy"
                      />
                      <div>
                        <div className=" text-lg font-semibold">
                          Jeff Harper
                        </div>
                        <p>Financial Analyst</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className=" w-full bg-[#F2F5F8] min-h-screen py-[10vh] lg:py-[15vh]">
        <div className=" w-[85%] mx-auto">
          <motion.h1
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" clip text-4xl lg:text-5xl lg:max-w-[50%] mx-auto  font-bold text-center"
          >
            Here’s our latest updates from the{" "}
            <span className=" text-blue-500 ">news</span>
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=" w-full gap-6 mt-8 lg:mt-16  grid grid-cols-1 lg:grid-cols-3 "
          >
            {[1, 2, 3].map((item, idx) => {
              return (
                <Link href={`/blog/test`} key={idx}>
                  <motion.div
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                      },
                    }}
                    key={idx}
                    className=" min-h-fit mb-auto mt-0 overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white "
                  >
                    <div className=" space-y-5">
                      <Image
                        src="/pexels-jimmy-jimmy-1484806.jpg"
                        height="1000"
                        width="1000"
                        className=" h-[30vh] w-full object-cover  group-hover/card:shadow-xl"
                        alt="thumbnail"
                        loading="lazy"
                      />

                      <div className=" items-center p-5 space-y-4">
                        <p className=" text-base font-medium text-gray-500">
                          May 20, 2023
                        </p>
                        <h1 className=" text-2xl font-bold">
                          5 reasons why Techty is the go-to choice for small
                          business.
                        </h1>
                        <p className=" text-gray-700">
                          Let us manage your IT for you so that you can get back
                          to doing what you do best.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

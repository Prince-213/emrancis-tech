"use client";

import Image from "next/image";
import Link from "next/link";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import SplitType from "split-type";
import { InfiniteMovingCardsDemo } from "@/lib/components/inifinite";
import { AnimatedPinDemo } from "@/lib/components/3d-pin";
import { CheckCircle2, Star } from "lucide-react";

import { motion, useSpring, useAnimationControls } from "framer-motion";

import { GlobeDemo } from "@/lib/components/globe";
import Slide from "@/lib/components/Slide";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollDown } from "@/lib/components/scroll";
import { getTopBlogs } from "@/lib/utils";
import TopBlogCards from "@/lib/components/topBlogs";
import TopBlogSkeleton from "@/lib/components/top-blog-skeleton";

export default function Home() {
  const root: any = useRef();

  type TransformIdeas = {
    tag: string;
    title: string;
    image: string;
    writeup: string;
    points: string[];
  };

  const transformIdeas: TransformIdeas[] = [
    {
      tag: "Collect",
      title: "Collect Ideas",
      image:
        "https://source.unsplash.com/person-holding-orange-flower-petals-5Q07sS54D0Q",
      writeup:
        "With Emrancis, you can create landing pages that convert more visitors than any other website. You can easily create a page using a variety of unique blocks.",
      points: [
        "We collect ideas from different design inspirations.",
        "Analysis data for any kind of corrections.",
        "Finalize the product for the production to be done.",
      ],
    },
    {
      tag: "Analyze",
      title: "Data Analysis",
      image:
        "https://source.unsplash.com/turned-on-monitoring-screen-qwtCeJ5cLYs",
      writeup:
        "At Emrancis, we understand the crucial role data analysis plays in making informed decisions and driving successful outcomes in the tech industry. With our expertise in programming and project execution, we seamlessly integrate data analysis into our workflow to extract valuable insights and optimize our strategies. Here's a glimpse into our data analysis process, condensed into three essential steps.",
      points: [
        "We collect data related to your idea and prepare them.",
        "We explore and research intensively on the idea.",
        "We engage in advanced analytics and decision making.",
      ],
    },
    {
      tag: "Finalize",
      title: "Finalize Products",
      image:
        "https://source.unsplash.com/a-person-sitting-at-a-table-using-a-laptop-computer-d3nKNw1ILdM",
      writeup:
        "At Emrancis, we pride ourselves on not only teaching programming but also delivering high-quality tech projects that exceed expectations. Our meticulous approach to finalizing projects and preparing them for production ensures seamless transitions from development to implementation. Here's a concise overview of our process, distilled into three essential steps.",
      points: [
        "We commence the finalization process by conducting a comprehensive evaluation of the project.",
        "We proceed to rigorous testing and quality assurance to validate its performance and reliability.",
        "We focus on deployment and preparing it for production.",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Prince Jonathan",
      occupation: "ICT Manager",
      review:
        "Exceptional teaching methods! The courses provided by Emrancis have significantly improved my programming skills. The instructors are knowledgeable, and the learning materials are well-structured. Highly recommend!",
      profile:
        "https://source.unsplash.com/man-wearing-white-button-up-shirt-hAMJpesMeDE",
    },
    {
      name: "Kwame Boateng",
      occupation: "Software Engineer",
      review:
        "I've had an amazing experience learning from Emrancis. The instructors are passionate about teaching and go above and beyond to ensure understanding. The projects assigned are practical and helped me gain real-world experience.",
      profile: "https://source.unsplash.com/a-man-with-a-mustache-P_jBxTIYGKg",
    },
    {
      name: "Chinonso Okonkwo",
      occupation: "Full Stack Developer",
      review:
        "I'm extremely satisfied with the quality of education provided by Emrancis. The curriculum covers a wide range of topics, and the hands-on approach helped me grasp complex concepts more effectively. Thank you for the invaluable learning experience!",
      profile:
        "https://source.unsplash.com/a-man-with-his-hand-on-his-chin-Rz_8bZzlPc0",
    },
    {
      name: "Oluwaseun Adeyemi",
      occupation: "Backend Developer",
      review:
        "As someone with prior programming knowledge, I can confidently say that the courses offered by Emrancis exceeded my expectations. The instructors are experts in their field and offer personalized guidance to help students succeed. Highly recommended for anyone looking to advance their skills!",
      profile:
        "https://source.unsplash.com/boy-in-green-and-white-adidas-soccer-jersey-cF6quSnBnQ4",
    },
    {
      name: "Okafor Emmanuel",
      occupation: "CEO",
      review:
        "I'm impressed by the dedication and professionalism of the instructors. They make complex topics easy to understand and create a supportive learning environment. I've gained confidence in my programming abilities thanks to their guidance.",
      profile:
        "https://source.unsplash.com/man-in-red-blue-and-white-plaid-dress-shirt-wearing-yellow-hat-holding-black-smartphone-xdS9XEoKBLY",
    },
    {
      name: "Okah Ifeanyi Livinus",
      occupation: "Project Manager",
      review:
        "Enrolling in courses was one of the best decisions I've made for my career. The practical knowledge gained has been instrumental in my role as a project manager. The instructors are highly skilled and passionate about teaching. I highly recommend their programs!",
      profile:
        "https://source.unsplash.com/man-wearing-black-shirt-aoEwuEH7YAs",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = SplitType.create("#title");

    let ctx = gsap.context(() => {
      // all your animations go in here...
      let maintimeline = gsap.timeline();

      maintimeline.from(text.chars, {
        yPercent: 90,
        stagger: 0.1,
        ease: "power3.out",
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
        <main className=" w-[90%]  lg:w-[80%]  mx-auto">
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
                  src="https://source.unsplash.com/people-sitting-down-near-table-with-assorted-laptop-computers-SYTO3xs06fU"
                  height="1000"
                  width="1000"
                  className=" h-[30vh] lg:h-[56vh] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                  loading="lazy"
                  placeholder="empty"
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
            {transformIdeas.map((item, idx) => {
              return (
                <section
                  key={idx}
                  className={`sec${
                    idx + 1
                  }  items-start  justify-between pin text-left`}
                >
                  <div className="  lg:-translate-y-0 lg:w-[54%]">
                    <span>{item.tag}</span>
                    <h1 className=" font-semibold lg:text-4xl text-2xl">
                      {item.title}
                    </h1>

                    <div className="col space-y-8 mt-2 ">
                      <p className=" text-base max-w-[90%]">{item.writeup}</p>
                      <div className=" flex flex-col space-y-2">
                        {item.points.map((item, idx) => {
                          return (
                            <span
                              key={idx}
                              className=" flex space-x-4 items-center"
                            >
                              <CheckCircle2 strokeWidth="1px" />
                              <p className=" text-base font-medium">{item}</p>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold mt-10 bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                      Get Started
                    </button>
                  </div>
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className=" h-[65vh] lg:block hidden w-[40%] object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    loading="lazy"
                    placeholder="empty"
                  />
                </section>
              );
            })}
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
            <motion.div
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className=" text-xl font-bold">SEO Expert Team</h2>
              <p className=" text-base text-center lg:text-left">
                Creating products to meet our user needs and market demands.
              </p>
            </motion.div>

            <motion.div
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C7.77614 0 8 0.223858 8 0.5V1.80687C10.6922 2.0935 12.8167 4.28012 13.0068 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H12.9888C12.7094 10.6244 10.6244 12.7094 8 12.9888V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.0068C4.28012 12.8167 2.0935 10.6922 1.80687 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H1.78886C1.98376 4.21166 4.21166 1.98376 7 1.78886V0.5C7 0.223858 7.22386 0 7.5 0ZM8 12.0322V9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5V12.054C4.80517 11.8689 3.04222 10.1668 2.76344 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H2.7417C2.93252 4.73662 4.73662 2.93252 7 2.7417V5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5V2.76344C10.1668 3.04222 11.8689 4.80517 12.054 7H9.5C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.0322C11.7621 10.0991 10.0991 11.7621 8 12.0322Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className=" text-xl font-bold">Strategic Planning</h2>
              <p className=" text-base text-center lg:text-left">
                Improving products to meet our user needs and market demands..
              </p>
            </motion.div>

            <motion.div
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className=" text-xl font-bold">24/7 Support</h2>
              <p className=" text-base text-center lg:text-left">
                We are ready to help you all all day and our customer service
                are active.
              </p>
            </motion.div>
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
              placeholder="empty"
            />
            <motion.div
              variants={{
                initial: { opacity: 0, x: -100 },
                show: { opacity: 1, x: 0 },
              }}
              initial="initial"
              whileInView="show"
              viewport={{ once: true, amount: "all" }}
              transition={{
                delay: 0.4,
              }}
              className=" text-pretty space-y-2 p-6 rounded-lg bg-white shadow-xl top-[30%] lg:top-[45%] lg:-right-[15%] -right-[10%] absolute lg:w-[20em] w-[15em] h-fit"
            >
              <h1 className=" text-2xl lg:text-4xl font-bold">₦120k</h1>
              <p className=" lg:text-base text-sm">
                I want to learn everything that it takes to build an ecommerce
                website{" "}
              </p>
              <p className=" bg-yellow-400 lg:text-base text-sm w-fit p-1 rounded-lg text-red-400 font-medium">
                Fullstack Dev
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
      <section className=" w-full lg:min-h-screen bg-[#171A1F]">
        <div className=" w-[85%] flex lg:flex-row flex-col-reverse items-center lg:justify-between mx-auto py-[10vh] lg:py-[15vh]">
          <div className=" space-y-10 lg:w-[40%]">
            <h1 className=" font-bold text-4xl text-center lg:text-left lg:text-5xl text-white">
              {"Let's"} make your
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
                    );
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

          <motion.div className=" w-full mt-10 grid lg:mt-20 lg:grid-cols-3 place-content-start  items-start justify-start  grid-cols-1 gap-5  ">
            {testimonials.map((item, idx) => {
              return (
                <Slide key={idx} delay={idx / 10}>
                  <motion.div
                    key={idx}
                    className={` h-full mt-auto m-auto   rounded-lg  border-2 p-10 ${
                      idx == 0 ? "lg:col-span-2" : ""
                    } ${idx == 3 ? " lg:col-span-2 " : ""} ${
                      idx == 5 ? " lg:col-span-2 " : ""
                    } `}
                  >
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
                      <p className=" font-medium">“{item.review}”</p>
                      <div className=" flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage sizes="lg" src={item.profile} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div>
                          <div className=" text-lg font-semibold">
                            {item.name}
                          </div>
                          <p>{item.occupation}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Slide>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/*  <section className=" w-full bg-[#F2F5F8] min-h-screen py-[10vh] lg:py-[15vh]">
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

          <Suspense fallback={<TopBlogSkeleton />}>
            <TopBlogCards />
          </Suspense>
        </div>
      </section> */}
    </main>
  );
}

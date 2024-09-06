import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import Slide from "@/lib/components/Slide";

import type { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "About Emrancis Group",
  description: "This is an insight on Emrancis group "
};

const testimonials = [
  {
    name: "Prince Jonathan",
    occupation: "ICT Manager",
    review:
      "Exceptional teaching methods! The courses provided by Emrancis have significantly improved my programming skills. The instructors are knowledgeable, and the learning materials are well-structured. Highly recommend!",
    profile:
      "https://images.unsplash.com/photo-1706606999710-72658165a73d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Okafor Francis",
    occupation: "CEO",
    review:
      "I'm impressed by the dedication and professionalism of the instructors. They make complex topics easy to understand and create a supportive learning environment. I've gained confidence in my programming abilities thanks to their guidance.",
    profile:
      "https://images.unsplash.com/photo-1707912079134-becf5a3598e2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <>
      <div className=" w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0] py-[10vh]">
        <div className=" w-[85%] flex lg:flex-row flex-col space-y-8 lg:space-y-0 justify-between items-center mx-auto">
          <Image
            src="/pexels-djordje-petrovic-590080-2102416.jpg"
            height="1000"
            width="1000"
            className=" h-[30vh] lg:h-screen lg:w-[45%] object-cover  group-hover/card:shadow-xl"
            alt="thumbnail"
            loading="lazy"
          />
          <div className=" lg:w-[48%] space-y-5 lg:space-y-10">
            <div>
              <h1 className=" font-bold text-4xl lg:text-6xl">
                About <span className=" text-blue-500">Emrancis</span>{" "}
              </h1>
              <p className=" mt-4 font-medium lg:text-lg">
                At Emrancis, we understand the pivotal role that programming
                plays in {"today's"} digital landscape. Just like the language
                of C, which laid the foundation for countless innovations in
                computer science, we aim to equip our students with the
                fundamental skills and knowledge to navigate the ever-evolving
                realm of technology confidently.
              </p>
            </div>
            <div className=" "></div>
            <div>
              <h3 className=" text-xl lg:text-2xl font-bold">
                What Sets Us Apart
              </h3>
              <p className=" lg:text-lg font-medium">
                What sets Unlocking the Code apart is our holistic approach to
                learning. We understand that mastering programming {"isn't"}{" "}
                just about memorizing syntax; {"it's"} about cultivating
                problem-solving skills, fostering creativity, and building
                real-world projects that make an impact. {"That's"} why our
                curriculum goes beyond the basics, offering hands-on projects
                and practical experiences that empower our students to think
                critically and innovate confidently.
              </p>
            </div>
            <div>
              <h3 className=" text-xl lg:text-2xl font-bold">Our Mission</h3>
              <p className=" lg:text-lg font-medium">
                Our mission is simple yet profound: to make programming
                accessible to everyone. Whether {"you're"} a novice eager to
                take your first steps into the world of coding or a seasoned
                developer looking to expand your skill set, Unlocking the Code
                is here to guide you on your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full py-[5vh] lg:py-[15vh]">
        <div className=" w-[85%] relative flex lg:flex-row-reverse flex-col space-y-5 lg:space-y-0 justify-between mx-auto">
          <Image
            src="/pexels-mikhail-nilov-6963062.jpg"
            height="1000"
            width="1000"
            className=" h-[30vh] lg:sticky lg:top-0 lg:h-screen lg:w-[45%] rounded-xl object-cover  group-hover/card:shadow-xl"
            alt="thumbnail"
            loading="lazy"
            placeholder="empty"
          />
          <div className=" lg:w-[48%] space-y-4 lg:space-y-8">
            <div>
              <h1 className=" font-bold text-4xl lg:text-5xl">
                Message from <span className=" text-blue-500">ICT manager</span>{" "}
              </h1>
            </div>
            <p className=" mt-4 font-medium lg:text-lg">
              I would like to take a moment to express my sincere gratitude for
              choosing our IT services. As the ICT manager of this company, I am
              proud to say that we are committed to providing the best possible
              solutions for your business needs.
            </p>
            <p className=" mt-4 font-medium lg:text-lg">
              We understand the challenges that come with managing an enterprise
              in the digital age, and we are dedicated to delivering innovative
              and reliable IT services to help you navigate these challenges
              with ease.
            </p>
            <p className=" mt-4 font-medium lg:text-lg">
              Our team of experts is constantly working to improve our services
              and stay up-to-date with the latest technological advancements. We
              strive to provide personalized solutions that cater to your
              specific requirements, ensuring that your business operations run
              smoothly and efficiently.
            </p>
            <div>
              <h1 className=" font-bold text-lg">Prince Jonathan</h1>
              <h2>ICT Manager</h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full   ">
        <div className=" w-[85%] border-t-2 py-[5vh] lg:py-[15vh]  justify-between items-center mx-auto">
          <h1 className=" text-4xl lg:text-5xl font-bold lg:max-w-[50%] text-center mx-auto">
            Our <span className=" text-blue-500">team</span> behind the
            organization
          </h1>

          <div className=" mt-[5vh] lg:mt-[10vh] gap-y-5 lg:gap-y-0 lg:gap-x-5 grid grid-cols-1 lg:flex lg:justify-between lg:items-center ">
            {testimonials.map((item, idx) => {
              return (
                <Slide key={idx} delay={idx / 10}>
                  <div key={idx}>
                    <Image
                      src={item.profile}
                      height="1000"
                      width="1000"
                      className={` h-[25vh] lg:h-[45vh] max-w-[${
                        100 / testimonials.length - 10
                      }%] rounded-xl object-cover  group-hover/card:shadow-xl`}
                      alt="thumbnail"
                      loading="lazy"
                      placeholder="empty"
                    />
                    <div className=" mt-4">
                      <h1 className=" font-bold text- capitalize">
                        {item.name}
                      </h1>
                      <h2 className=" capitalize">{item.occupation}</h2>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

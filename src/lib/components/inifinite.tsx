"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ace/infinite-move";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-fit rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards

        items={testimonials}
        direction="right"
        speed='normal'
      />
    </div>
  );
}

const testimonials = [
  {
    image: "devicon.svg",
  },

  {
    image: "icons8-node-js.svg",
  },

  {
    image: "icons8-mongo-db-96.png",
  },

  {
    image: "icons8-python.svg",
  },

  {
    image: "icons8-react.svg",
  },
  {
    image: "icons8-svelte-48.png",
  },

  {
    image: "icons8-prisma-orm.svg",
  },

  {
    image: "typescript.svg",
  },

  {
    image: "next-js-seeklogo.svg",
  },

  {
    image: "icons8-express-js.svg",
  },

  {
    image: "icons8-vue-js.svg",
  },
 

];

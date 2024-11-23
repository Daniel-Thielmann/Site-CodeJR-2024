"use client";
import React from "react";
import Image from "next/image";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function BlogIndividual(blogProps: {
  title: string;
  text: React.ReactNode;
  date: string;
  image: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex items-center justify-center mt-6">
        <h1 className="text-center uppercase sub-titulo text-[#FEFFF5] text-[36px]">
          {blogProps.title}
        </h1>
      </div>
      <div className="gap-0">
        <div className="flex items-center justify-center w-full p-4 lg:p-0">
          <Image
            src={blogProps.image}
            alt="imagem blog"
            width={500}
            height={500}
            className="w-full lg:w-[50vw] lg:h-[40vh] rounded-md"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div
          className={`${montserrat.className} text-[#FEFFF5] text-justify p-6 md:w-[90%] text-xl lg:text-xl xl:text-2xl 2xl:text-3xl`}
        >
          <p className="text-[#FEFFF5] text-sm flex flex-row flex-wrap-reverse">
            Data de publicação: {blogProps.date}
          </p>
          {blogProps.text}
        </div>
      </div>
    </div>
  );
}

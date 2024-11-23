import Image from "next/image";
import { Montserrat } from "next/font/google";
import React, { ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

interface FeedbackCardProps {
  description: ReactNode;
  name: string;
}

export default function FeedbackCard({ description, name }: FeedbackCardProps) {
  return (
    <div
      className="texto-base bg-white w-[320px] h-[298px] md:w-[360px] md:h-[308px] rounded-xl flex flex-col gap-8 justify-center items-center md:hover:w-[365px] md:hover:h-[308px] transition-all duration-200 hover:cursor-pointer">
      <div className="border-2 border-black rounded-full p-3">
        <Image
          alt="Logo Code"
          src={"/logoPequena.svg"}
          width={280}
          height={102}
          className="h-[33px] w-[33px]"
        />
      </div>
      <div className="text-center text-[20px] mx-[10px]">{description}</div>
      <li className="text-[20px]">{name}</li>
    </div>
  );
}

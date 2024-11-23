"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function VisIndividual(cardProps: {
  name: string;
  description: React.ReactNode;
  empresa: string;
  image: string;
  gerente: string;
  projetistas: string;
}) {
  return (
    <div className="bg-gradiente-portifolio min-h-screen w-full items-center">
      <h1 className="p-4 md:p-0 text-center uppercase sub-titulo text-[#FEFFF5] text-[48px]">
        {cardProps.name}
      </h1>
      <div className="gap-12 md:gap-0 items-center flex flex-col md:flex-row flex-wrap md:px-12">
        <div className="w-full h-1/2 md:w-1/2 flex items-center justify-center">
          <Image
            alt="imagem projeto"
            src={cardProps.image}
            height={800}
            width={800}
            className="h-[90%] w-[90%] md:h-[80%] md:w-[80%] rounded-lg border-solid border-2 border-black"
          />
        </div>
        <div
          className={`${montserrat.className} text-[#FEFFF5] text-center md:text-justify flex flex-col w-full md:w-1/2 justify-center px-4 text-xl py-10`}
        >
          <h1 className="sub-titulo mb-2">Descrição do projeto: </h1>
          <div className="mb-6 text-justify">{cardProps.description}</div>
          <h1 className="sub-titulo mb-2">Empresa: </h1>
          <p className="mb-6">{cardProps.empresa}</p>
          <h1 className="sub-titulo mb-2">Desenvolvedores:</h1>
          <p className="mb-6">{cardProps.projetistas}</p>
          <h1 className="sub-titulo mb-2">Gerente(s):</h1>
          <p className="mb-6">{cardProps.gerente}</p>
        </div>
      </div>
    </div>
  );
}

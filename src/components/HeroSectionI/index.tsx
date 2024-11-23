import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

export default function HeroSecationI() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-2 sm:px-5 lg:px-0 flex flex-col items-center gap-9 py-[69px] lg:pb-[60px] lg:pt-[82px]">
        <Image
          src={"/cabecalho.png"}
          alt="Logo CODEJR"
          width={918}
          height={270}
          className="w-[72%] sm:w-[306px] lg:w-[30%] cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <h1 className="px-4 md:px-9 text-[#FEFFF5] text-2xl sm:text-3xl lg:text-4xl lg:text-[44px] text-center uppercase sub-titulo">
          Transformando ideias em softwares há 10 anos
        </h1>
        <Link href={"/contact"} className="w-4/5 lg:w-1/4 h-9 lg:h-14">
          <button className="bg-[#FFCE07] w-full h-9 lg:h-14 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out">
            <p className="text-center text-sm sm:text-base text-[#3B1B4D] lg:text-xl texto-base">
              Entre em contato agora mesmo
            </p>
          </button>
        </Link>
        <div className="texto-base w-full lg:w-[45%] flex lg:border-transparent lg:border-[10px] transition-shadow duration-200 hover:shadow-2xl">
          <span className="border-r border-white w-[35%] lg:w-1/3 pr-2 lg:px-[10px]">
            <h2 className="text-white text-center font-bold text-[32px] lg:text-[40px]">
              77
            </h2>
            <p className="text-white text-center font-bold text-xs sm:text-sm lg:text-2xl">
              projetos personalizados
            </p>
          </span>
          <span className="w-[30%] lg:w-1/3 px-2 lg:px-[20px] xl:px-10">
            <h2 className="text-white text-center font-bold text-[32px] lg:text-[40px]">
              10
            </h2>
            <p className="text-white text-center font-bold text-xs sm:text-sm lg:text-2xl">
              anos de mercado
            </p>
          </span>
          <span className="border-l border-white w-[35%] lg:w-1/3 pl-2 lg:px-[10px]">
            <h2 className="text-white text-center font-bold text-[32px] lg:text-[40px]">
              39
            </h2>
            <p className="text-white text-center font-bold text-xs sm:text-sm lg:text-2xl">
              profissionais formados
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

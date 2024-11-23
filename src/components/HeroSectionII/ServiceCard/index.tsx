import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "800"],
});

type CardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: CardProps) {
  return (
    <div
      className="flex flex-col items-center bg-gradient-to-b from-[#3B1B4D] to-[#893FB3] w-full md:w-[360px] h-[331px] px-4 pt-1 sm:px-6 pb-12 sm:pb-14 md:pb-12 bp-840:pb-10 md:px-6 gap-2 sm:gap-4 lg:gap-3 rounded-2xl relative justify-center md:hover:w-[365px] md:hover:h-[331px] transition-all duration-200"
    >
      <div className="flex flex-col w-full h-[56px] sm:h-[64px] justify-center">
        <h1 className="text-white text-xl sm:text-2xl font-extrabold text-center uppercase leading-7">
          {title}
        </h1>
      </div>
      <p className="text-white text-lg md:text-xl font-light text-center leading-6 texto-base">
        {description}
      </p>
      <Link
        href={"/aboutus"}
        className="w-[107px] h-[33px] absolute bottom-[16px] md:bottom-[16px]"
      >
        <button className="bg-[#FFCE07] texto-base w-[107px] h-[33px] rounded-xl text-sm text-center text-[#3B1B4D] hover:border-2 hover:border-white hover:bg-yellow-300">
          Saiba mais
        </button>
      </Link>
    </div>
  );
}

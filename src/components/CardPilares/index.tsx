import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

interface CardPilaresProps {
  title: string;
  description: string;
}

export default function CardPilares({ title, description }: CardPilaresProps) {
  return (
    <div
      className={`${montserrat.className} bg-white w-[320px] h-[320px] hover:scale-100 rounded-xl flex flex-col gap-8 py-6 md:py-8 items-center md:hover:w-[362px] md:hover:h-[322px] transition-all duration-200 hover:cursor-pointer`}
    >
      <h1 className="sub-titulo font-bold uppercase text-2xl"> {title} </h1>
      <p className="texto-base text-center text-[20px] mx-[10px] whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}

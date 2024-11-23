import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function HeroSectionII() {
  return (
    <div className="bg-white w-full h-[1307px] lg:h-[600px] flex flex-col relative">
      <span className="hidden lg:flex relative w-[40%] pointer-events-none">
        <Image
          src={"/path1.png"}
          alt={"path1"}
          width={530}
          height={230}
          className="flex absolute w-[45%] select-none pointer-events-none"
        />
        <Image
          src={"/path2.png"}
          alt={"path2"}
          width={530}
          height={230}
          className="flex absolute w-full select-none pointer-events-none"
        />
        <Image
          src={"/path3.png"}
          alt={"path3"}
          width={530}
          height={230}
          className="flex w-full select-none pointer-events-none"
        />
      </span>
      <span className="lg:hidden flex relative">
        <Image
          src={"/path1mob.png"}
          alt={"path1"}
          width={430}
          height={190}
          className="flex absolute w-full top-[126px] md:top-[116px] bp-840:top-[36px] select-none"
        />
        <Image
          src={"/path2mob.png"}
          alt={"path2"}
          width={430}
          height={190}
          className="flex absolute w-full top-[212px] md:top-[232px] bp-840:top-[182px] select-none"
        />
        <Image
          src={"/path3mob.png"}
          alt={"path3"}
          width={430}
          height={190}
          className="flex absolute w-full top-[272px] md:top-[312px] bp-840:hidden select-none"
        />
      </span>
      <span className="lg:hidden flex relative justify-end">
        <Image
          src={"/path4mob.png"}
          alt={"path4"}
          width={430}
          height={190}
          className="flex absolute top-[772px] w-full bp-840:top-[722px] select-none"
        />
        <Image
          src={"/path5mob.png"}
          alt={"path5"}
          width={376}
          height={190}
          className="flex absolute top-[872px] w-[88%] md:hidden select-none"
        />
        <Image
          src={"/path6mob.png"}
          alt={"path6"}
          width={430}
          height={190}
          className="flex absolute top-[972px] w-full bp-840:top-[872px] select-none"
        />
      </span>
      <span className="hidden lg:flex w-full justify-end bottom-0 absolute">
        <span className="hidden lg:flex justify-end w-[40%] relative pointer-events-none">
          <Image
            src={"/path4.png"}
            alt={"path4"}
            width={550}
            height={240}
            className="flex w-[95%] select-none pointer-events-none"
          />
          <Image
            src={"/path5.png"}
            alt={"path5"}
            width={333}
            height={132}
            className="flex absolute bottom-0 w-[58%] select-none pointer-events-none"
          />
          <Image
            src={"/path6.png"}
            alt={"path6"}
            width={200}
            height={60}
            className="flex absolute bottom-0 w-[35%] select-none pointer-events-none"
          />
        </span>
      </span>
      <h1 className="w-full text-center text-[#251230] text-2xl sm:text-3xl md:text-4xl uppercase mt-[102px] lg:mt-[84.5px] lg:absolute sub-titulo">
        Nossos serviços
      </h1>
      <div className="flex flex-col items-center lg:flex-row absolute w-full px-[35px] gap-8 lg:justify-between md:px-0 lg:w-[1280px] mx-auto right-0 left-0 mt-[202px] lg:mt-[184.5px] h-[1057px] lg:h-[331px]">
        <ServiceCard
          title="Sites Expositivos Personalizados"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi inventore, odit quas numquam provident dolorum consequatur impedit consectetur."
        />
        <ServiceCard
          title="Aplicativos"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi inventore, odit quas numquam provident dolorum consequatur impedit consectetur."
        />
        <ServiceCard
          title="Sistemas de Gerênciamento"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi inventore, odit quas numquam provident dolorum consequatur impedit consectetur."
        />
      </div>
    </div>
  );
}

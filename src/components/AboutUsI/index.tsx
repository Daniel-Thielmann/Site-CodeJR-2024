import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "800"],
});

export default function AboutUsI() {
  return (
    <div className="w-full flex flex-col items-center py-16 bp-840:py-24">
      <h1 className="text-[#FEFFF5] text-[28px] sm:text-[32px] lg:text-[40px] uppercase lg:leading-10 sub-titulo">
        Nossa História
      </h1>
      <div className="bp-840:grid bp-840:grid-flow-col bp-840:grid-cols-6 mt-9 bp-840:mt-12 bp-840:px-[56px] bp-840:gap-12">
        <div className="bp-840:col-span-3 flex items-center flex-col justify-center px-8 bp-840:px-0">
          <Image
            src={"/Screenshot_8.png"}
            alt={"imagem"}
            width={300}
            height={300}
            className="w-full h-[249px] bp-840:h-[480px] rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div
          className={`${montserrat.className} w-full text-white flex flex-col bp-840:col-span-3 gap-[30px] text-lg md:text-xl lg:text-[26px] xl:text-3xl 2xl:text-4xl bp-840:leading-6 lg:leading-7 mt-9 bp-840:mt-0 px-8 bp-840:px-0 lg:py-2 font-light justify-center text-center bp-840:text-start`}
        >
          <p className="texto-base">
            Fundada em 2014 por alunos da UFJF, a Code é uma empresa júnior
            atuante no mercado de computação que trabalha com soluções
            tecnológicas como sites, sistemas e aplicativos.
          </p>
          <p className="texto-base">
            Como filosofia interna, buscamos sempre melhorar tudo o que estiver
            a nosso alcance, visando sempre oferecer serviços de melhor
            qualidade a quem merece o melhor.
          </p>
          <p className="texto-base">
            Com uma cultura voltada ao cliente, estamos sempre investindo em
            novas tecnologias e qualificação dos membros, para que nossas
            soluções sejam entregues com muita eficiência e qualidade,
            simplesmente por acreditar que a satisfação de nossos clientes
            precisa ser completa.
          </p>
        </div>
      </div>
    </div>
  );
}

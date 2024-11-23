"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function AboutUsIII() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span style="background-color: white; border: 1px solid white; width: 14px; height: 14px;" class="' +
        className +
        '"></span>'
      );
    },
  };
  return (
    <div className="pt-[72px] flex flex-col items-center gap-12 justify-center pb-[72px]">
      <h2 className="sub-titulo text-center text-[30px] bp-500:text-[40px] text-subtitulo">
        Movimento empresa júnior
      </h2>
      <div className="flex bp-1024:flex-row flex-col-reverse w-full justify-around items-center bp-1024:gap-24 gap-5 pl-[5%] pr-[5%]">
        <div className="col-span-2">
          <p className="texto-base text-white md:text-base bp-840:text-lg bp-1024:text-xl lg:text-2xl whitespace-pre-line">
            {`O MEJ tem como principal missão formar por meio da vivência empresarial, empreendedores comprometidos e capazes de mudar o Brasil. Diante da necessidade constante por mais inovação e impacto na sociedade, aceitamos grandes desafios a fim de proporcionar um maior crescimento na economia do país,                     buscando gerar valor em nossos serviços e projetos, sempre cientes de nossa responsabilidade e comprometimento, tendo nossas ações baseadas em princípios éticos e morais. \n 
                        Somos uma rede de empresas conectadas, que juntas, compartilhamos propósitos e causas comuns, na esperança de que toda essa sinergia, proporcione um futuro melhor a todos.`}
          </p>
        </div>
        <div>
          <Swiper
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={pagination}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className=" h-[300px] w-[312px] bp-500:h-[406px] bp-500:w-[422px] rounded-md"
          >
            <SwiperSlide>
              <Image
                height={406}
                width={422}
                src={"/Carrossel.svg"}
                alt="Nature 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={406}
                width={422}
                src={"/Carrossel.svg"}
                alt="Nature 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={406}
                width={422}
                src={"/Carrossel.svg"}
                alt="Nature 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={406}
                width={422}
                src={"/Carrossel.svg"}
                alt="Nature 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={406}
                width={422}
                src={"/Carrossel.svg"}
                alt="Nature 1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

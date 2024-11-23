"use client";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function HeroSectionIV() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const perg = [
    {
      pergunta: "1. O que é a Code JR?",
      resposta:
        "A Code JR é a Empresa Júnior de Computação da UFJF, formada por estudantes de graduação. Desenvolvemos soluções tecnológicas, como sites, sistemas e aplicativos, com foco em qualidade e inovação, a preços acessíveis.",
    },
    {
      pergunta: "2. Quem pode contratar os serviços da Code JR?",
      resposta:
        "Qualquer pessoa física ou jurídica interessada em soluções de tecnologia pode contratar nossos serviços. Trabalhamos com empreendedores, pequenas e médias empresas, além de organizações que buscam transformação digital.",
    },
    {
      pergunta: "3. Quais serviços a Code JR oferece?",
      resposta:
        "Oferecemos desenvolvimento de sites, sistemas web, aplicativos, soluções em banco de dados, consultorias e projetos personalizados para atender às suas necessidades tecnológicas.",
    },
    {
      pergunta: "4. Como funciona o processo de contratação?",
      resposta:
        "O processo é simples: Entre em contato conosco pelo formulário ou e-mail. Marcaremos uma reunião para entender suas necessidades. Enviamos uma proposta detalhada com prazos e orçamento. Após sua aprovação, iniciamos o desenvolvimento do projeto.",
    },
    {
      pergunta: "5. Quanto tempo leva para concluir um projeto?",
      resposta:
        "O prazo varia conforme a complexidade do projeto. Simples sites institucionais podem ser entregues em cerca de 3 a 6 semanas, enquanto sistemas ou aplicativos mais complexos podem levar de 2 a 3 meses.",
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-12 justify-center pt-10 pb-20">
      <h2 className="sub-titulo text-center text-[40px] text-subtitulo">
        PERGUNTAS FREQUENTES
      </h2>
      <div className="border text-xl rounded-sm max-w-[90%] text-white text-center texto-base">
        {perg.map((perg, index) => (
          <div key={index}>
            <div
              className={`p-4 flex justify-between items-center cursor-pointer transition-all duration-500 ease-in-out 
                            ${
                              openIndex !== index
                                ? "border-b"
                                : "border-b-2 border-transparent"
                            }`}
              onClick={() => toggleIndex(index)}
            >
              <p className="max-w-[85%]">{perg.pergunta}</p>
              <IoIosArrowDown
                className={`h-12 w-12 text-white transform transition-transform duration-500 ease-in-out 
                                ${
                                  openIndex === index
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
              />
            </div>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 border-b-2" : "max-h-0 border-b"
              }`}
            >
              <div className="p-4 text-white pr-[10%] font-extralight">
                <p>{perg.resposta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

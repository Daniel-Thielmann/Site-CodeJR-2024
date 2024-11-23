'use client';
import { useState } from 'react';
import { BiSolidPhone } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsPhone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
      } else {
        const errorData = await response.json();
        alert('Erro ao enviar mensagem.');
      }
    } catch (error) {
      alert('Erro na conexão com o servidor.');
    }
  };

  return (
    <div className="bg-gradiente-fundo w-full flex flex-col texto-base">
      <div className="bp-840:grid bp-840:grid-flow-col bp-840:grid-cols-8 bp-840:px-[60px] bp-840:py-12 gap-12">
        <div className="bp-840:col-span-5 flex flex-col gap-10 bp-840:gap-6 items-center">
          <h1 className="text-[#FEFFF5] text-[40px] text-center leading-10 mt-10 bp-840:mt-6 uppercase sub-titulo">
            Contato
          </h1>
          <input
            name="name"
            placeholder="Nome"
            className="w-4/5 bp-840:w-full h-[52px] py-2.5 px-[18px] rounded-xl placeholder:text-xl"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className="w-4/5 bp-840:w-full h-[52px] py-2.5 px-[18px] rounded-xl placeholder:text-xl"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Telefone"
            className="w-4/5 bp-840:w-full h-[52px] py-2.5 px-[18px] rounded-xl placeholder:text-xl"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            rows={9}
            className="w-4/5 bp-840:w-full py-3 px-[18px] rounded-xl placeholder:text-xl"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="w-[128px] h-9 bg-white rounded-lg text-xl leading-6 bp-840:mb-6 hover:bg-slate-200"
            onClick={handleSubmit}
          >
            Enviar
          </button>

        </div>
        <div className="bp-840:col-span-3 flex flex-col gap-10 md:gap-12 bp-840:gap-6">
          <h2 className="text-[#FEFFF5] text-3xl sm:text-4xl md:text-[40px] bp-840:text-[28px] text-center bp-840:leading-7 mt-10 md:mt-12 bp-840:mt-4 uppercase sub-titulo">
            Onde Estamos?
          </h2>
          <div className="w-full flex flex-col">
            <div className="flex flex-col items-center bp-840:items-start">
              <iframe
                className="w-[90%] bp-840:w-full h-[316px] border-white border-[3px] rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.375781132885!2d-43.3719491!3d-21.7765014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b9e2bea807b%3A0x7ac85ca76e3d3d1d!2sCode%20Empresa%20Jr.%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1730518950701!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              <div className="flex mt-3 bp-840:mt-1 gap-[5px] justify-center bp-840:justify-normal">
                <MdLocationOn className="text-3xl text-white p-1 my-[5px] hover:scale-110 hover:opacity-80 transition-all duration-300" />
                <span className="w-[270px] text-white text-base leading-5 font-light bp-840:text-center">
                  UFJF - Rua José Lourenço Kelmer Instituto de Ciências Exatas -
                  3313
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 bp-840:gap-[18px] items-center bp-840:items-start mb-10 bp-840:mb-0">
            <h2 className="text-[#FEFFF5] text-xl sm:text-2xl md:text-[40px] bp-840:text-xl lg:text-[28px] leading-7 uppercase sub-titulo">
              Nossas redes sociais
            </h2>
            <ul className="flex flex-col gap-[18px]">
              <li className="text-white flex gap-2.5 text-2xl leading-[30px]">
                <a
                  href="https://instagram.com/codejr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <BsInstagram className="text-3xl hover:scale-110 hover:opacity-80 transition-all duration-300" />{" "}
                  @codejr
                </a>
              </li>
              <li className="text-white flex gap-2.5 text-2xl leading-[30px]">
                <BiSolidPhone className="text-3xl hover:scale-110 hover:opacity-80 transition-all duration-300" />{" "}
                (24) 99911-4310
              </li>
              <li className="text-white flex gap-2.5 text-2xl leading-[30px]">
                <a
                  href="https://br.linkedin.com/company/codejr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <BsLinkedin className="text-3xl hover:scale-110 hover:opacity-80 transition-all duration-300" />{" "}
                  /company/codejr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

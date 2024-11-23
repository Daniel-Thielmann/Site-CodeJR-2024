import CardPilares from "../CardPilares";

export default function AboutUs2() {
  return (
    <div className="flex flex-col items-center gap-16 justify-center w-full py-8">
      <h1 className="sub-titulo text-[40px] text-subtitulo text-center font-bold text-4xl uppercase justify-center font-sans">
        Nossos pilares
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center gap-16 justify-center w-full">
        <CardPilares
          title="missão"
          description="Nossa missão é proporcionar serviços e produtos de qualidade, buscando sempre a satisfação dos nossos clientes."
        />
        <CardPilares
          title="Visão"
          description="Ser referência nacional em soluções tecnológicas, formando profissionais de excelência para liderar a transformação digital e impactar positivamente o mercado e a sociedade."
        />
        <CardPilares 
            title="valores" 
            description={`Inovação\nExcelência\nColaboração\nEmpatia\nAprendizado`}
        />
      </div>
    </div>
  );
}

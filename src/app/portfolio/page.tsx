import Pagination from "@/components/Pagination";
import PortifolioCard from "@/components/PortifolioCard";

export default function Portfolio() {
  const portifolio = [
    {
      id: "1",
      name: "Projeto Exemplo",
      empresa: "Empresa XYZ",
      imagem: { url: "https://via.placeholder.com/150" },
      gerentes: ["Gerente 1"],
      projetistas: ["Projetista 1"],
    },
    // Adicione mais itens mockados aqui
  ];

  const totalPages = 1; // Mock total de páginas

  return (
    <div className="bg-gradiente-portifolio gap-12 flex flex-col items-center justify-center min-h-[69vh] pt-8 pb-8 flex-grow">
      <div className="flex flex-grow w-full gap-x-[8%] ml-5 mr-5 gap-y-8 flex-wrap justify-center items-center h-full">
        {portifolio.map((item) => (
          <PortifolioCard
            key={item.id}
            link={`/individualport/${item.id}`}
            title={item.name}
            empresa={item.empresa}
            image={item.imagem.url}
            gerente={item.gerentes.join(", ")}
            projetistas={item.projetistas.join(", ")}
          />
        ))}
      </div>
      <div>{totalPages > 1 && <Pagination totalPages={totalPages} />}</div>
    </div>
  );
}

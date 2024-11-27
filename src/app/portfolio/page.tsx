import Pagination from "@/components/Pagination";
import PortifolioCard from "@/components/PortifolioCard";
import { cardPerPage } from "@/lib/utils";
import {
  getPortifolio,
  getPortifolioCount,
} from "@/server/db/query/portifolio/query";

interface PortfolioProps {
  searchParams?:
    | Record<string, string | string[] | undefined>
    | Promise<Record<string, string | string[] | undefined>>;
}

interface PortifolioItem {
  id: string;
  name: string;
  empresa: string;
  imagem: { url: string };
  gerentes: string[];
  projetistas: string[];
}

export default async function Portfolio({ searchParams }: PortfolioProps) {
  const resolvedSearchParams =
    searchParams && "then" in searchParams ? await searchParams : searchParams;

  const page = parseInt(
    Array.isArray(resolvedSearchParams?.page)
      ? resolvedSearchParams.page[0]
      : resolvedSearchParams?.page || "1",
    10
  );

  const offset = (isNaN(page) || page < 1 ? 0 : page - 1) * cardPerPage;

  const [portifolio, portifolioCount] = await Promise.all([
    getPortifolio(offset),
    getPortifolioCount(),
  ]);

  const totalPages = Math.ceil(portifolioCount / cardPerPage);

  return (
    <div className="bg-gradiente-portifolio gap-12 flex flex-col items-center justify-center min-h-[69vh] pt-8 pb-8 flex-grow">
      <div className="flex flex-grow w-full gap-x-[8%] ml-5 mr-5 gap-y-8 flex-wrap justify-center items-center h-full">
        {portifolio.length > 0 ? (
          portifolio.map((item: PortifolioItem) => (
            <PortifolioCard
              key={item.id}
              link={`/individualport/${item.id}`}
              title={item.name}
              empresa={item.empresa}
              image={item.imagem.url}
              gerente={item.gerentes.join(", ")}
              projetistas={item.projetistas.join(", ")}
            />
          ))
        ) : (
          <h1 className="px-4 md:px-9 text-[#FEFFF5] text-2xl sm:text-3xl lg:text-4xl lg:text-[44px] text-center uppercase sub-titulo">
            Nenhum projeto encontrado
          </h1>
        )}
      </div>
      <div>{totalPages > 1 && <Pagination totalPages={totalPages} />}</div>
    </div>
  );
}

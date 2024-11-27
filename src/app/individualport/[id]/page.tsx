import VisIndividual from "@/components/VisIndividual";
import { getPortifolio1 } from "@/server/db/query/portifolio/query";
import { RichText } from "@/components/RichText/rich-text"; // Certifique-se de que o caminho está correto

export default async function Page({ params }: { params: any }) {
  const portfolio1 = await getPortifolio1(params.id);

  return (
    <div>
      <VisIndividual
        name={portfolio1.name}
        description={<RichText content={portfolio1.description.raw} />}
        empresa={portfolio1.empresa}
        image={portfolio1.imagem.url}
        gerente={portfolio1.gerentes.join(", ")}
        projetistas={portfolio1.projetistas.join(", ")}
      />
    </div>
  );
}

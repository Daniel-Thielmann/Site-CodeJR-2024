import BlogIndividual from "@/components/BlogIndividual";
import { RichText } from "@/components/RichText/rich-text";
import { getBlog1 } from "@/server/db/query/blog/query";
import { Metadata } from "next";

// Tipagem para os parâmetros
type PageProps = {
  params: any; // Usando `any` para flexibilizar o tipo
};

// Função para gerar metadados dinâmicos
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blog1 = await getBlog1(params.id);

  return {
    title: blog1.title,
    description: blog1.description || "Default description.",
  };
}

// Componente principal da página
export default async function Page({ params }: PageProps) {
  const blog1 = await getBlog1(params.id);

  return (
    <div className="bg-gradiente-portifolio min-h-screen">
      <BlogIndividual
        title={blog1.title}
        text={<RichText content={blog1.text.raw} />}
        date={blog1.date}
        image={blog1.image.url}
      />
    </div>
  );
}

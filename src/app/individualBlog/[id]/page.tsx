import BlogIndividual from "@/components/BlogIndividual";
import { RichText } from "@/components/RichText/rich-text";
import { getBlog1 } from "@/server/db/query/blog/query";

// Tipagem explícita para os parâmetros de rota
interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const blog1 = await getBlog1(params.id);
  console.log(blog1);

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

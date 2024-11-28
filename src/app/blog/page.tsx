import BlogCard from "@/components/Blog/card";
import Pagination from "@/components/Pagination";

export default function Blog() {
  const blog = [
    {
      id: "1",
      title: "Título Exemplo",
      date: "2024-01-01",
      image: { url: "https://via.placeholder.com/150" },
    },
    // Adicione mais itens mockados aqui
  ];

  const totalPages = 1; // Mock total de páginas

  return (
    <div className="bg-gradiente-fundo gap-12 flex flex-col items-center justify-center min-h-[69vh] pt-8 pb-8 flex-grow">
      <div className="flex flex-grow w-full gap-x-[8%] ml-5 mr-5 gap-y-8 flex-wrap justify-center items-center h-full">
        {blog.map((blogItem) => (
          <BlogCard
            key={blogItem.id}
            link={`/individualBlog/${blogItem.id}`}
            title={blogItem.title}
            date={blogItem.date}
            image={blogItem.image.url}
          />
        ))}
      </div>
      <div>{totalPages > 1 && <Pagination totalPages={totalPages} />}</div>
    </div>
  );
}

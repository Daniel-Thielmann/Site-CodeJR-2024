"use server";

import { gql } from "@apollo/client";
import { getClient } from "../../apollo-client";
import { redirect } from "next/navigation";
import { cardPerPage } from "@/lib/utils";
import { ElementNode } from "@graphcms/rich-text-types";

// Tipo para a estrutura de um blog
type BlogQuery = {
  id: string;
  title: string;
  image: {
    url: string;
  };
  text: {
    raw: {
      children: ElementNode[];
    };
  };
  date: string;
  description?: string; // Propriedade opcional
};

type Blog = {
  id: string;
  title: string;
  description?: string;
  text: {
    raw: {
      children: any[];
    };
  };
  date: string;
  image: {
    url: string;
  };
};

// Query para buscar blogs paginados
const GET_BLOG = gql`
  query Blog($skip: Int, $cardPerPage: Int!) {
    blogs(skip: $skip, first: $cardPerPage) {
      title
      image {
        url
      }
      id
      date
    }
  }
`;

// Query para contar blogs
const GET_BLOG_COUNT = gql`
  query BlogCount {
    blogsConnection {
      aggregate {
        count
      }
    }
  }
`;

// Query para buscar um blog específico
const GET_BLOG1 = gql`
  query Blog($id: ID!) {
    blog(where: { id: $id }) {
      title
      image {
        url
      }
      id
      date
      text {
        raw
        text
      }
      description // Adicionamos esta linha para buscar a descrição
    }
  }
`;

// Função para buscar uma lista de blogs
export async function getBlog(skip: number = 0): Promise<BlogQuery[]> {
  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_BLOG,
      variables: { skip, cardPerPage },
      context: {
        fetchOptions: {
          next: {
            revalidate: 60,
          },
        },
      },
    });
    return data.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    redirect("/internal-server-error");
  }
}

// Função para buscar o total de blogs
export async function getBlogCount(): Promise<number> {
  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_BLOG_COUNT,
      context: {
        fetchOptions: {
          next: {
            revalidate: 60,
          },
        },
      },
    });
    return data.blogsConnection.aggregate.count || 0;
  } catch (error) {
    console.error("Error fetching blog count:", error);
    redirect("/internal-server-error");
  }
}

// Função para buscar um blog específico

export async function getBlog1(id: string): Promise<Blog> {
  return {
    id,
    title: "Blog Title",
    description: "A brief description of the blog",
    text: {
      raw: {
        children: [],
      },
    },
    date: "2024-01-01",
    image: {
      url: "https://example.com/image.jpg",
    },
  };
}

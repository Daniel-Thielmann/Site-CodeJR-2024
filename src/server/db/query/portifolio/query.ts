"use server";

import { gql } from "@apollo/client";
import { getClient } from "../../apollo-client";
import { redirect } from "next/navigation";
import { cardPerPage } from "@/lib/utils";
import { ElementNode } from "@graphcms/rich-text-types";

// Tipagem para os dados de um portfólio
type PortifolioQuery = {
  empresa: string;
  id: string;
  name: string;
  imagem: {
    url: string;
  };
  description: {
    raw: {
      children: ElementNode[];
    };
  };
  gerentes: string[]; // Atualizado para ser compatível com PortifolioItem
  projetistas: string[]; // Atualizado para ser compatível com PortifolioItem
};

// Query para obter portfólios paginados
const GET_PORTIFOLIO = gql`
  query Portifolio($skip: Int, $cardPerPage: Int!) {
    portifolios(skip: $skip, first: $cardPerPage) {
      name
      imagem {
        url
      }
      id
      empresa
      projetistas
      gerentes
    }
  }
`;

// Query para contar o total de portfólios
const GET_PORTIFOLIO_COUNT = gql`
  query PortifolioCount {
    portifoliosConnection {
      aggregate {
        count
      }
    }
  }
`;

// Query para obter detalhes de um portfólio
const GET_PORTIFOLIO1 = gql`
  query Portifolio($id: ID!) {
    portifolio(where: { id: $id }) {
      id
      name
      empresa
      projetistas
      gerentes
      description {
        text
        raw
      }
      imagem {
        url
      }
    }
  }
`;

// Função para buscar portfólios paginados
export async function getPortifolio(
  skip: number = 0
): Promise<PortifolioQuery[]> {
  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PORTIFOLIO,
      variables: { skip, cardPerPage },
      context: {
        fetchOptions: {
          next: {
            revalidate: 60, // Cache de 60 segundos
          },
        },
      },
    });
    return data.portifolios;
  } catch (error) {
    console.error("Error fetching portifolio:", error);
    redirect("/internal-server-error");
  }
}

// Função para buscar o total de portfólios
export async function getPortifolioCount(): Promise<number> {
  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PORTIFOLIO_COUNT,
      context: {
        fetchOptions: {
          next: {
            revalidate: 60, // Cache de 60 segundos
          },
        },
      },
    });
    return data.portifoliosConnection.aggregate.count || 0;
  } catch (error) {
    console.error("Error fetching portifolio count:", error);
    redirect("/internal-server-error");
  }
}

// Função para buscar detalhes de um portfólio
export async function getPortifolio1(id: string): Promise<PortifolioQuery> {
  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PORTIFOLIO1,
      variables: { id },
      context: {
        fetchOptions: {
          next: {
            revalidate: 60, // Cache de 60 segundos
          },
        },
      },
    });
    return data.portifolio;
  } catch (error) {
    console.error("Error fetching portifolio:", error);
    redirect("/internal-server-error");
  }
}

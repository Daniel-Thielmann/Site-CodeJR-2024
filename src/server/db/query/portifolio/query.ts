'use server';

import { gql } from "@apollo/client";
import { getClient } from "../../apollo-client";
import { redirect } from "next/navigation";
import { cardPerPage } from "@/lib/utils";
import { ElementNode } from "@graphcms/rich-text-types"

type portifolioQuery = {
    empresa: string;
    id: string;
    name: string;
    imagem: {
        url: string;
    }
    description: {
        raw: {
            children: ElementNode[];
        }
    }
    gerentes: string;
    projetistas: string;
}
type portifolioCountQuery = {
    portifoliosConnection: {
        aggregate: {
            count: number;
        }
    }

}
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
const GET_PORTIFOLIO_COUNT = gql`
    query PortifolioCount {
        portifoliosConnection {
            aggregate {
            count
            }
        }
}
`;

const GET_PORTIFOLIO1 = gql `
   query Portifolio($id: ID!){
      portifolio(where: {id: $id}) {
        id
        name
        empresa
        projetistas
        gerentes
        description{
            text
            raw
        }
        imagem{
            url
        }
      }
   } 
`

export async function getPortifolio(skip: number = 0): Promise<portifolioQuery[]> {
    try {
        const client = getClient()
        const { data } = await client.query({
            query: GET_PORTIFOLIO,
            variables: { skip, cardPerPage },
            context: {
                fetchOptions: {
                    next: {
                        revalidate: 60
                    }
                }
            }
        });
        return data.portifolios;
    }
    catch (error) {
        console.error("Error fetching portifolio", error);
    }
    redirect("/internal-server-error");
}

export async function getPortifolioCount(): Promise<number> {
    try {
        const client = getClient()
        const { data } = await client.query({
            query: GET_PORTIFOLIO_COUNT,
            context: {
                fetchOptions: {
                    next: {
                        revalidate: 60
                    }
                }
            }
        });
        return data.portifoliosConnection.aggregate.count || 0;
    }
    catch (error) {
        console.error("Error fetching contador", error);
    }
    redirect("/internal-server-error");
}

export async function getPortifolio1(id: string): Promise<portifolioQuery> {
    try {
        const client = getClient()
        const { data } = await client.query({
            query: GET_PORTIFOLIO1,
            variables: { id },
            context: {
                fetchOptions: {
                    next: {
                        revalidate: 60
                    }
                }
            }
        });
        return data.portifolio;
    }
    catch (error) {
        console.error("Error fetching portifolio", error);
    }
    redirect("/internal-server-error");
}
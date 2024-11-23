'use server';

import { gql } from "@apollo/client";
import { getClient } from "../../apollo-client";
import { redirect } from "next/navigation";
import { ElementNode } from "@graphcms/rich-text-types"

export type feedbackQuery = {
    name: string
    feedbacks: {
        raw: {
            children: ElementNode[];
        }
    }
}

const GET_FEEDBACK = gql`
    query Feedback {
      feedbacks {
        name
        feedbacks {
          raw
          text
        }
      }
    }
`;

export async function getFeedback(): Promise<feedbackQuery[]>{
    try{
        const client = getClient()
        const { data } = await client.query({
            query: GET_FEEDBACK,
            context: {
                fetchOptions: {
                    next: {
                        revalidate: 60
                    }
                }
            }
        })

        return data.feedbacks
    }

    catch(error){
        console.error("Erro ao buscar feedbacks", error)
    }

    redirect("/internal-server-error");
}
"use server";

import { gql } from "@apollo/client";
import { getClient } from "../../apollo-client";
import { redirect } from "next/navigation";
import { cardPerPage } from "@/lib/utils";
import { ElementNode } from "@graphcms/rich-text-types";

type blogQuery = {
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
};
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

const GET_BLOG_COUNT = gql`
  query BlogCount {
    blogsConnection {
      aggregate {
        count
      }
    }
  }
`;

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
    }
  }
`;

export async function getBlog(skip: number = 0): Promise<blogQuery[]> {
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
    console.error("Error fetching blog", error);
  }
  redirect("/internal-server-error");
}
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
    console.error("Error fetching contador", error);
  }
  redirect("/internal-server-error");
}

export async function getBlog1(id: string): Promise<blogQuery> {
  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_BLOG1,
      variables: { id },
      context: {
        fetchOptions: {
          next: {
            revalidate: 60,
          },
        },
      },
    });
    return data.blog;
  } catch (error) {
    console.error("Error fetching blog", error);
  }
  redirect("/internal-server-error");
}

import "next";

declare module "next" {
  export interface PageProps {
    params: { id: string }; // Corrige o tipo esperado
    searchParams?: Record<string, string | string[]>;
  }
}

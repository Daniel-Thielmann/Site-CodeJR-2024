import "next";

declare module "next" {
  export interface PageProps {
    params: { id: string }; // Garante que params é um objeto síncrono
    searchParams?: Record<string, string | string[]>;
  }
}

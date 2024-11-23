// types/global.d.ts
import "next";

declare module "next" {
  export interface PageProps {
    params: { id: string }; // Tipagem síncrona
    searchParams?: Record<string, string | string[]>;
  }
}

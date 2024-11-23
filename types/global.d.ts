// types/global.d.ts
import "next";

declare module "next" {
  export interface PageProps {
    params: { id: string }; // Corrige para um objeto síncrono
    searchParams?: Record<string, string | string[]>;
  }
}

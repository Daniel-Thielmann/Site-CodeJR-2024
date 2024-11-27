// types/global.d.ts
import "next";

declare module "next" {
  export interface PageProps {
    params?: Record<string, string | undefined>;
    searchParams?:
      | Record<string, string | string[] | undefined>
      | Promise<Record<string, string | string[] | undefined>>;
  }
}

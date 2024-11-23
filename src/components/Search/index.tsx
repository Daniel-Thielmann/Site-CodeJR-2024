"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: any) => {
        try {
            const params = new URLSearchParams(searchParams);
            if (term) {
                params.set("query", term);
            } else {
                params.delete("query");
            }
            replace(`${pathname}?${params.toString()}`);
        } catch (error) {
            console.error("Unknown Error:", error);
        }
    }, 300);

    return(
        <div className="bg-black w-[300px] md:w-3/4 h-[50px] border-white border-[2px] rounded-3xl mt-[50px] py-1 px-3 flex items-center">
            <form autoComplete="off">
            <span className="text-[#FEFFF5] flex items-center text-2xl gap-2">
                <SearchIcon />
                <input className="bg-black w-full placeholder:text-[#FEFFF5] placeholder:italic border-reset outline-0" placeholder="Pesquisar" type = "search" defaultValue={searchParams.get("query")?.toString()} onChange={(e) => {
                    handleSearch(e.target.value);
                }} />
                </span>
                </form>
                </div>
    )
}
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    Pagination as PaginationUI
} from "../ui/pagination";

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page") || 1);

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <PaginationUI>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={createPageURL(currentPage - 1)}
                        aria-label="Página anterior"
                        className={
                            currentPage <= 1
                                ? "pointer-events-none text-muted-foreground opacity-55"
                                : ""
                        }
                    />
                    <span className="sr-only">Página anterior</span>
                </PaginationItem>
                {allPages.map((pageNumber, index) => (
                    <PaginationItem key={index}>
                        {pageNumber === "..." ? (
                            <PaginationLink className="pagination-ellipsis">...</PaginationLink>
                        ) : (
                            <PaginationLink
                                href={createPageURL(pageNumber)}
                                aria-label="Página atual"
                                isActive={currentPage === pageNumber}
                            >
                                {pageNumber}
                                <span className="sr-only">Página atual</span>
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        href={createPageURL(currentPage + 1)}
                        aria-label="Próxima página"
                        className={
                            currentPage >= totalPages
                                ? "pointer-events-none text-muted-foreground opacity-55"
                                : ""
                        }
                    />
                    <span className="sr-only">Próxima página</span>
                </PaginationItem>
            </PaginationContent>
        </PaginationUI>
    );
}

const generatePagination = (currentPage: number, totalPages: number) => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (totalPages <= 5) {
        for (let i = 2; i <= totalPages; i++) {
            pages.push(i);
        }
    } else if (currentPage <= 3) {
        // Se está nas primeiras páginas, não mostre "..." entre 3 e totalPages
        for (let i = 2; i <= Math.min(4, totalPages - 1); i++) {
            pages.push(i);
        }
        if (totalPages > 4) pages.push("...");
        pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
        // Se está nas últimas páginas, não mostre "..." entre 1 e totalPages - 3
        pages.push("...");
        for (let i = totalPages - 3; i < totalPages; i++) {
            pages.push(i);
        }
        pages.push(totalPages);
    } else {
        pages.push("...");
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
    }

    return pages;
};

"use client";

import { cn } from "@/utils/cn";
import { ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";

interface IProps {
  totalPage: number | undefined;
  page: number;
  onPageChange?: (page: number) => void;
  onPageClickChangeSearchParams?: boolean;
  searchParamsName?: string;
  scrollOnLinkClick?: boolean;
}

const MAX_PAGE = 5;
export default function Pagination({
  page,
  totalPage = -1,
  onPageClickChangeSearchParams = false,
  searchParamsName = "page",
  scrollOnLinkClick = false,
  onPageChange,
}: IProps) {
  const [array, setArray] = useState<number[]>([]);
  const [currentSelectedPage, setCurrentSelectedPage] = useState(page);
  const route = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setArray(() => {
      if (totalPage >= MAX_PAGE) return [1, 2, 3, 4, 5];
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    });
  }, [totalPage]);

  const handleNextBtn = () => {
    setArray((prev) => prev.map((item) => item + 1));
  };

  const handlePrevBtn = () => {
    setArray((prev) => prev.map((item) => item - 1));
  };

  const handlePageClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    page: number
  ) => {
    onPageChange?.(page);
    if (onPageClickChangeSearchParams) {
      event.preventDefault();
      setCurrentSelectedPage(page);
      startTransition(() => {
        route.push(href, { scroll: scrollOnLinkClick });
      });
    }
  };

  return (
    <div key={page} className="flex items-center justify-between">
      <button
        disabled={array[0] === 1 || page === 1}
        onClick={handlePrevBtn}
        className={cn(
          "flex items-center gap-2.5 px-3",
          array[0] === 1
            ? "opacity-30 !cursor-not-allowed"
            : "hover:bg-[#ffd2308c] !cursor-pointer"
        )}
      >
        <ChevronRight className="h-4 w-4 -rotate-180" />
        <span className="font-semibold text-sm">Previous</span>
      </button>

      <ul className="flex items-center gap-2.5 max-sm:hidden">
        {array.map((item) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set(searchParamsName, item.toString());
          const linkToRedirect = `${pathname}?${newSearchParams.toString()}`;
          return (
            <li key={item}>
              <Link
                scroll={scrollOnLinkClick}
                href={linkToRedirect}
                onClick={(e) => handlePageClick(e, linkToRedirect, item)}
                className={cn(
                  "size-10 hover:opacity-75 flex items-center justify-center cursor-pointer rounded-[50%] text-sm",
                  item === page
                    ? "bg-[#016a61] text-white"
                    : "hover:border border-[#016a61]"
                )}
              >
                {isPending && item === currentSelectedPage ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  item
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        disabled={
          array[MAX_PAGE - 1] === undefined || array[MAX_PAGE - 1] >= totalPage
        }
        onClick={handleNextBtn}
        className={cn(
          "flex items-center gap-2.5 px-3",
          array[MAX_PAGE - 1] === undefined || array[MAX_PAGE - 1] >= totalPage
            ? "opacity-30 !cursor-not-allowed"
            : "hover:bg-[#ffd2308c] !cursor-pointer"
        )}
      >
        <span className="font-semibold text-sm">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

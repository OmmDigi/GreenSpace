import { NAV_ITEMS } from "@/constant";
import { INav } from "@/types";
import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface INavListView {
  items: INav[];
  wrapperClassName?: string;
  itemClassName?: string;
}

function NavListView({ items, wrapperClassName, itemClassName }: INavListView) {
  return (
    <ul
      className={cn(
        "flex items-center gap-2 font-jost relative max-sm:flex-col",
        wrapperClassName
      )}
    >
      {items.map((eachItem) => (
        <li key={eachItem.id} className="group/navitem">
          <Link
            href={eachItem.slug}
            className={cn(
              "flex items-center scale-100 py-1.5 gap-0.5 relative group/eachnavlink",
              itemClassName
            )}
          >
            {/* <div className="bg-amber-300/40 w-[60%] h-[100%] rotate-[45deg] absolute -left-[100%] transition-all duration-[1000ms] group-hover:left-[100%]"></div> */}
            <div className="flex items-start flex-col gap-0.5">
              <span className="h-0 absolute left-0 top-0 bg-[#e6be20] w-[1px] group-hover/eachnavlink:h-full delay-300 transition-all duration-500"></span>

              <span className="h-[1px] bg-[#e6be20] w-0 group-hover/eachnavlink:w-full transition-all duration-500"></span>
              <span className="px-4.5 z-10 font-[400] text-nowrap">
                {eachItem.name}
              </span>
              <span className="h-[1px] bg-[#e6be20] w-0 group-hover/eachnavlink:w-full transition-all duration-500"></span>
            </div>

            {eachItem.submenu && eachItem.submenu.length !== 0 ? (
              <ChevronDown strokeWidth={1} size={20} className="pt-[2px]" />
            ) : null}
          </Link>

          {eachItem.submenu ? (
            <div className="absolute hidden transition-all duration-300 group-hover/navitem:block group-hover/navitem:translate-y-0 group-hover/navitem:opacity-100">
              <div className="relative top-7 max-h-[80vh] overflow-y-auto nav_drop_down">
                <div className="bg-amber-200 inset-0 absolute -z-10 blur-[4px]"></div>
                <div className="bg-amber-50 backdrop-blur-3xl border border-amber-50 overflow-hidden">
                  <NavListView
                    wrapperClassName="flex-col gap-0"
                    itemClassName="px-8 !py-1 hover:bg-[#fdf7df] !items-start !justify-start"
                    items={eachItem.submenu}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function NavItems() {
  return (
    <nav>
      <NavListView items={NAV_ITEMS} />
    </nav>
  );
}

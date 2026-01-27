import { cn } from "@/utils/cn";
import { LoaderCircle } from "lucide-react";
import React from "react";

interface IProps extends React.ComponentProps<"button"> {
  loading?: boolean;
  glowCss?: string;
}

export default function Button({
  children,
  className,
  loading = false,
  glowCss,
  ...rest
}: IProps) {
  return (
    <div className="relative inline-block">
      <button
        {...rest}
        className={cn(
          "group cursor-pointer relative overflow-hidden px-8 py-4 inline-flex items-center gap-3 bg-gradient-to-tl from-[#f3d662] to-[#e9c01d] text-black rounded-md font-semibold transition-all duration-300 shadow-lg",
          className,
          loading
            ? "opacity-30 hover:bg-none"
            : "opacity-100 hover:bg-teal-700  hover:shadow-xl hover:-translate-y-1 transform "
        )}
        disabled={loading}
      >
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <>
            {children}
            <div className="bg-white/40 w-[10rem] h-[100%] rotate-[45deg] absolute -left-[100%] transition-all duration-[1000ms] group-hover:left-[100%]"></div>
          </>
        )}
      </button>
      {loading ? null : (
        <div
          className={cn(
            "size-full absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 -z-10 inline-block blur-[5px] rounded-md",
            glowCss
          )}
        ></div>
      )}
    </div>
  );
}

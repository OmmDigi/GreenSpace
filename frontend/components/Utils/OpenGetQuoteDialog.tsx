"use client";

import { setGetQuoteDialog } from "@/redux/slice/getQuoteDialogSlice";
import { IGetQuoteDialog } from "@/types";
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";

interface IProps extends IGetQuoteDialog {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function OpenGetQuoteDialog({
  isOpen,
  extraValue,
  children,
  className,
  onClick,
}: IProps) {
  const dispatch = useDispatch();
  return (
    <div
      className={className}
      onClick={(e) => {
        onClick?.(e);
        dispatch(setGetQuoteDialog({ isOpen, extraValue }));
      }}
    >
      {children}
    </div>
  );
}

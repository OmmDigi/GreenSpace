"use client";

import { setGalleryDialogInfo } from "@/redux/slice/customGalleryDialogSlice";
import { GalleryImage } from "@/types";
import { useDispatch } from "react-redux";

interface IProps {
  galleryItem: GalleryImage[];
  isOpen: boolean;
  initialIndex: number;
  children: React.ReactNode;
}

export default function HandleCustomGalleryDialog({
  galleryItem,
  isOpen,
  initialIndex,
  children,
}: IProps) {
  const dispatch = useDispatch();
  return (
    <span
      className="block"
      onClick={() => {
        dispatch(
          setGalleryDialogInfo({
            initialIndex: initialIndex,
            galleryItem: galleryItem,
            isOpen: isOpen,
          })
        );
      }}
    >
      {children}
    </span>
  );
}

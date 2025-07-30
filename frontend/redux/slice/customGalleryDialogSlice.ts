import { GalleryImage } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  galleryItem: GalleryImage[];
  isOpen: boolean;
  initialIndex: number;
}

const initialState: IInitialState = {
  galleryItem: [],
  isOpen: false,
  initialIndex: 0,
};

const customGalleryDialogSlice = createSlice({
  name: "Gallery Dialog Slice",
  initialState,
  reducers: {
    setGalleryDialogInfo: (state, action: PayloadAction<IInitialState>) =>
      action.payload,
  },
});

export const customGalleryDialogReducer = customGalleryDialogSlice.reducer;
export const { setGalleryDialogInfo } = customGalleryDialogSlice.actions;

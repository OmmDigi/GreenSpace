import { configureStore } from "@reduxjs/toolkit";
import { galleryDialogReducer } from "./slice/galleryDialogSlice";
import { getQuoteDialogReducer } from "./slice/getQuoteDialogSlice";
import { mobileMenuReducer } from "./slice/mobileMenuSlice";
import { customGalleryDialogReducer } from "./slice/customGalleryDialogSlice";

export const store = configureStore({
  reducer: {
    galleryDialogReducer: galleryDialogReducer,
    getQuoteDialogReducer: getQuoteDialogReducer,
    mobileMenuReducer: mobileMenuReducer,
    customGalleryDialogReducer: customGalleryDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

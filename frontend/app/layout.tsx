import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import OfferHeader from "@/components/header/OfferHeader";
import Header from "@/components/header/Header";
import Footer from "@/components/AiComponents/Footer";
import ReduxProvider from "@/redux/ReduxProvider";
import GetQuoteDialog from "@/components/Dialogs/AiDialogs/GetQuoteDialog";
// import AiHeaderHolder from "@/components/AiComponents/AiHeaderHolder";
import Slider from "@/components/Slider";
import React from "react";
import { CustomGalleryDialog } from "@/components/Dialogs/CustomGalleryDialog";
import FloatingButton from "@/components/FloatingButton";
import MobileBottomNav from "@/components/MobileBottomNav";

// const jostFont = Jost({
//   variable: "--font-jost",
//   subsets: ["latin"],
// });

const latoFont = Lato({
  variable: "--lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

// const libreCaslonFont = Libre_Caslon_Text({
//   variable: "--libre-caslon-text",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// ${jostFont.variable} ${libreCaslonFont.variable}

export const metadata: Metadata = {
  title: "Green Space Interior | Best Interior Designer In Kolkata",
  description: "Best Interior Designer In Kolkata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latoFont.variable} ${latoFont.className} antialiased mx-auto max-w-[1920px] max-sm:max-w-full max-sm:w-full overflow-x-hidden m-0 p-0`}
      >
        <ReduxProvider>
          <FloatingButton />
          <CustomGalleryDialog />
          <Slider />
          <GetQuoteDialog />
          <OfferHeader />
          {/* <AiHeaderHolder> */}
          <Header />
          {/* </AiHeaderHolder> */}
          <main className="w-full overflow-x-hidden">
            <React.Suspense>{children}</React.Suspense>
          </main>
          <Footer />
          <MobileBottomNav />
        </ReduxProvider>
      </body>
    </html>
  );
}

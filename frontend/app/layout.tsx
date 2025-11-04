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
import Head from "next/head";

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

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Green Space Interior",
  image: "https://greenspaceinterior.in/_next/image?url=%2Flogo.png&w=640&q=75",
  "@id": "",
  url: "http://www.greenspaceinterior.in/",
  telephone: "+9198366 77669",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Budge Budge Trunk Rd",
    addressLocality: "Gauripur, Maheshtala, Kolkata, West Bengal",
    postalCode: "700141",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.505184303440846,
    longitude: 88.26225644232765,
  },
  sameAs: [
    "https://www.facebook.com/greenspaceinterior2023",
    "https://www.instagram.com/greenspaceinterior23/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="-VcAOH4X9-z_-Lju-W6odJqcVQneTioAG_vFVvvNr7g"
        />

        <script
          type="application/ld+json"
          // Note: stringify converts JS object → valid JSON
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
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

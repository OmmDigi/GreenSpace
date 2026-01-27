import CustomLink from "@/components/CustomLink";
// import DesignGalleryDialog from "@/components/gallery/DesignGalleryDialog";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import { cn } from "@/utils/cn";
import { extractYouTubeThumbnail } from "@/utils/extractYouTubeThumbnail";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/constant";
import HandleCustomGalleryDialog from "@/components/Dialogs/HandleCustomGalleryDialog";

interface IProps {
  searchParams: Promise<{ category: string | undefined }>;
}

export default async function GalleryPage({ searchParams }: IProps) {
  let activeCategory = (await searchParams).category;

  if (!activeCategory) {
    activeCategory = SERVICES[0].id;
  }

  const filteredItems =
    PROJECTS.find((item) => item.service_id === activeCategory)?.projects || [];

  return (
    <>
      {/* <DesignGalleryDialog /> */}
      <main>
        <section className="wrapper pb-10">
          <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#00776e]">Design Gallery</span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore our collection of stunning interior designs that
                    showcase our commitment to creating beautiful, functional
                    spaces that reflect your unique style and personality.
                  </p>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-wrap justify-center gap-3 mb-8 max-sm:flex-nowrap max-sm:w-full max-sm:overflow-x-auto max-sm:justify-start max-sm:pb-6">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    className={cn(
                      "rounded-full text-sm font-medium transition-all duration-300 max-sm:shrink-0",
                      activeCategory === service.id
                        ? "bg-teal-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm border border-gray-200"
                    )}
                  >
                    <CustomLink
                      queryParams={true}
                      className="px-6 py-3"
                      href={`?category=${service.id}`}
                    >
                      {service.name}
                    </CustomLink>
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <HandleCustomGalleryDialog
                    key={item.id}
                    galleryItem={filteredItems.map((item) => ({
                      alt: item.title,
                      id: item.id,
                      src: item.image,
                      title: item.title,
                    }))}
                    isOpen={true}
                    initialIndex={index}
                  >
                    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={
                            item.type === "video" && item.video
                              ? extractYouTubeThumbnail(item.video, item.image)
                              : item.image
                          }
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 bg-[#00000056] bg-opacity-30 flex items-center justify-center">
                            <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                              <Play className="w-6 h-6" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        {/* <p className="text-gray-600 text-sm">
                          
                        </p> */}
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            {item.tag ?? "General"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </HandleCustomGalleryDialog>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">No items found</p>
                </div>
              )}
            </div>

            {/* <DesignGalleryPage /> */}

            {/* Call to Action */}
            <div className="bg-teal-600 py-16">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-teal-100 mb-8">
                  Let our expert designers create a beautiful and functional
                  space that reflects your unique style.
                </p>
                <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
                  <OpenGetQuoteDialog isOpen>
                    <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Get Free Consultation
                    </button>
                  </OpenGetQuoteDialog>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

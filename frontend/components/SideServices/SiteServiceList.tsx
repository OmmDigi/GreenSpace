import Image from "next/image";
import React from "react";

const SITE_SERVICES_ITEMS = [
  {
    id: "1",
    service: "FALSE CEILING",
    image: "/site-service/FALSECEILING.png",
    points: [
      "Gypsum horizontal panel supply",
      "Installation of gypsum ceiling",
      "Vertical panel with cove and more!",
    ],
  },
  {
    id: "2",
    service: "ELECTRICAL SERVICES",
    image: "/site-service/ELECTRICALSERVICES.png",
    points: [
      "Creating new boards from existing boards",
      "Shifting electrical boards",
      "TV & telephone point",
      "Light, Fan, AC installation and more!",
    ],
  },
  {
    id: "3",
    service: "CIVIL SERVICES",
    image: "/site-service/CIVILSERVICES.png",
    points: [
      "Kitchen & wall demolition",
      "Demolition and installation of new floor tiles",
      "Debris removal",
      "Creation of new wall and more!",
    ],
  },
  {
    id: "4",
    service: "PAINTING",
    image: "/site-service/PAINTING.png",
    points: [
      "Premium wall painting",
      "POP Punning",
      "Celling painting",
      "Texture paint and more",
    ],
  },
  {
    id: "5",
    service: "SHOWER PARTITION",
    image: "/site-service/SHOWERPARTITION.png",
    points: [
      "Source the right glass shower partition",
      "Install the partition in your bathroom",
    ],
  },
  {
    id: "6",
    service: "FURNITURE",
    image: "/site-service/furniture.svg",
    points: [
      "Custom wardrobes and modular storage",
      "Modular kitchen units and cabinets",
      "TV units, study tables, and bookshelves",
      "Bed frames, side tables, and more!"
    ],
  },
];

export default function SiteServiceList() {
  return (
    <div className="wrapper mt-16">
      <h2 className="text-2xl text-center font-bold text-gray-900 mb-4">
        — Our Site Services Cover Every Need You Can Think Of —
      </h2>

      <ul className="grid grid-cols-3 gap-10 flex-wrap mt-16 max-sm:grid-cols-1">
        {SITE_SERVICES_ITEMS.map((service) => (
          <li
            key={service.id}
            className="flex items-center justify-center rounded-2xl flex-col gap-3.5 shadow-md border border-gray-400 p-7"
          >
            <Image
              className="w-[6rem]"
              src={service.image}
              alt={service.service}
              height={1080}
              width={1080}
            />

            <h2 className="font-semibold">{service.service}</h2>

            <ul className="text-gray-600 space-y-2">
              {service.points.map((item, index) => (
                <li key={index} className="flex items-center gap-3.5">
                  <Image
                    className="w-3.5"
                    src={index % 2 === 0 ? "/pointIconBlue.png" : "/pointIconPink.png"}
                    alt="Point Icon Blue"
                    height={80}
                    width={80}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

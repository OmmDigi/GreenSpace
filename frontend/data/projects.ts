export interface IProjects {
  id: string;
  type: "image" | "video";
  image: string;
  service_id: string;
  tag?: string[];
  title: string;
  video?: string;
}

const kitchen = Array.from({ length: 9 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/modular-kitchen-designs/${id}.webp`,
    service_id: "modular-kitchen-designs",
    tag: ["Modular Kitchen", ...(index === 0 ? ["Completed Project"] : [])],
    title: "Modular Kitchen Design",
  } as IProjects;
});

const livingRoom = Array.from({ length: 24 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/living-room-designs/${id}.webp`,
    service_id: "living-room-designs",
    tag: ["Living Room", ...(index === 0 ? ["Completed Project"] : [])],
    title: "Living Room Design",
  } as IProjects;
});

const badRoom = Array.from({ length: 12 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/bedroom-designs/${id}.webp`,
    service_id: "bedroom-designs",
    tag: ["Bedroom Design", ...(index === 0 ? ["Completed Project"] : [])],
    title: "Bedroom Design",
  } as IProjects;
});

const wardrobe = Array.from({ length: 12 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/wardrobe-designs/${id}.webp`,
    service_id: "wardrobe-designs",
    tag: ["Wardrobe Designs", ...(index === 0 ? ["Completed Project"] : [])],
    title: "Wardrobe Design",
  } as IProjects;
});

const diningRoom = Array.from({ length: 9 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/dining-room-designs/${id}.webp`,
    service_id: "dining-room-designs",
    tag: ["Dining Room", ...(index === 0 ? ["Completed Project"] : [])],
    title: "Dining Room Designs",
  } as IProjects;
});

const poojaRoom = Array.from({ length: 9 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/pooja-room-designs/${id}.webp`,
    service_id: "pooja-room-designs",
    tag: ["Pooja Room", ...(index === 0 ? ["Completed Project"] : [])],
    title: "Pooja Room Designs",
  } as IProjects;
});

const bhk1 = Array.from({ length: 1 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/1bhk-designs/${id}.webp`,
    service_id: "1bhk-designs",
    tag: ["1 BHK Designs", ...(index === 0 ? ["Completed Project"] : [])],
    title: "1 BHK Designs",
  } as IProjects;
});

const bhk2 = Array.from({ length: 1 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/2bhk-designs/${id}.webp`,
    service_id: "2bhk-designs",
    tag: ["2 BHK Designs", ...(index === 0 ? ["Completed Project"] : [])],
    title: "2 BHK Designs",
  } as IProjects;
});

const bhk3 = Array.from({ length: 1 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/3bhk-designs/${id}.webp`,
    service_id: "2bhk-designs",
    tag: ["3 BHK Designs", ...(index === 0 ? ["Completed Project"] : [])],
    title: "3 BHK Designs",
  } as IProjects;
});

const bathroomDesigns = Array.from({ length: 3 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/bathroom-designs/${id}.webp`,
    service_id: "bathroom-designs",
    tag: ["Bathroom Designs", ...(index === 0 ? ["Completed Project"] : [])],
    title: "Bathroom Designs",
  } as IProjects;
});

const kidsBadroomDesings = Array.from({ length: 9 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/kids-badroom-designs/${id}.webp`,
    service_id: "kids-badroom-designs",
    tag: [
      "Kids Badroom Designs",
      ...(index === 0 ? ["Completed Project"] : []),
    ],
    title: "Kids Badroom Designs",
  } as IProjects;
});

// const mosquitoSlidingNets = Array.from({ length: 0 }, (_) => {
//   // const id = (index + 1).toString();
//   return {} as IProjects;
//   // return {
//   //   id,
//   //   type: "image",
//   //   image: `/Projects/pooja-room-designs/${id}.webp`,
//   //   service_id: "pooja-room-designs",
//   //   tag: [
//   //     "Pooja Room",
//   //     ...(index === 1 || index === 2 ? ["Completed Project"] : []),
//   //   ],
//   //   title: "Pooja Room Designs",
//   // } as IProjects;
// });

export const PROJECTS: { service_id: string; projects: IProjects[] }[] = [
  {
    service_id: "modular-kitchen-designs",
    projects: kitchen,
  },

  {
    service_id: "living-room-designs",
    projects: livingRoom,
  },

  {
    service_id: "bedroom-designs",
    projects: badRoom,
  },

  {
    service_id: "wardrobe-designs",
    projects: wardrobe,
  },

  {
    service_id: "dining-room-designs",
    projects: diningRoom,
  },
  {
    service_id: "pooja-room-designs",
    projects: poojaRoom,
  },
  {
    service_id: "1bhk-designs",
    projects: bhk1,
  },
  {
    service_id: "2bhk-designs",
    projects: bhk2,
  },
  {
    service_id: "3bhk-designs",
    projects: bhk3,
  },
  {
    service_id: "mosquito-sliding-nets",
    projects: [],
  },
  {
    service_id: "bathroom-designs",
    projects: bathroomDesigns,
  },
  {
    service_id: "kids-badroom-designs",
    projects: kidsBadroomDesings,
  },
];

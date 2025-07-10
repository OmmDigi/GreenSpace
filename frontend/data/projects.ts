export interface IProjects {
  id: string;
  type: "image" | "video";
  image: string;
  service_id: string;
  tag?: string[];
  title: string;
  video?: string;
}

const kitchen = Array.from({ length: 37 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/modular-kitchen-designs/${id}.webp`,
    service_id: "modular-kitchen-designs",
    tag: [
      "Modular Kitchen",
      ...(index === 12 || index === 5 ? ["Completed Project"] : []),
    ],
    title: "Modular Kitchen Design",
  } as IProjects;
});

const livingRoom = Array.from({ length: 2 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/living-room-designs/${id}.webp`,
    service_id: "living-room-designs",
    tag: [
      "Living Room",
      ...(index === 6 || index === 1 ? ["Completed Project"] : []),
    ],
    title: "Living Room Design",
  } as IProjects;
});

const badRoom = Array.from({ length: 8 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/bedroom-designs/${id}.webp`,
    service_id: "bedroom-designs",
    tag: [
      "Bedroom Design",
      ...(index === 1 || index === 0 ? ["Completed Project"] : []),
    ],
    title: "Bedroom Design",
  } as IProjects;
});

const wardrobe = Array.from({ length: 60 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/wardrobe-designs/${id}.webp`,
    service_id: "wardrobe-designs",
    tag: [
      "Wardrobe Designs",
      ...(index === 5 || index === 4 ? ["Completed Project"] : []),
    ],
    title: "Wardrobe Design",
  } as IProjects;
});

const diningRoom = Array.from({ length: 2 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/dining-room-designs/${id}.webp`,
    service_id: "dining-room-designs",
    tag: [
      "Dining Room",
      ...(index === 3 || index === 2 ? ["Completed Project"] : []),
    ],
    title: "Dining Room Designs",
  } as IProjects;
});

const poojaRoom = Array.from({ length: 35 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/pooja-room-designs/${id}.webp`,
    service_id: "pooja-room-designs",
    tag: [
      "Pooja Room",
      ...(index === 1 || index === 2 ? ["Completed Project"] : []),
    ],
    title: "Pooja Room Designs",
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
    service_id: "mosquito-sliding-nets",
    projects: [],
  },
  {
    service_id: "mosquito-sliding-nets",
    projects: [],
  },
];

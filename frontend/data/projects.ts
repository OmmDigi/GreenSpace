export interface IProjects {
  id: string;
  type: "image" | "video";
  image: string;
  service_id: string;
  tag?: string;
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
    tag: "Modular Kitchen",
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
    tag: "Living Room",
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
    tag: "Bedroom Design",
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
    tag: "Wardrobe Designs",
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
    tag: "Dining Room",
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
    tag: "Pooja Room",
    title: "Pooja Room Designs",
  } as IProjects;
});

const completedProjects = Array.from({ length: 50 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/completed-projects/${id}.webp`,
    service_id: "completed-projects",
    tag: "Completed Project",
    title: "Completed Project",
  } as IProjects;
});

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
    service_id: "completed-projects",
    projects: completedProjects,
  },
];

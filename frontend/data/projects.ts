import { ICompeltedProjects } from "@/types";
import { string } from "zod/v4";

export interface IProjects {
  id: string;
  type: "image" | "video";
  image: string;
  service_id: string;
  tag?: string[];
  title: string;
  video?: string;
}

const bagha_jatin_1_bhk = Array.from({ length: 4 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/bagha_jatin_1_bhk/${id}.jpg`,
    alt: "",
  };
});

const bansdroni_1_bhk = Array.from({ length: 4 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/bansdroni_1_bhk/${id}.jpg`,
    alt: "",
  };
});

const baruipur_1_bhk = Array.from({ length: 9 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/baruipur_1_bhk/${id}.jpg`,
    alt: "",
  };
});

const joka_1_bhk = Array.from({ length: 8 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/joka_1_bhk/${id}.jpg`,
    alt: "",
  };
});

const lake_town_1_bhk = Array.from({ length: 7 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/lake_town_1_bhk/${id}.jpg`,
    alt: "",
  };
});

const mukundopur_1_bhk = Array.from({ length: 5 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/mukundopur_1_bhk/${id}.jpg`,
    alt: "",
  };
});

const naktala_1_bhk = Array.from({ length: 4 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/naktala_1_bhk/${id}.jpg`,
    alt: "",
  };
});

const ultadanga_1_bhk = Array.from({ length: 6 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/1bhk_complete_project/ultadanga_1_bhk/${id}.jpg`,
    alt: "",
  };
});

//2bhk
const alipore_2bhk = Array.from({ length: 9 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/alipore_2bhk/${id}.jpg`,
    alt: "",
  };
});

const garia_2bhk = Array.from({ length: 6 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/garia_2bhk/${id}.jpg`,
    alt: "",
  };
});

const gariahat_2bhk = Array.from({ length: 11 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/gariahat_2bhk/${id}.jpg`,
    alt: "",
  };
});

const hazra_landtown_2bhk = Array.from({ length: 4 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/hazra_landtown_2bhk/${id}.jpg`,
    alt: "",
  };
});

const howrah_2_bhk = Array.from({ length: 5 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/howrah_2_bhk/${id}.jpg`,
    alt: "",
  };
});

const kankurgachi_2bhk = Array.from({ length: 5 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/kankurgachi_2bhk/${id}.jpg`,
    alt: "",
  };
});

const lake_gardens_lake_road_2_bhk = Array.from({ length: 21 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/lake_gardens_lake_road_2_bhk/${id}.jpg`,
    alt: "",
  };
});

const maheshtala_2bhk = Array.from({ length: 7 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/maheshtala_2bhk/${id}.jpg`,
    alt: "",
  };
});

const saltlake_2bhk = Array.from({ length: 7 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/saltlake_2bhk/${id}.jpg`,
    alt: "",
  };
});

const sealdah_2bhk = Array.from({ length: 5 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/2bhk_complete_project/sealdah_2bhk/${id}.jpg`,
    alt: "",
  };
});

// 3bhk
const behala_3bhk = Array.from({ length: 6 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/behala_3bhk/${id}.jpg`,
    alt: "",
  };
});

const chingrighata_3bhk = Array.from({ length: 8 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/chingrighata_3bhk/${id}.jpg`,
    alt: "",
  };
});

const jodhpur_3bhk = Array.from({ length: 16 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/jodhpur_3bhk/${id}.jpg`,
    alt: "",
  };
});

const joka_3bhk = Array.from({ length: 5 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/joka_3bhk/${id}.jpg`,
    alt: "",
  };
});

const kasba_3bhk = Array.from({ length: 13 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/kasba_3bhk/${id}.jpg`,
    alt: "",
  };
});

const khidirpor_3bhk = Array.from({ length: 10 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/khidirpor_3bhk/${id}.jpg`,
    alt: "",
  };
});

const lenin_saroni_3_bhk = Array.from({ length: 9 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/lenin_saroni_3_bhk/${id}.jpg`,
    alt: "",
  };
});

const tollygaunge_3bhk = Array.from({ length: 6 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/3bhk_complete_project/tollygaunge_3bhk/${id}.jpg`,
    alt: "",
  };
});

//Bathroom Design
const bathroom_design = Array.from({ length: 12 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/bathroom_design/${id}.jpg`,
    alt: "",
  };
});

const parlour_design = Array.from({ length: 23 }, (_, index) => {
  const id = (index + 1).toString();

  return {
    src: `/Projects/completed/parlour_design/${id}.jpg`,
    alt: "",
  };
});

export const COMPLETED_PROJECTS: ICompeltedProjects[] = [
  {
    service_id: "1bhk-designs",
    title: "Baghajatin 1bhk Complete Project",
    images: bagha_jatin_1_bhk,
  },
  {
    service_id: "1bhk-designs",
    title: "Bansdroni 1bhk Completed Project",
    images: bansdroni_1_bhk,
  },
  {
    service_id: "1bhk-designs",
    title: "Baruipur 1bhk Completed Project",
    images: baruipur_1_bhk,
  },
  {
    service_id: "1bhk-designs",
    title: "Joka 1bhk Completed Project",
    images: joka_1_bhk,
  },
  {
    service_id: "1bhk-designs",
    title: "Lake Town 1bhk Completed Project",
    images: lake_town_1_bhk,
  },

  {
    service_id: "1bhk-designs",
    title: "Mukundopur 1bhk Completed Project",
    images: mukundopur_1_bhk,
  },

  {
    service_id: "1bhk-designs",
    title: "Naktala 1bhk Completed Project",
    images: naktala_1_bhk,
  },

  {
    service_id: "1bhk-designs",
    title: "Ultadanga 1bhk Completed Project",
    images: ultadanga_1_bhk,
  },

  // 2bhk start
  {
    service_id: "2bhk-designs",
    title: "Alipore 2bhk Complete Project",
    images: alipore_2bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Garia 2bhk Complete Project",
    images: garia_2bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Gariahat 2bhk Complete Project",
    images: gariahat_2bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Hazra Landtown 2bhk Complete Project",
    images: hazra_landtown_2bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Howrah 2bhk Complete Project",
    images: howrah_2_bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Kankurgachi 2bhk Complete Project",
    images: kankurgachi_2bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Lake Gardens 2bhk Complete Project",
    images: lake_gardens_lake_road_2_bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Maheshtala 2bhk Complete Project",
    images: maheshtala_2bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Saltlake 2bhk Complete Project",
    images: saltlake_2bhk,
  },

  {
    service_id: "2bhk-designs",
    title: "Sealdah 2bhk Complete Project",
    images: sealdah_2bhk,
  },

  // 3bhk
  {
    service_id: "3bhk-designs",
    title: "Behala 3bhk Complete Project",
    images: behala_3bhk,
  },
  {
    service_id: "3bhk-designs",
    title: "Chingrighata 3bhk Complete Project",
    images: chingrighata_3bhk,
  },

  {
    service_id: "3bhk-designs",
    title: "Jodhpur 3bhk Complete Project",
    images: jodhpur_3bhk,
  },

  {
    service_id: "3bhk-designs",
    title: "Joka 3bhk Complete Project",
    images: joka_3bhk,
  },
  {
    service_id: "3bhk-designs",
    title: "Kasba 3bhk Complete Project",
    images: kasba_3bhk,
  },

  {
    service_id: "3bhk-designs",
    title: "Khidirpor 3bhk Complete Project",
    images: khidirpor_3bhk,
  },

  {
    service_id: "3bhk-designs",
    title: "Lenin Saroni 3bhk Complete Project",
    images: lenin_saroni_3_bhk,
  },

  {
    service_id: "3bhk-designs",
    title: "Tollygaunge Saroni 3bhk Complete Project",
    images: tollygaunge_3bhk,
  },

  //bathroom design
  {
    service_id: "bathroom-designs",
    title: "Bathroom Design",
    images: bathroom_design,
  },

  //Parlour Design
  {
    service_id: "parlour-design",
    title: "Parlour Design",
    images: parlour_design,
  },
];

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

COMPLETED_PROJECTS.forEach((projectinfo, pIndex) => {
  if (projectinfo.service_id === "1bhk-designs") {
    projectinfo.images.forEach((item, index) => {
      bhk1.push({
        id: `1bhk${pIndex}${index}`,
        image: item.src,
        service_id: projectinfo.service_id,
        type: "image",
        title: projectinfo.title,
      });
    });
  } else if (projectinfo.service_id === "2bhk-designs") {
    projectinfo.images.forEach((item, index) => {
      bhk1.push({
        id: `2bhk${index + 1}`,
        image: item.src,
        service_id: projectinfo.service_id,
        type: "image",
        title: projectinfo.title,
      });
    });
  } else if (projectinfo.service_id === "3bhk-designs") {
    projectinfo.images.forEach((item, index) => {
      bhk1.push({
        id: `3bhk${index + 1}`,
        image: item.src,
        service_id: projectinfo.service_id,
        type: "image",
        title: projectinfo.title,
      });
    });
  } else if (projectinfo.service_id === "bathroom-designs") {
    projectinfo.images.forEach((item, index) => {
      bhk1.push({
        id: `bathroom${index + 1}`,
        image: item.src,
        service_id: projectinfo.service_id,
        type: "image",
        title: projectinfo.title,
      });
    });
  }
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

const mosquitoSlidingNets = Array.from({ length: 5 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/mosquito-sliding-nets/${id}.png`,
    service_id: "mosquito-sliding-nets",
    tag: ["Mosquito Sliding Nets"],
    title: "Mosquito Sliding Nets",
  } as IProjects;
});

const upvcDoorWindow = Array.from({ length: 7 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/upvc-doors-windows/${id}.jpg`,
    service_id: "upvc-doors-windows",
    tag: ["Upvc Door Window"],
    title: "Upvc Door Window",
  } as IProjects;
});

const invisibleGrills = Array.from({ length: 5 }, (_, index) => {
  const id = (index + 1).toString();
  return {
    id,
    type: "image",
    image: `/Projects/invisible-grills/${id}.png`,
    service_id: "invisible-grills",
    tag: ["Invisible Grills"],
    title: "Invisible Grills",
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
    projects: mosquitoSlidingNets,
  },
  {
    service_id: "bathroom-designs",
    projects: bathroomDesigns,
  },
  {
    service_id: "kids-badroom-designs",
    projects: kidsBadroomDesings,
  },
  {
    service_id: "upvc-doors-windows",
    projects: upvcDoorWindow,
  },
  {
    service_id: "invisible-grills",
    projects: invisibleGrills,
  },
];

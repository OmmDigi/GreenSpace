import { Category, GalleryItem, INav } from "./types";

export const OFFER_LISTS = [
  {
    id: "1",
    content: `FLAT 25% OFF on Modular Interiors. Hurry, Book Before 31st May 2025! <a style = "text-decoration: underline;" href = '/'>Get Offer</a>`,
  },
  {
    id: "2",
    content: `2 FLAT 25% OFF on Modular Interiors. Hurry, Book Before 31st May 2025! <a href = '/' style = "text-decoration: underline;">Get Offer</a>`,
  },
];

export const SERVICES = [
  {
    id: "modular-kitchen-designs",
    name: "Modular Kitchen Designs",
    image: "/Services/ModularKitchenDesigns.webp",

    singlePageInfo: {
      heading: "Modular Kitchen Design",
      fetcherImage: "/Services/ModularKitchenDesigns.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Transform Your Cooking Space with Green Space’s Elegant Modular Kitchen Creations
        </p>
        <br />
        <p>
          Green Space, one of the renowned interior designers in Kolkata, redefines cooking spaces with elegant and functional modular kitchen designs. Crafted for style and efficiency, each layout blends smart storage, premium finishes, and ergonomic design. Whether you prefer a sleek contemporary look or a warm traditional feel, Green Space turns your culinary zone into a masterpiece. Experience innovation, beauty, and practicality—only with Green Space's expert modular kitchen solutions.
        </p>
      `,
    },
  },
  {
    id: "living-room-designs",
    name: "Living Room Designs",
    image: "/Services/LivingRoom.webp",

    singlePageInfo: {
      heading: "Living Room Designs",
      fetcherImage: "/Services/LivingRoom.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Breathe Life into Your Home with Green Space’s Signature Living Room Designs
        </p>
        <br />
        <p>
          Create a space that speaks style and comfort with Green Space—the best interior designer in Kolkata. Their living room designs blend aesthetics with functionality, featuring modern layouts, elegant textures, and smart space utilization. Whether you love minimal chic or cozy luxe, Green Space transforms ordinary rooms into inviting retreats. Let your living room reflect your personality with designs crafted to inspire conversation and comfort—only with Green Space.
        </p>
      `,
    },
  },
  {
    id: "bedroom-designs",
    name: "Bedroom Designs",
    image: "/Services/BadRoom.webp",

    singlePageInfo: {
      heading: "Bedroom Design",
      fetcherImage: "/Services/BadRoom.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Dream in Style with Green Space’s Exquisite Bedroom Designs
        </p>
        <br />
        <p>
         Turn your bedroom into a serene sanctuary with Green Space, the best interior designer in Kolkata. Their bedroom designs blend comfort, elegance, and smart functionality to create personalized spaces that promote rest and relaxation. From cozy textures to modern aesthetics and clever storage, every element is thoughtfully crafted. Experience the perfect harmony of beauty and comfort—because your dream space begins with Green Space’s expert bedroom design solutions.
        </p>
      `,
    },
  },
  {
    id: "kids-badroom-designs",
    name: "Kids Bedroom Designs",
    image: "/Services/KidsBadroom.webp",

    singlePageInfo: {
      heading: "Kids Bedroom Designs",
      fetcherImage: "/Services/KidsBadroom.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Playful Meets Practical in Green Space’s Delightful Kids Bedroom Designs
        </p>
        <br />
        <p>
         Make your child’s room a world of imagination with Green Space, the best interior designer in Kolkata. Their kids' bedroom designs combine vibrant colors, fun themes, and smart storage to create safe, engaging, and functional spaces. Every design is tailored to spark creativity and support growth. From study corners to cozy beds, Green Space crafts rooms your child will love to live and grow in. Childhood dreams start here!
        </p>
      `,
    },
  },
  {
    id: "wardrobe-designs",
    name: "Wardrobe Designs",
    image: "/Services/WardrobeDesign.webp",

    singlePageInfo: {
      heading: "Wardrobe Design",
      fetcherImage: "/Services/WardrobeDesign.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Smart. Stylish. Space-Saving – Green Space’s Custom Wardrobe Designs
        </p>
        <br />
        <p>
         Organize in style with Green Space, the best interior designer in Kolkata, known for their sleek and functional wardrobe designs. Whether it's sliding doors, walk-in closets, or compact wardrobes, each piece is crafted to maximize space while elevating your room’s aesthetics. Blending smart storage solutions with premium finishes, Green Space creates wardrobes that are as beautiful as they are practical. Upgrade your storage—upgrade your lifestyle with Green Space.
        </p>
      `,
    },
  },
  {
    id: "dining-room-designs",
    name: "Dining Room Designs",
    image: "/Services/DiningRoom.webp",

    singlePageInfo: {
      heading: "Dining Room design",
      fetcherImage: "/Services/DiningRoom.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Dine in Elegance with Green Space’s Bespoke Dining Room Designs
        </p>
        <br />
        <p>
         Make every meal memorable with Green Space, the best interior designer in Kolkata, celebrated for their stunning dining room designs. From cozy family setups to luxurious formal spaces, each design balances comfort, sophistication, and functionality. With curated lighting, elegant furniture, and thoughtful layouts, Green Space transforms dining areas into inviting hubs for connection and celebration. Experience dining like never before—with style that speaks and comfort that lasts.
        </p>
      `,
    },
  },
  {
    id: "pooja-room-designs",
    name: "Pooja Room Designs",
    image: "/Services/PoojaRoom.webp",

    singlePageInfo: {
      heading: "Dining Room design",
      fetcherImage: "/Services/PoojaRoom.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Create a Divine Corner with Green Space’s Serene Pooja Room Designs
        </p>
        <br />
        <p>
         Bring peace and positivity into your home with Green Space, the best interior designer in Kolkata, known for their tranquil and beautifully crafted pooja room designs. Blending traditional elements with modern aesthetics, their designs offer spiritual elegance and thoughtful space utilization. From compact corners to elaborate sanctuaries, Green Space ensures your pooja space reflects devotion and harmony. Make room for divinity—gracefully designed by Green Space.
        </p>
      `,
    },
  },
  {
    id: "space-saving-designs",
    name: "Space Saving Designs",
    image: "/Services/SpaceSaving.webp",
    singlePageInfo: {
      heading: "Space-saving Designs",
      fetcherImage: "/Services/SpaceSaving.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Maximize Every Inch with Green Space’s Innovative Space-Saving Designs
        </p>
        <br />
        <p>
         Live smarter with Green Space, the best interior designer in Kolkata, specializing in clever space-saving designs that blend style with utility. From foldable furniture to hidden storage and multifunctional layouts, every solution is crafted to enhance compact living without compromising elegance. Perfect for urban homes, these designs transform tight spaces into comfortable, clutter-free zones. Experience intelligent interiors that do more with less—only with Green Space.
        </p>
      `,
    },
  },
  {
    id: "bathroom-designs",
    name: "Bathroom Designs",
    image: "/Services/BathRoom.webp",
    singlePageInfo: {
      heading: "Bathroom Design",
      fetcherImage: "/Services/BathRoom.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Refresh and Rejuvenate with Green Space’s Luxurious Bathroom Designs
        </p>
        <br />
        <p>
         Turn your bathroom into a personal retreat with Green Space, the best interior designer in Kolkata, known for creating elegant and functional bathroom spaces. From modern minimalism to spa-like luxury, each design blends premium fittings, smart layouts, and soothing aesthetics. Whether compact or spacious, Green Space ensures your bathroom offers comfort, style, and efficiency. Start and end your day in a space that truly refreshes—with Green Space’s expert bathroom designs.
        </p>
      `,
    },
  },
  {
    id: "balcony-designs",
    name: "Balcony Designs",
    image: "/Services/Balcony.webp",
    singlePageInfo: {
      heading: "Balcony Designs",
      fetcherImage: "/Services/Balcony.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Transform Your Balcony into a Blissful Escape with Green Space’s Thoughtful Designs
        </p>
        <br />
        <p>
         Breathe new life into your balcony with Green Space, the best interior designer in Kolkata, renowned for creating beautiful and functional balcony designs. Whether it’s a cozy reading nook, a green oasis, or a chic lounging area, each design maximizes space and enhances your lifestyle. With stylish furniture, lighting, and greenery, Green Space turns ordinary balconies into personal retreats. Discover outdoor charm right at home—with Green Space’s balcony design magic.
        </p>
      `,
    },
  },
  {
    id: "1bhk-designs",
    name: "1 BHK Designs",
    image: "/Services/1BhK.webp",

    singlePageInfo: {
      heading: "1 BHK Designs",
      fetcherImage: "/Services/1BhK.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Style Meets Function in Green Space’s Smart 1 BHK Designs
        </p>
        <br />
        <p>
         Make the most of your 1 BHK with Green Space, the best interior designer in Kolkata, known for transforming compact spaces into stylish, functional homes. Their intelligent layouts, space-saving furniture, and modern aesthetics ensure every corner works beautifully. From cozy bedrooms to efficient kitchens and elegant living areas, Green Space maximizes comfort without compromise. Experience how thoughtful design can elevate small spaces—only with Green Space’s expert 1 BHK solutions.
        </p>
      `,
    },
  },
  {
    id: "2bhk-designs",
    name: "2 BHK Designs",
    image: "/Services/2BhK.webp",
    singlePageInfo: {
      heading: "2 BHK Designs",
      fetcherImage: "/Services/2BhK.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Perfect Harmony of Space and Style in Green Space’s 2 BHK Flat Designs
        </p>
        <br />
        <p>
         Green Space, the best interior designer in Kolkata, brings life to your 2 BHK flat with designs that balance elegance, comfort, and functionality. From chic living rooms and serene bedrooms to modern kitchens and smart storage, every inch is crafted with precision. Their personalized approach ensures your space reflects your taste while maximizing utility. Redefine modern living with Green Space’s thoughtfully designed 2 BHK interiors—where every detail speaks of style.
        </p>
      `,
    },
  },
  {
    id: "3bhk-designs",
    name: "3 BHK Designs",
    image: "/Services/3bhk.webp",
    singlePageInfo: {
      heading: "3 BHK Designs",
      fetcherImage: "/Services/3bhk.webp",
      fetcherVideo: null,
      priceStarting: "₹2,50,000",
      description: `
        <p>
          Luxury Redefined with Green Space’s Elegant 3 BHK Flat Designs
        </p>
        <br />
        <p>
         Experience spacious living like never before with Green Space, the best interior designer in Kolkata, known for crafting stunning 3 BHK flat designs. From grand living areas and cozy bedrooms to stylish kitchens and serene balconies, every space is designed to reflect sophistication and comfort. With attention to detail and seamless functionality, Green Space turns your 3 BHK into a luxurious haven tailored to your lifestyle and taste.
        </p>
      `,
    },
  },
];

export const NAV_ITEMS: INav[] = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "Design Gallery",
    slug: "/design-gallery",
    // submenu: [
    //   {
    //     id: "modular-kitchen-designs",
    //     name: "Modular Kitchen Designs",
    //     slug: "/design-gallery?type=modular-kitchen-designs",
    //   },
    //   {
    //     id: "living-room-designs",
    //     name: "Living Room Designs",
    //     slug: "/design-gallery?type=living-room-designs",
    //   },
    //   {
    //     id: "bedroom-designs",
    //     name: "Bedroom Designs",
    //     slug: "/design-gallery?type=bedroom-designs",
    //   },
    //   {
    //     id: "kids-badroom-designs",
    //     name: "Kids Bedroom Designs",
    //     slug: "/design-gallery?type=kids-badroom-designs",
    //   },
    //   {
    //     id: "wardrobe-designs",
    //     name: "Wardrobe Designs",
    //     slug: "/design-gallery?type=wardrobe-designs",
    //   },
    //   {
    //     id: "dining-room-designs",
    //     name: "Dining Room Designs",
    //     slug: "/design-gallery?type=dining-room-designs",
    //   },
    //   {
    //     id: "pooja-room-designs",
    //     name: "Pooja Room Designs",
    //     slug: "/design-gallery?type=pooja-room-designs",
    //   },
    //   {
    //     id: "space-saving-designs",
    //     name: "Space Saving Designs",
    //     slug: "/design-gallery?type=space-saving-designs",
    //   },
    //   {
    //     id: "bathroom-designs",
    //     name: "Bathroom Designs",
    //     slug: "/design-gallery?type=bathroom-designs",
    //   },

    //   {
    //     id: "balcony-designs",
    //     name: "Balcony Designs",
    //     slug: "/design-gallery?type=balcony-designs",
    //   },
    //   {
    //     id: "1bhk-designs",
    //     name: "1 BHK Designs",
    //     slug: "/design-gallery?type=1bhk-designs",
    //   },
    //   {
    //     id: "2bhk-designs",
    //     name: "2 BHK Designs",
    //     slug: "/design-gallery?type=2bhk-designs",
    //   },
    //   {
    //     id: "3bhk-designs",
    //     name: "3 BHK Designs",
    //     slug: "/design-gallery?type=3bhk-designs",
    //   },
    // ],
    submenu: SERVICES.map((item) => ({
      id: item.id,
      name: item.name,
      slug: `/design-gallery?type=${item.id}`,
    })),
  },
  {
    id: 9,
    name: "About",
    slug: "/about-us",
  },
  // {
  //   id: 3,
  //   name: "Our Projects",
  //   slug: "/our-projects",
  // },
  {
    id: 4,
    name: "Customized Kitchen",
    slug: "/customize-kitchens",
  },
  {
    id: 5,
    name: "Site Services",
    slug: "/site-services",
  },
  // {
  //   id: 6,
  //   name: "FAQ",
  //   slug: "#",
  // },
  // {
  //   id: 7,
  //   name: "Blog",
  //   slug: "#",
  // },
  // {
  //   id: 8,
  //   name: "Contact",
  //   slug: "#",
  // },
  // {
  //   id: 9,
  //   name: "More",
  //   slug: "#",
  // },
];

export const BANNER_ITEMS = [
  {
    id: "1",
    heading: "Modern Elegance for Every Corner",
    subheading:
      "Transform your 2 BHK with sleek, stylish interiors that reflect your unique taste and lifestyle.",
    bannerImage: "/banners/4.png",
  },
  {
    id: "2",
    heading: "Smart Spaces, Stunning Designs",
    subheading:
      "Maximize every inch of your home with creative layouts and multifunctional furniture tailored for compact living.",
    bannerImage: "/banners/3.png",
  },
];

// export const categories: Category[] = [
//   { id: "all", name: "All Items", count: galleryItems.length },
//   {
//     id: "living-room",
//     name: "Living Room",
//     count: galleryItems.filter((item) => item.category === "living-room")
//       .length,
//   },
//   {
//     id: "bedroom",
//     name: "Bedroom",
//     count: galleryItems.filter((item) => item.category === "bedroom").length,
//   },
//   {
//     id: "kitchen",
//     name: "Kitchen",
//     count: galleryItems.filter((item) => item.category === "kitchen").length,
//   },
//   {
//     id: "bathroom",
//     name: "Bathroom",
//     count: galleryItems.filter((item) => item.category === "bathroom").length,
//   },
//   {
//     id: "dining-room",
//     name: "Dining Room",
//     count: galleryItems.filter((item) => item.category === "dining-room")
//       .length,
//   },
//   {
//     id: "office",
//     name: "Office",
//     count: galleryItems.filter((item) => item.category === "office").length,
//   },
// ];

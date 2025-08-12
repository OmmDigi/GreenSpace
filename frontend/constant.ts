import { INav } from "./types";

export const OFFER_LISTS = [
  {
    id: "1",
    content: `FLAT 25% OFF on Modular Interiors. Hurry, Book Before 31st Oct 2025! <span style = "text-decoration: underline;" href = '/'>Get Offer</span>`,
  },
  {
    id: "2",
    content: `2 FLAT 25% OFF on Modular Interiors. Hurry, Book Before 31st Oct 2025! <span style = "text-decoration: underline;">Get Offer</span>`,
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
      priceStarting: "₹1.49 Lakh (Price for essential)",
      description: `
        <p>
          Transform Your Cooking Space with Green Space Interior’s Elegant Modular Kitchen Creations
        </p>
        <br />
        <p>
          Your kitchen is more than just a place to cook. It is where you start your day, share meals and create memories with family and friends. At Green Space Interior, we make sure your kitchen feels right for you, stylish, practical and comfortable for daily use.
        </p>
        <br />
        <p>
          We plan smart storage, quality finishes and layouts that make moving around easy so that every moment in your kitchen feels better. Whether you love a modern clean look or prefer something warm and classic, we design it to match your taste and fit your space perfectly.
        </p>
        <br />
        <p>
          Let’s make your kitchen the heart of your home, just the way you have always wanted.
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
      priceStarting: "₹2.99 Lakh (Price for essential)",
      description: `
        <p>Breathe Life into Your Home with Green Space Interior’s Signature Living Room Designs.</p>
        <br />
        <p>Your living room is where everyone comes together, so it should feel warm, stylish and truly welcoming. At Green Space Interior, we make sure every design balances comfort with beauty, so you love spending time there every day.</p>
        <br />
        <p>From modern layouts and elegant textures to clever use of space, we create living rooms that match your taste and lifestyle. Whether you like a clean, minimal feel or a cosy, luxurious vibe, we turn ordinary rooms into inviting spaces where people want to sit, talk and relax.</p>
        <br />
        <p>Let your living room show your style and make every moment feel special with Green Space Interior.</p>
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
      priceStarting: "₹2.99 Lakh (Price for essential)",
      description: `
        <p>Dream in Style with Green Space Interior’s Exquisite Bedroom Designs.</p>
        <br />
        <p>Your bedroom should feel like your own private escape where you can unwind and wake up refreshed every day. At Green Space Interior, we design bedrooms that feel calm, beautiful and truly yours.</p>
        <br />
        <p>We focus on soft textures, smart storage and a look that matches your taste, whether you want it modern and sleek or warm and cosy. Every detail is planned so you sleep better, relax more and feel good in your own space.</p>
        <br />
        <p>Make your bedroom the place you look forward to at the end of every day, with Green Space Interior by your side.</p>
    `,
    },
  },
  {
    id: "kids-bedroom-designs",
    name: "Kids Bedroom Designs",
    image: "/Services/KidsBadroom.webp",

    singlePageInfo: {
      heading: "Kids Bedroom Designs",
      fetcherImage: "/Services/KidsBadroom.webp",
      fetcherVideo: null,
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Playful Meets Practical in Green Space Interior’s Delightful Kids Bedroom Designs.</p>
        <br />
        <p>Your child’s room should be more than just four walls. It should be a place where they dream, play and feel safe every day. At Green Space Interior, we design kids’ bedrooms that are colourful, fun and smartly planned to grow with your child.</p>
        <br />
        <p>From cosy beds and playful themes to study corners and clever storage, we make sure every part of the room is practical and inspiring. It is a space for homework, games and big dreams, all in one.</p>
        <br />
        <p>Give your child a room they will love to wake up in and feel proud to call their own.</p>
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
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Smart. Stylish. Space-Saving. Green Space Interior’s Custom Wardrobe Designs.</p>
        <br />
        <p>Keep your space tidy and beautiful with a wardrobe that works just the way you need it to. At Green Space Interior, the best interior designer in Kolkata, we design wardrobes that make the most of every inch without compromising on style.</p>
        <br />
        <p>Whether you want a walk-in closet, sleek sliding doors or a compact built-in, we plan every detail to suit your room and your routine. With smart storage ideas and quality finishes, your wardrobe stays organised and looks great for years to come.</p>
        <br />
        <p>Make your storage simple, stylish and truly yours with Green Space Interior.</p>
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
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Dine in Elegance with Green Space Interior’s Bespoke Dining Room Designs.</p>
        <br />
        <p>Every meal should feel special, whether it is a cosy dinner with family or a celebration with friends. At Green Space Interior, the best interior designer in Kolkata, we design dining rooms that bring people together in comfort and style.</p>
        <br />
        <p>From warm lighting and elegant furniture to layouts that fit your space perfectly, we make sure your dining area feels welcoming and looks beautiful. Whether you prefer a relaxed family setup or a more formal, luxurious look, we shape it to match your taste and lifestyle.</p>
        <br />
        <p>Make every meal a moment to remember with a dining room designed just for you.</p>
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
      priceStarting: "₹59,000 (Price for essential)",
      description: `
        <p>Bring Peace and Positivity Home with Green Space Interior’s Serene Pooja Room Designs.</p>
        <br />
        <p>A pooja room is more than just a corner of your house. It is where you pause, find peace and feel connected to something greater. At Green Space Interior, the best interior designer in Kolkata, we create pooja spaces that honour tradition while fitting beautifully into your modern home.</p>
        <br />
        <p>Whether you have a small nook or a separate room, we plan it with care so it feels pure, calm and easy to maintain. From elegant wooden mandirs to marble backdrops and soft lighting, every detail adds to the sacred feeling you and your family cherish every day.</p>
        <br />
        <p>Let your home hold a space that keeps blessings, faith and good energy alive with a pooja room designed by Green Space Interior.</p>
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
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Maximize Every Inch with Green Space Interior’s Innovative Space-Saving Designs.</p>
        <br />
        <p>Make the most of every corner of your home with smart ideas that look good and work even better. At Green Space Interior, the best interior designer in Kolkata, we design clever space-saving solutions that help you live comfortably without feeling cramped.</p>
        <br />
        <p>From foldable furniture and hidden storage to layouts that do double duty, we plan every detail to keep your home tidy, open and stylish. Perfect for city living, these designs turn small spaces into practical, clutter-free zones you love coming back to.</p>
        <br />
        <p>Discover how smart design can help you live more with less, only with Green Space Interior.</p>
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
      priceStarting: "₹1.99 Lakh (Price for essential)",
      description: `
        <p>Step In. Unwind. Feel Refreshed with Green Space Interior’s Luxurious Bathroom Designs.</p>
        <br />
        <p>Turn your bathroom into your own quiet escape with Green Space Interior, the best interior designer in Kolkata, known for creating elegant and practical bathroom spaces. From modern minimal styles to spa-like comfort, every detail is planned with premium fittings, smart layouts and calming touches.</p>
        <br />
        <p>Big or small, your bathroom should offer comfort, style and easy functionality every day. Start and end your day in a space that feels fresh and peaceful with a bathroom designed by Green Space Interior.</p>
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
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Turn Your Balcony into Your Favourite Corner with Green Space Interior’s Thoughtful Designs.</p>
        <br />
        <p>Give your balcony a fresh new life with Green Space Interior, the best interior designer in Kolkata, trusted for beautiful and practical balcony designs. Whether you want a cosy reading spot, a small green garden or a stylish lounge corner, we make the most of every inch.</p>
        <br />
        <p>With smart furniture, soft lighting and a touch of greenery, your balcony becomes your own little escape right at home. Step out, relax and enjoy the outdoors without leaving your door.</p>
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
      priceStarting:
        "₹1.99 LAKH (For Essential)\n₹2.99 LAKH (For Premium)\n₹3.99 LAKH (For Luxury)",
      description: `
        <p>Smart Design. Stylish Living. Perfect for Your 1 BHK.</p>
        <br />
        <p>Your first 1 BHK is more than just a house. It is your own space to relax, dream and build memories. At Green Space Interior, the best interior designer in Kolkata, we make sure every corner feels special and works beautifully for you.</p>
        <br />
        <p>From smart layouts and clever storage to cosy bedrooms and a kitchen that makes cooking easy, we plan it all to help you enjoy every bit of your home. Even a small space can feel big when it is designed with care and warmth.</p>
        <br />
        <p>Come home to a 1 BHK that makes you feel proud and happy, every single day.</p>
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
      priceStarting:
        "₹4.19 LAKH (For Essential)\n₹5.59 LAKH (For Premium)\n₹6.99 LAKH (For Luxury)",
      description: `
        <p>Perfect Harmony of Space and Style in Green Space Interior’s 2 BHK Flat Designs</p>
        <br />
        <p>A 2 BHK is where your everyday life finds space to grow. It is where you share laughter in the living room, unwind in peaceful bedrooms and enjoy meals cooked with love. At Green Space Interior, the best interior designer in Kolkata, we shape every corner to feel open, welcoming and truly yours.</p>
        <br />
        <p>From cosy living spaces to smart kitchens and clever storage, we plan every detail so your home feels comfortable, practical and full of warmth. Even the smallest touches add up to a space that makes you feel proud and happy every day.</p>
        <br />
        <p>Come home to a 2 BHK that holds your memories and makes space for many more with Green Space Interior.</p>
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
      priceStarting:
        "₹4.59 LAKH (For Essential)\n₹6.99 LAKH (For Premium)\n₹9.49 LAKH (For Luxury)",
      description: `
        <p>Luxury Redefined with Green Space Interior’s Elegant 3 BHK Flat Designs.</p>
        <br />
        <p>A 3 BHK is more than just extra rooms. It is where your family grows, where guests feel welcome and where you enjoy space to live life fully. At Green Space Interior, the best interior designer in Kolkata, we design your 3 BHK to feel spacious, elegant and warm all at once.</p>
        <br />
        <p>From grand living areas to cosy bedrooms, a stylish kitchen and a peaceful balcony, every part of your home is planned with care and comfort in mind. We focus on thoughtful details and practical layouts so you have room to relax, celebrate and create memories for years to come.</p>
        <br />
        <p>Come home to a 3 BHK that brings your family closer and gives you the luxury of space done right with Green Space Interior.</p>
    `,
    },
  },
  {
    id: "mosquito-sliding-nets",
    name: "Mosquito Sliding Nets",
    image: "/Services/MosquitoSlidingNets.webp",
    singlePageInfo: {
      heading: "Mosquito Sliding Nets",
      fetcherImage: "/Services/MosquitoSlidingNets.webp",
      fetcherVideo: null,
      priceStarting: "₹350/sq ft",
      description: `
        <p>Keep Your Home Peaceful and Pest-Free with Green Space Interior’s Mosquito Sliding Nets</p>
        <br />
        <p>Your home should feel safe and comfortable, day and night. With Green Space Interior’s mosquito sliding nets, you can enjoy fresh air without worrying about insects disturbing your peace.</p>
        <br />
        <p>Designed for windows, balconies and doors, these sliding nets are easy to use, sturdy and blend in beautifully with your interiors. No more constant buzzing or sleepless nights, just clean air and a healthier living space for your family.</p>
        <br />
        <p>Protect your loved ones while keeping your home looking neat and stylish with Green Space Interior’s smart mosquito net solutions.</p>
    `,
    },
  },

  {
    id: "invisible-grills",
    name: "Invisible Grills",
    image: "/Services/InvisibleGrills.webp",
    singlePageInfo: {
      heading: "Invisible Grills",
      fetcherImage: "/Services/InvisibleGrills.webp",
      fetcherVideo: null,
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Safe Homes, Clear Views with Green Space Interior’s Invisible Grills</p>
        <br />
        <p>Your family’s safety should never hide your view. With Green Space Interior’s invisible grills, you get the best of both, strong protection for your windows and balconies, and an open view that keeps your home feeling light and free.</p>
        <br />
        <p>Perfect for homes in Kolkata, these grills are sturdy yet subtle. They keep kids and pets safe without blocking sunlight or making your rooms feel closed in. Easy to maintain and sleek in design, they add safety without taking away your home’s beauty.</p>
        <br />
        <p>Enjoy peace of mind and an open view every day with Green Space Interior’s invisible grill solutions.</p>
    `,
    },
  },
  {
    id: "upvc-doors-windows",
    name: "UPVC doors & windows",
    image: "/Services/UPVCdoorswindows.jpg",
    singlePageInfo: {
      heading: "UPVC doors & windows",
      fetcherImage: "/Services/UPVCdoorswindows.jpg",
      fetcherVideo: null,
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Strong, Stylish and Long-Lasting UPVC Doors and Windows by Green Space Interior</p>
        <br />
        <p>Your doors and windows do more than just open and close. They keep your home safe, quiet and comfortable through every season. With Green Space Interior’s UPVC doors and windows, you get strength, smooth design and easy upkeep, all in one.</p>
        <br />
        <p>Perfect for Kolkata’s changing weather, our UPVC solutions help keep heat, noise and dust out while letting in fresh air and natural light. From sliding windows to sturdy doors, every piece is made to last and blend beautifully with your interiors.</p>
        <br />
        <p>Add peace of mind and style to your home with UPVC doors and windows from Green Space Interior.</p>
    `,
    },
  },
  {
    id: "commercial-designs",
    name: "Commercial Projects",
    image: "/Projects/commercial-designs/2.jpg",
    singlePageInfo: {
      heading: "Commercial Projects",
      fetcherImage: "/Projects/commercial-designs/2.jpg",
      fetcherVideo: null,
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Strong, Stylish and Long-Lasting UPVC Doors and Windows by Green Space Interior.</p>
        <br />
        <p>In any commercial space, doors and windows do more than just separate rooms. They protect your work environment, keep it peaceful and add to the overall look and feel. With Green Space Interior’s UPVC doors and windows, you get strong, elegant solutions that last for years with very little maintenance.</p>
        <br />
        <p>Built to handle Kolkata’s weather, our UPVC options keep noise, dust and heat out while letting in fresh air and light. From smooth sliding windows to secure doors, every piece is designed to blend with your interiors and make your space more comfortable and professional.</p>
        <br />
        <p>Give your commercial project the strength, style and peace of mind it deserves with UPVC doors and windows from Green Space Interior.</p>
    `,
    },
  },
  {
    id: "tv-unit",
    name: "Tv Unit",
    image: "/Projects/tv-unit/1.jpg",
    singlePageInfo: {
      heading: "Tv Unit",
      fetcherImage: "/Projects/tv-unit/1.jpg",
      fetcherVideo: null,
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Stylish, Functional and Made Just for You by Green Space Interior.</p>
        <br />
        <p>Your TV unit is more than just a stand for your screen. It ties your living room together, hides the clutter and adds a touch of style to your space. At Green Space Interior, we design TV units that fit perfectly with your interiors and your lifestyle.</p>
        <br />
        <p>Whether you want a sleek wall-mounted setup, extra storage for gadgets or a cosy space to display decor, we plan every detail with care. Our designs keep cables hidden, save space and make your living area feel organised and welcoming.</p>
        <br />
        <p>Bring home a TV unit that looks good, works well and makes your living room feel complete with Green Space Interior.</p>
    `,
    },
  },
  {
    id: "cabinets",
    name: "Cabinets",
    image: "/Projects/cabinets/1.jpg",
    singlePageInfo: {
      heading: "Cabinets",
      fetcherImage: "/Projects/cabinets/1.jpg",
      fetcherVideo: null,
      priceStarting: "Based On Your Requirment",
      description: `
        <p>Smart, Stylish and Made to Last by Green Space Interior.</p>
        <br />
        <p>Good cabinets do more than just store things. They help you keep your home neat, organised and looking beautiful every day. At Green Space Interior, we design cabinets that fit your space, match your style and make life easier.</p>
        <br />
        <p>Whether it’s your kitchen, bedroom or living room, our cabinets are built with sturdy materials and smooth finishes that handle Kolkata’s changing weather without losing their look or strength. Smart storage and thoughtful details keep your things safe, dry and easy to reach all year round.</p>
        <br />
        <p>Add more space, more style and more peace of mind to your home with custom cabinets from Green Space Interior.</p>
    `,
    },
  },
];

export const NAV_ITEMS: INav[] = [
  {
    id: 2,
    name: "Design Gallery",
    slug: "/design-gallery",

    submenu: SERVICES.map((item) => ({
      id: item.id,
      name: item.name,
      slug: `/services/${item.id}`,
    })),
  },
  {
    id: "customize-kitchen",
    name: "Customize Kitchen",
    slug: "/customize-kitchens",
  },
  {
    id: 4,
    name: "Recent Projects",
    slug: "/recent-projects",
  },
  {
    id: 5,
    name: "Site Services",
    slug: "/site-services",
  },

  {
    id: 6,
    name: "Blog",
    slug: "/blogs",
  },
  {
    id: 7,
    name: "More",
    slug: "#",
    submenu: [
      {
        id: "7-1",
        name: "About Us",
        slug: "/about-us",
      },
      {
        id: "7-2",
        name: "Career",
        slug: "/career",
      },
      {
        id: "7-3",
        name: "Why Green Space Interior",
        slug: "/why-green-space",
      },
      {
        id: "7-4",
        name: "Faq",
        slug: "/faq",
      },
      {
        id: "7-5",
        name: "Contact Us",
        slug: "/contact-us",
      },
      {
        id: "7-6",
        name: "Sitemap",
        slug: "/sitemap",
      },
      {
        id: "7-7",
        name: "Refer & Earn",
        slug: "/refer-and-earn",
      },
      {
        id: "7-8",
        name: "EMI Options",
        slug: "/emi-options",
      },
      {
        id: "7-9",
        name: "Signature Design",
        slug: "/dc-signature",
      },
    ],
  },
];

export const BANNER_ITEMS = [
  {
    id: "4",
    bannerImage: "/banners/4.png",
    bannerImageMobile: "/banners/m4.png",
    altTag: "Sample Alt Tag 1",
  },
  {
    id: "1",
    bannerImage: "/banners/1.png",
    bannerImageMobile: "/banners/m1.png",
    altTag: "Sample Alt Tag 1",
  },
  {
    id: "2",
    bannerImage: "/banners/2.png",
    bannerImageMobile: "/banners/m2.png",
    altTag: "Sample Alt Tag 2",
  },
  {
    id: "3",
    bannerImage: "/banners/3.png",
    bannerImageMobile: "/banners/m3.png",
    altTag: "Sample Alt Tag 3",
  },
  // {
  //   id: "2",
  //   heading: "Smart Spaces, Stunning Designs",
  //   subheading:
  //     "Maximize every inch of your home with creative layouts and multifunctional furniture tailored for compact living.",
  //   bannerImage: "/banners/3.png",
  // },
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

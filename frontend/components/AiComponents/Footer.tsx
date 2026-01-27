import { cn } from "@/utils/cn";
import Link from "next/link";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import { SERVICES } from "@/constant";
import { Facebook, Youtube, Instagram, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const FOOTER_LINKS: {
  heading: string;
  links: { text: string; slug: string; icon?: React.ReactNode }[];
}[] = [
  {
    heading: "Services",
    links: SERVICES.map((item) => ({
      text: item.name,
      slug: `/services/${item.id}`,
    })),
  },
  {
    heading: "Quick Links",
    links: [
      {
        text: "Home",
        slug: "/",
      },
      {
        text: "Customize Kitchens",
        slug: "/customize-kitchens",
      },
      {
        text: "Site Services",
        slug: "/site-services",
      },
      {
        text: "Blogs",
        slug: "/blogs",
      },
      {
        text: "About Us",
        slug: "/about-us",
      },
      {
        text: "Career",
        slug: "/career",
      },
      {
        text: "Why Green Space Interior",
        slug: "/why-green-space",
      },
      {
        text: "Faq",
        slug: "/faq",
      },
      {
        text: "Contact Us",
        slug: "/contact-us",
      },
      {
        text: "Refer And Earn",
        slug: "/refer-and-earn",
      },
      {
        text: "EMI Options",
        slug: "/emi-options",
      },
    ],
  },
  {
    heading: "Contact Details",
    links: [
      {
        text: "+91 98366 77669",
        slug: "tel:+919836677669",
        icon : <Phone size={15}/>
      },
      {
        text: "+91 62895 32707",
        slug: "https://api.whatsapp.com/send?phone=916289532707",
        icon : <MessageCircle size={15}/>
      },
      {
        text: "+91 98042 20277",
        slug: "tel:+919804220277",
        icon : <Phone size={15}/>
      },
      {
        text: "info@greenspaceinterior.com",
        slug: "mailto:info@greenspaceinterior.com",
        icon : <Mail size={15} />
      },
      {
        text: "287/A, Shreema Housing Complex, Opposite Of Maruti Showroom, Jalkal, Maheshtala, Kolkata – 700141",
        slug: "#",
        icon : <MapPin size={15}/>
      },
    ],
  },
  {
    heading: "Social Media",
    links: [
      {
        text: "Facebook",
        slug: "https://www.facebook.com/greenspaceinterior2023/",
        icon: <Facebook size={18} />,
      },
      {
        text: "Instagram",
        slug: "https://www.instagram.com/greenspaceinterior23",
        icon: <Instagram size={18} />,
      },
      {
        text: "YouTube",
        slug: "#",
        icon: <Youtube size={18} />,
      },
    ],
  },
];

export default function Footer() {
  const date = new Date();
  return (
    <footer
      className={cn("bg-gradient-to-r from-[#05b1a2] to-[#00524b] text-white")}
    >
      <div className={cn("container mx-auto px-4 py-12")}>
        <div className={cn("text-center mb-8")}>
          <h2 className={cn("text-2xl font-bold mb-2")}>
            Ready To Design Your Dream Home?
          </h2>
          <OpenGetQuoteDialog isOpen>
            <p className={cn("text-teal-100")}>Booking & Consultation</p>
          </OpenGetQuoteDialog>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-sm max-sm:grid-cols-2">
          {FOOTER_LINKS.map((links, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "max-sm:order-3"
                  : index === 1
                  ? "max-sm:order-4"
                  : index === 2
                  ? "max-sm:order-1"
                  : "max-sm:order-2"
              }
            >
              <h3 className={cn("font-semibold mb-4")}>{links.heading}</h3>
              <ul className={cn("space-y-2 text-teal-100")}>
                {links.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.slug} className={cn("hover:text-white")}>
                      {item.icon ? (
                        <span className="float-left mt-[1px] mr-1.5">
                          {item.icon}
                        </span>
                      ) : null}

                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "border-t border-teal-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          )}
        >
          <div className={cn("text-teal-100 text-sm max-sm:text-center")}>
            © {date.getFullYear()} Green Space Interior.
            {/* <Link href="#" className={cn("hover:text-white ml-2")}>
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className={cn("hover:text-white ml-2")}>
              Terms of Use
            </Link> */}
          </div>
          <div className={cn("text-teal-100 text-sm mt-4 md:mt-0")}>
            Digital Partner{" "}
            <Link
              target="__blank"
              href="https://ommdigitalsolution.com/"
              className="underline"
            >
              Omm Digital Solution Pvt. Ltd.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

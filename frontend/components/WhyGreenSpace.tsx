"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import OpenGetQuoteDialog from "./Utils/OpenGetQuoteDialog";
import { cn } from "@/utils/cn";

const TABS = [
  {
    id: "6",
    text: "Pricing",
    image: "/why-us/1,-2,-3-BHK-web-banner-final.png",
    btnText: "Talk To An Expert Today",
    content: `<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><span style="box-sizing: border-box; font-weight: 400;">Professional project managers answer your queries and keep the project on time.</span></p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-weight: 400;">Trained carpenters and site staff ensure that your floors are protected during installation and that standard operating procedures on a 51 point checklist are followed.</span></p>`,
  },
  {
    id: "1",
    text: "Personalised for You",
    image: "/why-us/whyUs1.webp",
    content: `<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted">Tell our design experts what makes you tick, and we deliver to your needs.</p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Have a minimalist sensibility? Prefer warm tones and cozy corners? Our designers bring your taste to life.</p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Feeling a bit cramped?&nbsp;<b style="box-sizing: border-box; font-weight: bolder;">Create up to 20% more space</b> at a fraction of the cost of a larger home.</p>`,
    btnText: "Personalise Your Design",
  },
  {
    id: "2",
    text: "Quality Guaranteed",
    image: "/why-us/whyUs2.jpg",
    content: `<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
  id="isPasted">At Green Space Interior, quality comes first.</p>
<p
  style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
  We use ISI-certified 710 grade waterproof ply and Fevicol Marine adhesive for
  superior strength and moisture resistance. Our interiors feature DC Gold
  plywood with a termite- and borer-proof eucalyptus core.</p>
<p
  style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
  We also use HDF for dry areas and BWP &amp; HDHMR plywood for wet zones,
  ensuring durability across all spaces.</p>`,
    btnText: "Get Assured Quality",
  },
  {
    id: "3",
    text: "Project Management from A to Z",
    image: "/why-us/whyUs3.webp",
    btnText: "Talk To An Expert Today",
    content: `<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><span style="box-sizing: border-box; font-weight: 400;">Professional project managers answer your queries and keep the project on time.</span></p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-weight: 400;">Trained carpenters and site staff ensure that your floors are protected during installation and that standard operating procedures on a 51 point checklist are followed.</span></p>`,
  },
  {
    id: "4",
    text: "Easy EMI options",
    image: "/why-us/whyUs4.webp",
    btnText: "Avail Attractive EMIs",
    content: `<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
  id="isPasted"><span style="box-sizing: border-box; font-weight: 400;">We have
    partnered with reputable lenders to make your interiors decision
    easier.</span></p>
<p
  style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
  <span style="box-sizing: border-box; font-weight: 400;">EMIs can be split over
    36 months and kick in after only a 20% payment (5% and 15%)</span></p>
<p
  style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
  <b style="box-sizing: border-box; font-weight: bolder;">Sample EMIs (monthly
    for 36 months):</b><span
    style="box-sizing: border-box; font-weight: 400;">&nbsp;</span></p>
<ol
  style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; color: rgb(102, 102, 102); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
  <li style="box-sizing: border-box;"><span
      style="box-sizing: border-box; font-weight: 400;"><span
        style="box-sizing: border-box; font-weight: 400;">Kitchen costing 1.5
        lakhs &ndash; ₹4,667 (Approx)</span></span></li>
  <li style="box-sizing: border-box;">1BHK costing 3.5 lakhs<span
      style="box-sizing: border-box; font-weight: 400;">&nbsp;&ndash;</span>
    ₹10,889&nbsp;<span style="box-sizing: border-box; font-weight: 400;"
      id="isPasted"><span
        style="box-sizing: border-box; font-weight: 400;">(Approx)</span></span>
  </li>
  <li style="box-sizing: border-box;">2BHK costing 5 lakhs &ndash;
    ₹15,556&nbsp;<span style="box-sizing: border-box; font-weight: 400;"
      id="isPasted"><span
        style="box-sizing: border-box; font-weight: 400;">(Approx)</span></span>
  </li>
  <li style="box-sizing: border-box;">3BHK costing 7 lakhs<span
      style="box-sizing: border-box; font-weight: 400;">&nbsp;&ndash;</span>
    ₹21,778&nbsp;<span style="box-sizing: border-box; font-weight: 400;"
      id="isPasted"><span
        style="box-sizing: border-box; font-weight: 400;">(Approx)</span></span>
  </li>
</ol>`,
  },
  {
    id: "5",
    text: "On-time Delivery",
    image: "/why-us/whyUs5.jpg",
    btnText: "Start Your Project",
    content: `<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><span style="box-sizing: border-box; font-weight: 400;">With more than&nbsp;<b style="box-sizing: border-box; font-weight: bolder;">75% of materials factory-made</b> on state-of-the-art machines, we ensure a superior finish, while keeping to timelines.</span></p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-weight: 400;">We mockup products at our factory for a full quality check before carefully shipping it to you without scratches and damages in&nbsp;<b style="box-sizing: border-box; font-weight: bolder;">packaging made from recycled materials.&nbsp;</b></span></p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; line-height: 30px; font-weight: 400; color: rgb(34, 34, 34); font-family: Lato, sans-serif; font-size: 18px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(248, 248, 248); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-weight: 400;">Our satisfaction lies in living up to your expectations, while delivering on time.</span></p>`,
  },
];

export default function WhyGreenSpace() {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const imageToAddAtTab3 =
    typeof window !== "undefined" && window.innerWidth <= 700
      ? "/why-us/1,-2,-3-BHK-web-banner-Mobile.jpg"
      : "/why-us/1,-2,-3-BHK-web-banner-final.png";

  return (
    <section>
      <div className="wrapper">
        <div className="text-center">
          <div className="inline-block">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide text-[#00776e] lucide-shield-question-mark-icon lucide-shield-question-mark"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <span className="text-[#00776e] font-medium">Why Greenspace</span>
            </div>
            {/* <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold mb-4 relative"
          >
            <span style={{ color: "#00776e" }}>Why To Choose</span>
            <br />
            <span className="relative">
              Green Space
              <div
                className="absolute -bottom-2 left-0 right-0 h-3 opacity-30 rounded-full"
                style={{ backgroundColor: "#fef3c6" }}
              ></div>
            </span>
          </h2> */}
          </div>
        </div>

        <ul className="flex items-center max-sm:overflow-x-auto justify-center relative max-sm:justify-start max-sm:gap-5">
          {TABS.map((item, index) => (
            <li key={item.id} className="grow shrink-0">
              <div
                className={cn(
                  "relative flex items-center justify-center max-sm:w-full max-sm:p-1.5 max-sm:px-3.5 max-sm:rounded-md",
                  currentTabIndex === index
                    ? "max-sm:bg-yellow-400"
                    : "max-sm:border max-sm:border-yellow-400"
                )}
              >
                <button
                  onClick={() => setCurrentTabIndex(index)}
                  className="text-lg font-[550] w-full text-center max-sm:text-left max-sm:flex max-sm:justify-between"
                >
                  {item.text}
                  {/* <ChevronDown size={23} className="hidden max-sm:block" /> */}
                </button>

                {currentTabIndex === index ? (
                  <div className="bg-[#d5b58f] z-10 h-[0.5rem] w-full -bottom-4 right-0 absolute rounded-full mt-1.5 max-sm:hidden"></div>
                ) : null}

                <div className="bg-[#c6c6c6] z-0 h-[0.3rem] w-full -bottom-[0.920rem] right-0 absolute mt-1.5 max-sm:hidden"></div>
              </div>
            </li>
          ))}
          {/* <div className="absolute left-0 right-0 -bottom-3 h-[0.25rem] rounded-full bg-[#c6c6c6]"></div> */}
        </ul>

        <div
          className={cn(
            currentTabIndex === 0 ? "" : "grid grid-cols-3",
            "py-10 max-w-[75rem] mx-auto max-sm:grid-cols-1 max-sm:max-w-full"
          )}
        >
          <Image
            className={cn(currentTabIndex === 0 ? "w-full" : "w-[30rem]")}
            src={
              currentTabIndex === 0
                ? imageToAddAtTab3
                : TABS[currentTabIndex].image
            }
            alt="Why Choose Us Image"
            height={1920}
            width={1920}
          />

          {currentTabIndex === 0 ? null : (
            <div className="p-10 flex flex-col h-full col-span-2 max-sm:py-2 max-sm:px-0">
              <div className="text-xl font-[400] space-y-3.5 grow h-full">
                <span
                  dangerouslySetInnerHTML={{
                    __html: TABS[currentTabIndex].content,
                  }}
                ></span>
              </div>

              <OpenGetQuoteDialog isOpen>
                <Button className="flex items-center gap-3.5">
                  <span>→</span> <span>{TABS[currentTabIndex].btnText}</span>
                </Button>
              </OpenGetQuoteDialog>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

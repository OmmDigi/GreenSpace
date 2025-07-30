"use client";

import React, { useState } from "react";
import {
  ImageIcon,
  MessageCircle,
  Phone,
  Instagram,
} from "lucide-react";
import Link from "next/link";

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  isWhatsApp?: boolean;
}

const navItems: NavItem[] = [
  {
    id: "gallery",
    icon: ImageIcon,
    label: "Designs",
    href: "/recent-projects",
  },
  {
    id: "callus",
    icon: Phone,
    label: "Call Us",
    href: "tel:9836677669",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=916289532707",
    isWhatsApp: true,
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/greenspaceinterior23",
    
  },
];

const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  const handleTabClick = (
    tabId: string,
    href: string,
    isWhatsApp?: boolean
  ) => {
    setActiveTab(tabId);

    if (isWhatsApp) {
      // Open WhatsApp in new tab/window
      window.open(href, "_blank");
    } else {
      // In a real Next.js app, you would use next/router or next/navigation
      // router.push(href);
      console.log(`Navigate to: ${href}`);
    }
  };

  return (
    <div className="hidden max-sm:block fixed bottom-0 left-0 right-0 bg-[#36caadc5] backdrop-blur-2xl shadow-2xl z-50">
      {/* Main Navigation */}
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Link
              href={item.href}
              key={item.id}
              onClick={() =>
                handleTabClick(item.id, item.href, item.isWhatsApp)
              }
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-white"
              } ${item.isWhatsApp ? "relative" : ""}`}
            >
              <Icon
                className={`w-5 h-5 mb-1 ${
                  isActive ? "text-yellow-600" : "text-white"
                }`}
              />
              {item.isWhatsApp && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              )}
              <span
                className={`text-xs font-medium whitespace-pre ${
                  isActive ? "text-yellow-600" : "text-white"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="w-4 h-0.5 bg-yellow-600 rounded-full mt-1"></div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Safe area padding for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white"></div>
    </div>
  );
};

export default MobileBottomNav;

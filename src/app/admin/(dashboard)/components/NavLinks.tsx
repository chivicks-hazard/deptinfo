"use client";
import React from "react";
import { IconType } from "react-icons";
import { FaCalendarAlt, FaCog, FaHome } from "react-icons/fa";
import { FaBullhorn, FaClock, FaUser } from "react-icons/fa6";
import { GrDashboard } from "react-icons/gr";
import { BellIcon, History, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
interface NavLink {
  href: string;
  icon?: IconType | LucideIcon;
}

const NavLinks = () => {
  const router = useRouter();

  const navLinks: NavLink[] = [
    { href: "overview", icon: FaHome },
    { href: "user-management", icon: FaUser },
    { href: "announcements", icon: FaBullhorn },
    { href: "events", icon: FaCalendarAlt },
    { href: "timetable", icon: FaClock },
    { href: "notifications", icon: BellIcon },
    { href: "audit-logs", icon: History },
    { href: "settings", icon: FaCog },
  ];
  return (
    <div>
      {navLinks.map((link, index) => (
        <a
          key={index}
          onClick={() => router.push(`/admin/${link.href}`)}
          className={`flex flex-row justify-between items-center gap-3 hover:text-secondary-light capitalize cursor-pointer`}
        >
          <span className="">{link.icon && <link.icon />}</span>
          <span>
            {link.href.includes("-") ? link.href.replace("-", " ") : link.href}
          </span>
        </a>
      ))}
    </div>
  );
};

export default NavLinks;

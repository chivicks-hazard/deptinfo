"use client";
import { BellIcon, History, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { FaCalendarAlt, FaCog, FaHome } from "react-icons/fa";
import { FaBullhorn, FaClock, FaUser } from "react-icons/fa6";
import { GrDashboard } from "react-icons/gr";

interface NavLink {
  href: string;
  icon?: IconType | LucideIcon;
}

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname().replace("/admin", "");

  // const windowObject = window;

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
    <div className="flex flex-row">
      <div className="h-[100%] w-[15vw] fixed top-0 left-0 z-10 bg-primary-base flex flex-col">
        <h1 className="text-3xl text-slate-300 font-bold p-5">
          <span className="">Dept</span>Info
        </h1>

        <div className="flex flex-col justify-center items-start gap-3 text-lg w-full p-5 mx-auto mt-5 text-primary-lightest">
          {navLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => router.push(`/admin/${link.href}`)}
              className={`flex flex-row justify-between items-center gap-3 hover:text-secondary-light capitalize cursor-pointer`}
            >
              <span className="">{link.icon && <link.icon />}</span>
              <span>
                {link.href.includes("-")
                  ? link.href.replace("-", " ")
                  : link.href}
              </span>
            </a>
          ))}

          <a className="absolute bottom-5 hover:text-secondary-light capitalize cursor-pointer">
            Log out
          </a>
        </div>
      </div>
      <div className="h-[100%] w-[85vw] bg-background ml-[15vw] flex flex-col gap-0">
        {/* Header */}
        <div className="p-5 bg-primary-base fixed right-0 w-[85vw] z-10">
          <h1 className="text-3xl text-slate-300 font-bold capitalize ml-3">
            {pathName.includes("-")
              ? pathName.replace("-", " ").replace("/", "")
              : pathName.replace("/", "")}
          </h1>
        </div>
        <div className="w-full mt-14">{children}</div>
      </div>
    </div>
  );
};

export default layout;

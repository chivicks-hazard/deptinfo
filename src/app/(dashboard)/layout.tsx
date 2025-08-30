"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { GrDashboard } from "react-icons/gr";

interface NavLink {
  link: string;
  icon: IconType;
}

const layout = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();

  // const windowObject = window;

  const navLinks = [
    { href: "overview", icon: GrDashboard },
    "user-management",
    "announcement",
    "events",
    "timetable",
    "notifications",
    "audit-logs",
    "settings",
  ];

  return (
    <div>
      <div className="h-[100%] w-[20vw] fixed top-0 left-0 z-10 bg-primary-base flex flex-col">
        <h1 className="text-3xl text-slate-300 font-bold p-5">
          <span className="">Dept</span>Info
        </h1>

        <div className="flex flex-col justify-center items-start gap-3 text-lg w-full p-5 mx-10 mt-5 text-primary-lightest">
          {navLinks.map((link, index) => (
            <a
              key={index}
              // onClick={() => router.push(`/${link}`)}
              className={`hover:text-secondary-light capitalize`}
            >
              link
            </a>
          ))}
        </div>
      </div>
      <div className="h-[100%] w-[80vw] bg-background ml-[20vw]">
        <div className="p-5 bg-primary-base">
          {/* <h1 className="text-3xl text-slate-300 font-bold capitalize">
            {windowObject.location.pathname.includes("-")
              ? windowObject.location.pathname
                  .replace("-", " ")
                  .replace("/", "")
              : windowObject.location.pathname.replace("/", "")}
          </h1> */}
          <h1 className="text-3xl text-slate-300 font-bold">
            <span className="">Dept</span>Info
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;

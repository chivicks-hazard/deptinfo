"use client";
import React from "react";
import { IconType } from "react-icons";
import { FaCalendarAlt, FaCog, FaHome } from "react-icons/fa";
import { FaBullhorn, FaClock, FaUser } from "react-icons/fa6";
import { GrDashboard } from "react-icons/gr";
import NavLinks from "./components/NavLinks";
import NavHeader from "./components/NavHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <div className="h-[100%] w-[15vw] fixed top-0 left-0 z-10 bg-primary-base flex flex-col">
        <h1 className="text-3xl text-slate-300 font-bold p-5">
          <span className="">Dept</span>Info
        </h1>

        <div className="flex flex-col justify-center items-start gap-3 text-lg w-full p-5 mx-auto mt-5 text-primary-lightest">
          <NavLinks />

          <a className="absolute bottom-5 hover:text-secondary-light capitalize cursor-pointer">
            Log out
          </a>
        </div>
      </div>
      <div className="h-[100%] w-[85vw] bg-background ml-[15vw] flex flex-col gap-0">
        {/* Header */}
        <div className="p-5 bg-primary-base fixed right-0 w-[85vw] z-10">
          <NavHeader />
        </div>
        <div className="w-full mt-14">{children}</div>
      </div>
    </div>
  );
};

export default layout;

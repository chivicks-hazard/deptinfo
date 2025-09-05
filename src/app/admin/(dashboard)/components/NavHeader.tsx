"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NavHeader = () => {
  const pathName = usePathname().replace("/admin", "");

  return (
    <h1 className="text-3xl text-slate-300 font-bold capitalize ml-3">
      {pathName.includes("-")
        ? pathName.replace("-", " ").replace("/", "")
        : pathName.replace("/", "")}
    </h1>
  );
};

export default NavHeader;

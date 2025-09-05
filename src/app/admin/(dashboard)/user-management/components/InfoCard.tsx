import { LucideIcon } from "lucide-react";
import React from "react";
import { IconType } from "react-icons";

interface Info {
  title: string;
  value: string;
  icon?: IconType | LucideIcon;
}

const InfoCard = (info: Info) => {
  return (
    <div className="bg-primary-lighter p-5 rounded-md text-secondary-lightest">
      <div className="flex flex-row justify-center items-center gap-2 text-2xl">
        {info.icon && <info.icon />}
        <div className="font-semibold">{info.title}</div>
      </div>
      <div className="text-lg">{info.value}</div>
    </div>
  );
};

export default InfoCard;

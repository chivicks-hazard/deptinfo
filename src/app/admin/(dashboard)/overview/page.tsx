import React from "react";
import InfoCard from "./components/InfoCard";
import { IconType } from "react-icons";
import { LucideIcon, SearchIcon } from "lucide-react";
import { PiStudent, PiStudentBold } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import RecentAnnouncementTable from "./components/RecentAnnouncementTable";
import { Input } from "@/components/ui/input";

interface Info {
  title: string;
  value: string;
  icon?: IconType | LucideIcon;
}

const OverviewPage = () => {
  const info: Info[] = [
    { title: "Students", value: "170", icon: PiStudentBold },
    { title: "Lecturers", value: "30", icon: GiTeacher },
    { title: "Announcements", value: "10", icon: FaBullhorn },
    { title: "Events", value: "5", icon: FaCalendarAlt },
  ];

  return (
    <div className="p-5">
      <div className="mt-8 flex flex-row gap-5">
        {info.map((info, index) => (
          <InfoCard
            key={index}
            title={info.title}
            value={info.value}
            icon={info.icon}
          />
        ))}
      </div>

      <div className="mt-20 w-full bg-white p-3">
        <h2 className="text-2xl font-semibold">Recent Announcements</h2>
        <div className="flex flex-row items-center justify-start gap-2 rounded border border-slate-400 p-1 w-[25%] mt-5">
          <SearchIcon className="text-slate-300" />
          <input
            type="text"
            name="search"
            id="search"
            className="focus:outline-none border-none"
            placeholder="Search for announcement"
          />
        </div>
        <RecentAnnouncementTable />
      </div>
    </div>
  );
};

export default OverviewPage;

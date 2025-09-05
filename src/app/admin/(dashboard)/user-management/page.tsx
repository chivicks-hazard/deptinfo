import { LucideIcon, SearchIcon } from "lucide-react";
import React from "react";
import { IconType } from "react-icons";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import InfoCard from "./components/InfoCard";
import StudentsTable from "./components/StudentsTable";
import { Button } from "@/components/ui/button";
import { FaP, FaPlus } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiAdminFill } from "react-icons/ri";
import LecturersTable from "./components/LecturersTable";
import AdminsTable from "./components/AdminsTable";

interface Info {
  title: string;
  value: string;
  icon?: IconType | LucideIcon;
}

const UserManagementPage = () => {
  const info: Info[] = [
    { title: "Students", value: "170", icon: PiStudentBold },
    { title: "Lecturers", value: "30", icon: GiTeacher },
    { title: "Admins", value: "5", icon: RiAdminFill },
  ];

  return (
    <div className="p-5">
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute top-25 right-5">
          <span className="inline-flex flex-row items-center gap-2 bg-primary-base hover:bg-primary-dark text-white py-2 px-2 rounded">
            <span>Add</span>
            <FaPlus />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex flex-row justify-center items-center gap-2 hover:bg-secondary-lightest">
            <PiStudentBold />
            <span>Student</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row justify-center items-center gap-2 hover:bg-secondary-lightest">
            <GiTeacher />
            <span>Lecturer</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row justify-center items-center gap-2 hover:bg-secondary-lightest">
            <RiAdminFill />
            <span>Admin</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="mt-5 flex flex-row gap-5">
        {info.map((info, index) => (
          <InfoCard
            key={index}
            title={info.title}
            value={info.value}
            icon={info.icon}
          />
        ))}
      </div>

      <div className="mt-20 bg-white p-3 mb-5">
        <h2 className="text-2xl font-semibold">Students Table</h2>
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
        <StudentsTable />
      </div>

      <div className="mt-20 bg-white p-3 mb-5">
        <h2 className="text-2xl font-semibold">Lecturers Table</h2>
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
        <LecturersTable />
      </div>

      <div className="mt-20 bg-white p-3 mb-5">
        <h2 className="text-2xl font-semibold">Admins Table</h2>
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
        <AdminsTable />
      </div>
    </div>
  );
};

export default UserManagementPage;

import { Button } from "@/components/ui/button";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import AnnouncementsTable from "./AnnouncementsTable";
import { SearchIcon } from "lucide-react";

const AnnouncementPage = () => {
  return (
    <div className="p-5">
      <Button
        variant="default"
        rightIcon={<FaPlus />}
        className="absolute top-25 right-5"
      >
        Create New Announcement
      </Button>

      <div className="mt-40 bg-white p-3 mb-5">
        <h2 className="text-2xl font-semibold">Announcements Table</h2>
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

        <AnnouncementsTable />
      </div>
    </div>
  );
};

export default AnnouncementPage;

"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { FaArchive } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const AnnouncementsTable = () => {
  return (
    <Table className="mt-3">
      <TableHeader className="bg-slate-300">
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Posted By</TableHead>
          <TableHead>Created On</TableHead>
          <TableHead>Expires By</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* I need five rows of the same data */}
        {[1, 2, 3, 4, 5].map((item) => (
          <TableRow key={item}>
            <TableCell>Title {item}</TableCell>
            <TableCell>Posted By {item}</TableCell>
            <TableCell>Created On {item}</TableCell>
            <TableCell>Expires By {item}</TableCell>
            <TableCell>Status {item}</TableCell>
            <TableHead>
              <div className="flex flex-row justify-center items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"outline"}
                      leftIcon={<FaEye />}
                      className="text-primary-base bg-inherit shadow-none border-0 hover:bg-primary-lightest py-2 px-2 rounded"
                    ></Button>
                  </TooltipTrigger>
                  <TooltipContent>View</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"outline"}
                      leftIcon={<FaArchive />}
                      className="text-primary-base bg-inherit shadow-none border-0 hover:bg-primary-lightest py-2 px-2 rounded"
                    ></Button>
                  </TooltipTrigger>
                  <TooltipContent>Archive</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"outline"}
                      leftIcon={<MdOutlineModeEdit />}
                      className="text-primary-base bg-inherit shadow-none border-0 hover:bg-primary-lightest py-2 px-2 rounded"
                    ></Button>
                  </TooltipTrigger>
                  <TooltipContent>Edit</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"destructive"}
                      leftIcon={<RiDeleteBin6Line />}
                      className="text-destructive bg-inherit shadow-none border-0 hover:bg-destructive/10 py-2 px-2 rounded"
                    ></Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete</TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AnnouncementsTable;

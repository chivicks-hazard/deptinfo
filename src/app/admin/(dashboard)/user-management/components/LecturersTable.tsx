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
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const LecturersTable = () => {
  return (
    <Table className="mt-3">
      <TableHeader className="bg-slate-300">
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Department</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* I need five rows of the same data */}
        {[1, 2, 3, 4, 5].map((item) => (
          <TableRow key={item}>
            <TableCell>Name {item}</TableCell>
            <TableCell>Email {item}</TableCell>
            <TableCell>Department {item}</TableCell>
            <TableHead>
              <div className="flex flex-row justify-center items-center gap-2">
                <Button
                  variant={"outline"}
                  leftIcon={<MdOutlineModeEdit />}
                  className="text-primary-base bg-inherit shadow-none border-0 hover:bg-primary-lightest py-2 px-2 rounded"
                ></Button>
                <Button
                  variant={"destructive"}
                  leftIcon={<RiDeleteBin6Line />}
                  className="text-destructive bg-inherit shadow-none border-0 hover:bg-destructive/10 py-2 px-2 rounded"
                ></Button>
              </div>
            </TableHead>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LecturersTable;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const RecentAnnouncementTable = () => {
  return (
    <Table className="mt-3 bg-white rounded-md">
      <TableHeader className="bg-slate-300">
        <TableRow>
          <TableHead>Announcement</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Content</TableHead>
          <TableHead>Posted By</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Give me 5 rows with the same structure */}
        {[1, 2, 3, 4, 5].map((item) => (
          <TableRow className="hover:bg-primary-lightest" key={item}>
            <TableCell className="p-2">Announcement {item}</TableCell>
            <TableCell className="p-2">Date {item}</TableCell>
            <TableCell className="p-2">Content {item}</TableCell>
            <TableCell className="p-2">Posted By {item}</TableCell>
            <TableCell className="p-2">Actions {item}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentAnnouncementTable;

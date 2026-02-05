// /src/components/BooksTable.jsx
import React, { useState } from "react";
import { Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody, Chip, LinearProgress } from "@mui/material";
import { tableData } from "../data/tableData";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 3;

export default function BooksTable() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedData = tableData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography fontWeight={600} mb={2}>Books Circulation</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Publication</TableCell>
              <TableCell>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedData.map((row) => (
              <TableRow key={row.book}>
                <TableCell>{row.book}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell><Chip label={row.pub} size="small" /></TableCell>
                <TableCell sx={{ width: 160 }}>
                  <LinearProgress variant="determinate" value={row.progress} sx={{ height: 8, borderRadius: 5 }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </CardContent>
    </Card>
  );
}
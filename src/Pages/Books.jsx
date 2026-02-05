// /src/pages/Books.jsx
import React from "react";
import { Typography, Box, Toolbar } from "@mui/material";
import BooksTable from "../components/BooksTable";

export default function Books() {
  return (
    <Box>
      <Toolbar />
      <Typography variant="h5" fontWeight={600} mb={2}>
        All Books
      </Typography>
      <BooksTable />
    </Box>
  );
}
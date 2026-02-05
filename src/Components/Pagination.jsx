// /src/components/Pagination.jsx
import React from "react";
import { Pagination as MuiPagination, Stack } from "@mui/material";

export default function Pagination({ count, page, onChange }) {
  return (
    <Stack spacing={2} alignItems="center" mt={2}>
      <MuiPagination 
        count={count} 
        page={page} 
        onChange={onChange} 
        color="primary" 
        shape="rounded"
      />
    </Stack>
  );
}
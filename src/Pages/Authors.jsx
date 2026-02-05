// /src/pages/Authors.jsx
import React from "react";
import { Typography, Box, Toolbar } from "@mui/material";

export default function Authors() {
  return (
    <Box>
      <Toolbar />
      <Typography variant="h5" fontWeight={600}>
        Authors
      </Typography>
      <Typography mt={2} color="text.secondary">
        Authors page content will go here.
      </Typography>
    </Box>
  );
}
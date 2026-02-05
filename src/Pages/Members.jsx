// /src/pages/Members.jsx
import React from "react";
import { Typography, Box, Toolbar } from "@mui/material";

export default function Members() {
  return (
    <Box>
      <Toolbar />
      <Typography variant="h5" fontWeight={600}>
        Members
      </Typography>
      <Typography mt={2} color="text.secondary">
        Members page content will go here.
      </Typography>
    </Box>
  );
}
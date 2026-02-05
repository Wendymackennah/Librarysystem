
// /src/pages/Dashboard.jsx
import React from "react";
import { Grid, Box, Toolbar } from "@mui/material";
import StatCards from "../components/StatCards";
import CirculationChart from "../components/CirculationChart";
import BooksTable from "../components/BooksTable";

export default function Dashboard() {
  return (
    <Box>
      <Toolbar />
      <StatCards />
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={5}>
          <CirculationChart />
        </Grid>
        <Grid item xs={12} md={7}>
          <BooksTable />
        </Grid>
      </Grid>
    </Box>
  );
}
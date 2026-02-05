import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import { circulationData } from "../data/circulationData";

export default function CirculationChart() {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography fontWeight={600} mb={2}>Books Circulation</Typography>
        <Box display="flex" justifyContent="center">
          <PieChart width={260} height={260}>
            <Pie data={circulationData} dataKey="value" innerRadius={80} outerRadius={110}>
              {circulationData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </Box>
        <Typography align="center" variant="h4" fontWeight={700}>60%</Typography>
        <Typography align="center" color="text.secondary">AVG. Exceptions</Typography>
      </CardContent>
    </Card>
  );
}
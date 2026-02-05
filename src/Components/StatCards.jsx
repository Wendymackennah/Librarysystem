
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { stats } from "../data/stats";

export default function StatCards() {
  return (
    <Grid container spacing={2}>
      {stats.map((s) => (
        <Grid item xs={12} sm={6} md={2.4} key={s.label}>
          <Card sx={{ borderRadius: 3,
             boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              borderBottom: `4px solid ${s.color}` }}>
        

            <CardContent>
              <Typography variant="h4" fontWeight={700}>{s.value}</Typography>
              <Typography color="text.secondary">{s.label}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
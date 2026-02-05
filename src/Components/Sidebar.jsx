import React from "react";
import { Drawer, Toolbar, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import {
  Dashboard,
  Book,
  Autorenew,
  Group,
  Person,
  Settings,
} from "@mui/icons-material";

const drawerWidth = 260;

const iconMap = {
  dashboard: <Dashboard />,
  book: <Book />,
  autorenew: <Autorenew />,
  group: <Group />,
  person: <Person />,
  settings: <Settings />,
};

export default function Sidebar({ menu, activePath, navigate }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [& .MuiDrawer-paper]: { width: drawerWidth, boxSizing: "border-box", borderRight: "1px solid #eee" },
      }}
    >
      <Toolbar>
        <Typography fontWeight={700}>Library System</Typography>
      </Toolbar>
      <Divider />
      <List>
        {menu.map((item) => {
          const active = item.path === activePath;
          return (
            <ListItemButton
              key={item.text}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 2,
                bgcolor: active ? "#eef2ff" : "transparent",
              }}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon sx={{ color: active ? "#4f46e5" : "inherit" }}>
                {iconMap[item.icon]}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
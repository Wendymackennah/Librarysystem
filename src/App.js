import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, CssBaseline, Avatar } from "@mui/material";
import { Logout } from "@mui/icons-material";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Authors from "./pages/Authors";

export default function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ bgcolor: "#fff", color: "#111", borderBottom: "1px solid #eee", zIndex: 1201 }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography fontWeight={700}>Library Management System</Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar sx={{ bgcolor: "#6366f1" }}>A</Avatar>
              <Logout fontSize="small" />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <SidebarWrapper />

        {/* Main content */}
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f9fafb", p: 3, minHeight: "100vh" }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/members" element={<Members />} />
            <Route path="/authors" element={<Authors />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

/* ---------------- SIDEBAR WRAPPER WITH ACTIVE ROUTE ---------------- */
function SidebarWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { text: "Dashboard", icon: "dashboard", path: "/" },
    { text: "Books", icon: "book", path: "/books" },
    { text: "Books Circulation", icon: "autorenew", path: "/books" },
    { text: "Members", icon: "group", path: "/members" },
    { text: "Authors", icon: "person", path: "/authors" },
    { text: "Settings", icon: "settings", path: "/settings" },
  ];

  return <Sidebar menu={menu} activePath={location.pathname} navigate={navigate} />;
}
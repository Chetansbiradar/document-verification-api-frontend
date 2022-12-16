import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
//add pokemon logo
import CatchingPokemon from "@mui/icons-material/CatchingPokemon";

export const Navbar = () => {
  const NavbarStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
      color: "white",
    };
  };
  return (
    <>
      <AppBar position="sticky" style={{ marginBottom: "1.2rem" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={NavbarStyle} to="/">
              DVA
            </NavLink>
          </Typography>
          <Stack direction="row" spacing={2}>
            <NavLink to="/register" className="link" style={NavbarStyle}>
              <Button color="inherit">Register</Button>
            </NavLink>
            <NavLink to="/login" className="link" style={NavbarStyle}>
              <Button color="inherit">Login</Button>
            </NavLink>
            <NavLink to="/upload" className="link" style={NavbarStyle}>
              <Button color="inherit">Upload</Button>
            </NavLink>
            <NavLink to="/about" className="link" style={NavbarStyle}>
              <Button color="inherit">About</Button>
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

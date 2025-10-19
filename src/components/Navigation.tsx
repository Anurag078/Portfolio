import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const navItems = [
  ['Resume', 'https://drive.google.com/file/d/1kDz2QzVCRbEcUkkspDcplXCpQK3B_fLn/view?usp=drive_link'],
  
  ['Expertise', 'expertise'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(section, '_blank');
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon /> Menu</p>
      <Divider />
      <List>
        {navItems.map(([label, link]) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
              onClick={() => scrollToSection(link)}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        id="navigation"
        position="fixed"
        sx={{
          transition: "all 0.3s ease",
          background: mode === 'dark'
            ? "linear-gradient(90deg, #141E30, #243B55)"
            : "linear-gradient(90deg, #4facfe, #00f2fe)",
          backdropFilter: "blur(10px)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Left: Logo/Brand */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: "1px",
              cursor: "pointer",
              background: "linear-gradient(45deg, #fff, #ddd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "transform 0.3s ease",
              '&:hover': { transform: "scale(1.05)" }
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            MyPortfolio
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navItems.map(([label, link]) => (
              <Button
                key={label}
                onClick={() => scrollToSection(link)}
                sx={{
                  color: '#fff',
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  '&:hover': {
                    background: "rgba(255,255,255,0.15)",
                    transform: "scale(1.05)"
                  }
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Right: Dark/Light Mode Toggle + Mobile Menu */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => modeChange()} sx={{ color: "#fff" }}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: mode === 'dark'
              ? "linear-gradient(180deg, #141E30, #243B55)"
              : "linear-gradient(180deg, #4facfe, #00f2fe)",
            color: "#fff"
          }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navigation;

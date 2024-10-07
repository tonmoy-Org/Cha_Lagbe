'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/public/logo/tea-leaves.png'; // Path to your logo

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { name: 'হোম', path: '/' },
  { name: 'আমাদের সম্পর্কে', path: '/about-us' },
  { name: 'যোগাযোগ', path: '/contact-us' },
  { name: 'অর্ডার করুন', path: '/order' },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false);  // Close the drawer after navigation
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#008e48' }}>
        চা লাগবে
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigation(item.path)}>
              <ListItemText primary={item.name} sx={{ color: '#008e48', fontWeight: 'bold' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          color: '#008e48',
        }}
      >
        <Toolbar>
          {/* Logo and brand name for both mobile and desktop view */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={40}
              priority
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/')}
            />

            <Typography
              variant="h5"
              component="div"
              sx={{ ml: 1, color: '#008e48', fontWeight: 600, textShadow: 10 }}
            >
              চা লাগবে
            </Typography>
          </Box>

          {/* Hamburger menu on the right for mobile view */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: { sm: 'none' } }} // Align to the right
          >
            <MenuIcon />
          </IconButton>

          {/* Navigation items for larger screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, textShadow: 10 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: '#008e48',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#76ff03', // Bright green on hover
                  },
                }}
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}  // Close drawer when clicking outside
          ModalProps={{
            keepMounted: true, // Improves performance for mobile
          }}
          anchor="right" // Drawer opens from the right
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

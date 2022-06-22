import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Hamburger from 'hamburger-react';
import './Navbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsIcon from '@mui/icons-material/Directions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/styles';

const Navbar = ({ handleModal }) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const theme = useTheme();

  const navItems = [
    { text: 'Contact Us', icon: EmailIcon, href: null },
    {
      text: 'Get Directions',
      icon: DirectionsIcon,
      href: 'https://g.page/couriercoffeeroasters?share',
    },
  ];

  const toggleDrawer = (event, state) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpened(state);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ zIndex: 1400, bgcolor: theme.palette.primary.background }}>
          <Toolbar
            sx={{
              px: {
                lg: 8,
                md: 6,
                xs: 2,
              },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: {
                  xs: 0,
                  sm: 2,
                },
              }}
            >
              <Hamburger
                toggled={isDrawerOpened}
                toggle={() => setIsDrawerOpened((state) => !state)}
                duration={0.4}
                direction="right"
                size={20}
                color={theme.palette.primary.color}
                hideOutline={false}
                distance="sm"
              />
            </IconButton>

            <Typography
              component="h1"
              sx={{
                flexGrow: 1,
                fontSize: {
                  xs: '16px',
                  md: '20px',
                },
                fontWeight: '700',
              }}
            >
              Courier Coffee Roasters
            </Typography>
            <Box className="navLinks">
              {navItems.map((item, index) => (
                <a key={item.text} rel="noopener noreferrer" target="_blank" href={item.href}>
                  <Button
                    sx={{
                      mr: !index ? 2 : 0,
                      textTransform: 'unset',
                    }}
                    onClick={!index ? handleModal : () => {}}
                  >
                    <item.icon sx={{ mr: 1 }} />
                    {item.text}
                  </Button>
                </a>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={isDrawerOpened} onClose={(e) => toggleDrawer(e, false)}>
        <Box
          sx={{
            width: {
              xs: 200,
              md: 300,
            },
            pt: '100px',
          }}
          role="presentation"
          onClick={(e) => toggleDrawer(e, false)}
          onKeyDown={(e) => toggleDrawer(e, false)}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <a rel="noopener noreferrer" target="_blank" href={item.href}>
                  <ListItemButton
                    sx={{
                      justifyContent: 'center',
                    }}
                    onClick={!index ? handleModal : () => {}}
                  >
                    <item.icon sx={{ mr: 2, color: theme.palette.primary.color }} />
                    <ListItemText primary={item.text} sx={{ flexGrow: '0' }} />
                  </ListItemButton>
                </a>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;

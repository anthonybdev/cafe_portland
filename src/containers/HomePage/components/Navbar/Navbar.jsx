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

const Navbar = ({ handleModal, contactUsSectionRef }) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const theme = useTheme();

  const handleScrollToContactUs = () => {
    setTimeout(() => {
      contactUsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const navItems = [
    { text: 'Contact Us', icon: EmailIcon, click: handleModal },
    {
      text: 'Get Directions',
      icon: DirectionsIcon,
      click: handleScrollToContactUs,
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
                  sm: 1,
                },
                outline: 'none',
              }}
            >
              <Hamburger
                toggled={isDrawerOpened}
                toggle={() => setIsDrawerOpened((state) => !state)}
                duration={0.4}
                direction="right"
                size={22}
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
                  xs: '18px',
                  md: '24px',
                },
                lineHeight: '32px',
                mt: '-3px',
                fontWeight: '600',
              }}
            >
              Courier Coffee Roasters
            </Typography>
            <Box className="navLinks">
              {navItems.map((item, index) => (
                <Button
                  key={item.text}
                  sx={{
                    mr: !index ? 2 : 0,
                    textTransform: 'unset',
                    fontSize: {
                      md: '21px',
                      xs: '16px',
                    },
                    lineHeight: '28px',
                    fontWeight: '400',
                  }}
                  onClick={item.click}
                >
                  <item.icon sx={{ mr: 1, pt: '3.5px' }} />
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={isDrawerOpened} onClose={(e) => toggleDrawer(e, false)}>
        <Box
          sx={{
            width: {
              xs: 220,
              md: 240,
            },
            pt: '100px',
          }}
          role="presentation"
          onClick={(e) => toggleDrawer(e, false)}
          onKeyDown={(e) => toggleDrawer(e, false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.click}>
                  <item.icon sx={{ mx: 2, color: theme.palette.primary.color }} />
                  <ListItemText
                    primary={item.text}
                    sx={{
                      flexGrow: '0',
                      fontSize: {
                        md: '21px',
                        xs: '16px',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;

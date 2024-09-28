'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image'

const drawerWidth = 300;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" component="a" href="https://www.scuthetatau.com/" sx={{ my: 2 }}>
        Theta Tau
      </Typography>
      <Divider />
      <List>
        <ListItemButton href="/flores"sx={{ textAlign: 'center' }}>
                  Claves Et Seras
        </ListItemButton>
        <ListItemButton href="/resources"sx={{ textAlign: 'center'}}>
                  Productivity Resources
        </ListItemButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ bgcolor: "#852a1e" }}
        component="nav"
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Add the Theta Tau logo here */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/ThetaTauLogo.png" alt="Theta Tau Logo" width={500}
              height={300} style={{ width: '30px', marginRight: '12px' }} />
            <Typography
              variant="h6"
              component="a"
              href="https://www.scuthetatau.com/"
               sx={{ fontSize: '1.5rem', display: { xs: 'none', sm: 'block' } }}
            >
              Theta Tau
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            <Button variant="text" href="/flores" sx={{ fontSize: '1rem', my: 2, color: 'white', '&:hover': { backgroundColor: '#631b11' } }}>
              Claves Et Seras
            </Button>
            <Button variant="text" href="/resources" sx={{ fontSize: '1rem', my: 2, color: 'white', '&:hover': { backgroundColor: '#631b11' } }}>
              Productivity Resources
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
      
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;

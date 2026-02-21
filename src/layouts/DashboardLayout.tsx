import { useState } from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Dashboard, Shield, NotificationsActive, Settings, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';

const drawerWidth = 260;

const menuItems = [
  { text: 'Painel Operacional', icon: <Dashboard />, path: '/' },
  { text: 'Scanner', icon: <Shield />, path: '/scanner' },
  { text: 'Monitoramento', icon: <NotificationsActive />, path: '/monitoramento' },
  { text: 'Configurações', icon: <Settings />, path: '/configuracoes' },
];

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box sx={{ overflow: 'auto', mt: 2, px: 2 }}>
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 1 }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  if (isMobile) setMobileOpen(false);
                }}
                sx={{
                  minHeight: 48,
                  borderRadius: 3,
                  bgcolor: isActive ? 'rgba(168, 199, 250, 0.12)' : 'transparent',
                  '&:hover': { bgcolor: isActive ? 'rgba(168, 199, 250, 0.2)' : 'rgba(255,255,255,0.05)' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center', color: isActive ? 'primary.main' : 'text.secondary' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    color: isActive ? 'primary.main' : 'text.primary',
                    '& .MuiTypography-root': { fontWeight: isActive ? 600 : 400 }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 'none' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Shield sx={{ color: 'secondary.main', mr: 1, fontSize: 32 }} />
          <Typography variant="h6" noWrap component="div" fontWeight="700" sx={{ letterSpacing: '-0.5px' }}>
            Escudo Cidadão
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.paper' } }}
        >
          <Toolbar />
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{ display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.default', borderRight: '1px solid rgba(255, 255, 255, 0.08)' } }}
          open
        >
          <Toolbar />
          {drawerContent}
        </Drawer>
      </Box>

      <Box component="main" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: '100vh', p: { xs: 2, md: 4 }, pt: { xs: 10, md: 12 }, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
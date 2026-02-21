import { useState } from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Dashboard, Shield, NotificationsActive, Settings, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

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
  
  // Hook do MUI para saber se estamos numa tela pequena (mobile)
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
  
  // Estado para controlar a abertura do menu no mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
                  if (isMobile) setMobileOpen(false); // Fecha o menu no celular ao clicar
                }}
                sx={{
                  minHeight: 48,
                  borderRadius: 3,
                  bgcolor: isActive ? 'rgba(168, 199, 250, 0.12)' : 'transparent', // Fundo sutil quando ativo
                  '&:hover': {
                    bgcolor: isActive ? 'rgba(168, 199, 250, 0.2)' : 'rgba(255,255,255,0.05)',
                  },
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
      
      {/* Header (AppBar) */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 'none' }}>
        <Toolbar>
          {/* Botão de Hambúrguer (Só aparece no Mobile) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Shield sx={{ color: 'secondary.main', mr: 1, fontSize: 32 }} />
          <Typography variant="h6" noWrap component="div" fontWeight="700" sx={{ letterSpacing: '-0.5px' }}>
            Escudo Cidadão
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Menu Lateral (Drawer) */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        
        {/* Drawer Temporário (Mobile) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Melhora a performance de abertura no mobile
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.paper' },
          }}
        >
          <Toolbar />
          {drawerContent}
        </Drawer>

        {/* Drawer Permanente (Desktop) */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.default', borderRight: '1px solid rgba(255, 255, 255, 0.08)' },
          }}
          open
        >
          <Toolbar />
          {drawerContent}
        </Drawer>
      </Box>

      {/* Área Principal de Conteúdo */}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, pt: { xs: 10, md: 12 }, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        {children}
      </Box>
    </Box>
  );
};
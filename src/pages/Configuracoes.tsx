import { useState } from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Switch, Divider, Button, Avatar, alpha, useTheme } from '@mui/material';
import { NotificationsActive, Security, Email, Phishing, VpnKey, DeleteForever } from '@mui/icons-material';

export const Configuracoes = () => {
  const theme = useTheme();
  const [alertsEmail, setAlertsEmail] = useState(true);
  const [alertsPush, setAlertsPush] = useState(true);
  const [autoScan, setAutoScan] = useState(true);
  const [darkWebMonitor, setDarkWebMonitor] = useState(true);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', pb: 4 }}>
      <Box sx={{ mb: 5, mt: { xs: 2, md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h4" fontWeight="800" gutterBottom>Configurações</Typography>
        <Typography variant="body1" color="text.secondary">Gerencie suas preferências de segurança e alertas da conta.</Typography>
      </Box>

      <Card sx={{ borderRadius: 4, bgcolor: 'background.paper', mb: 4 }}>
        <CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', textAlign: { xs: 'center', sm: 'left' }, p: { xs: 3, sm: 4 }, gap: 3 }}>
          <Avatar src="https://github.com/renanfrontend.png" alt="Renan" sx={{ width: { xs: 100, sm: 80 }, height: { xs: 100, sm: 80 }, border: '3px solid', borderColor: alpha(theme.palette.primary.main, 0.5), boxShadow: '0 4px 14px 0 rgba(0,0,0,0.5)' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' } }}>
            <Typography variant="h5" fontWeight="700">Renan</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1, mt: 0.5 }}><Email fontSize="small" /> renan.gabba@gmail.com</Typography>
            <Button size="small" variant="outlined" sx={{ mt: 2, borderRadius: 2 }}>Editar Perfil</Button>
          </Box>
        </CardContent>
      </Card>

      <Typography variant="h6" fontWeight="700" sx={{ mb: 2, px: 1, textAlign: { xs: 'center', sm: 'left' } }}>Notificações e Alertas</Typography>
      <Card sx={{ borderRadius: 4, bgcolor: 'background.paper', mb: 4 }}>
        <List disablePadding>
          <ListItem sx={{ py: 3, px: { xs: 2, sm: 4 }, pr: { xs: 8, sm: 10 } }} secondaryAction={<Switch checked={alertsEmail} onChange={(e) => setAlertsEmail(e.target.checked)} color="secondary" />}>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'flex' } }}><Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.secondary.main, 0.1), color: 'secondary.light' }}><Email /></Box></ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1" fontWeight="600">Relatório por E-mail</Typography>} secondary="Resumo das ameaças semanais." />
          </ListItem>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
          <ListItem sx={{ py: 3, px: { xs: 2, sm: 4 }, pr: { xs: 8, sm: 10 } }} secondaryAction={<Switch checked={alertsPush} onChange={(e) => setAlertsPush(e.target.checked)} color="primary" />}>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'flex' } }}><Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.light' }}><NotificationsActive /></Box></ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1" fontWeight="600">Alertas em Tempo Real</Typography>} secondary="Notificação push de perigos." />
          </ListItem>
        </List>
      </Card>

      <Typography variant="h6" fontWeight="700" sx={{ mb: 2, px: 1, textAlign: { xs: 'center', sm: 'left' } }}>Módulos de Proteção</Typography>
      <Card sx={{ borderRadius: 4, bgcolor: 'background.paper', mb: 4 }}>
        <List disablePadding>
          <ListItem sx={{ py: 3, px: { xs: 2, sm: 4 }, pr: { xs: 8, sm: 10 } }} secondaryAction={<Switch checked={autoScan} onChange={(e) => setAutoScan(e.target.checked)} color="success" />}>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'flex' } }}><Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.success.main, 0.1), color: 'success.light' }}><Phishing /></Box></ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1" fontWeight="600">Filtro Anti-Phishing</Typography>} secondary="Bloqueia sites perigosos." />
          </ListItem>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
          <ListItem sx={{ py: 3, px: { xs: 2, sm: 4 }, pr: { xs: 8, sm: 10 } }} secondaryAction={<Switch checked={darkWebMonitor} onChange={(e) => setDarkWebMonitor(e.target.checked)} color="warning" />}>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'flex' } }}><Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.warning.main, 0.1), color: 'warning.light' }}><Security /></Box></ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1" fontWeight="600">Radar Dark Web</Typography>} secondary="Busca por senhas vazadas." />
          </ListItem>
        </List>
      </Card>

      <Typography variant="h6" fontWeight="700" color="error.main" sx={{ mb: 2, px: 1, textAlign: { xs: 'center', sm: 'left' } }}>Zona de Perigo</Typography>
      <Card sx={{ borderRadius: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: alpha(theme.palette.error.main, 0.3) }}>
        <List disablePadding>
          <ListItem sx={{ py: 3, px: { xs: 2, sm: 4 }, pr: { xs: 14, sm: 16 } }} secondaryAction={<Button variant="outlined" color="inherit" size="small" sx={{ borderRadius: 2 }}>Trocar</Button>}>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'flex' } }}><Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.error.main, 0.1), color: 'error.main' }}><VpnKey /></Box></ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1" fontWeight="600">Alterar Senha</Typography>} secondary="A cada 6 meses." />
          </ListItem>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
          <ListItem sx={{ py: 3, px: { xs: 2, sm: 4 }, pr: { xs: 14, sm: 16 } }} secondaryAction={<Button variant="contained" color="error" size="small" sx={{ borderRadius: 2, boxShadow: 'none' }}>Excluir</Button>}>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'flex' } }}><Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.error.main, 0.1), color: 'error.main' }}><DeleteForever /></Box></ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1" fontWeight="600" color="error.main">Excluir Conta</Typography>} secondary="Ação permanente." />
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};
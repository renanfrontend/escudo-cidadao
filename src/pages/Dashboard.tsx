import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  CircularProgress, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Chip,
  Button,
  Divider,
  alpha,
  useTheme
} from '@mui/material';
import { 
  Visibility, 
  WarningAmber, 
  CheckCircleOutline,
  LocationOn,
  ArrowForward,
  Link as LinkIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const recentActivities = [
    { 
      id: 1, 
      action: 'Novo acesso detectado', 
      details: 'Dispositivo desconhecido • Localização: Guarulhos, SP', 
      time: 'Há 2 horas', 
      type: 'warning', 
      icon: <LocationOn /> 
    },
    { 
      id: 2, 
      action: 'Link suspeito bloqueado', 
      details: 'promocao-gratis.com/ganhe', 
      time: 'Ontem', 
      type: 'error', 
      icon: <WarningAmber /> 
    },
    { 
      id: 3, 
      action: 'Varredura da Dark Web', 
      details: 'Nenhum vazamento encontrado', 
      time: '20 Fev', 
      type: 'success', 
      icon: <CheckCircleOutline /> 
    },
  ];

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'warning': return '#f59e0b'; 
      case 'error': return theme.palette.error.main;
      case 'success': return theme.palette.success.main; 
      default: return theme.palette.primary.main;
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      
      {/* Cabeçalho */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, mt: { xs: 2, md: 0 } }}>
        <Box>
          <Typography variant="h4" fontWeight="800" gutterBottom>
            {getGreeting()}, Renan!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Aqui está o resumo da sua blindagem digital de hoje.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          endIcon={<ArrowForward />}
          onClick={() => navigate('/scanner')}
          sx={{ display: { xs: 'none', sm: 'flex' }, borderRadius: 3, py: 1.5, px: 3 }}
        >
          Analisar Link
        </Button>
      </Box>

      {/* Container Principal usando CSS Grid Nativo */}
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' }, 
          gap: 3 
        }}
      >
        
        {/* Score Principal (Ocupa 4 colunas de 12 no Desktop) */}
        <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 4' } }}>
          <Card sx={{ height: '100%', borderRadius: 4, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: -50, right: -50, width: 150, height: 150, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(theme.palette.success.main, 0.15)} 0%, transparent 70%)` }} />
            
            <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>Score de Segurança</Typography>
            
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={100} size={160} thickness={4} sx={{ color: alpha(theme.palette.success.main, 0.1) }} />
              <CircularProgress variant="determinate" value={85} size={160} thickness={4} sx={{ color: 'success.main', position: 'absolute', left: 0 }} />
              
              <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography variant="h3" component="div" fontWeight="800" color="text.primary">
                  85
                </Typography>
                <Typography variant="caption" component="div" color="success.main" fontWeight="800">
                  BOM
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 3 }}>
              Sua conta está bem protegida, mas há 1 alerta pendente de revisão.
            </Typography>
          </Card>
        </Box>

        {/* Lado Direito: Mini Cards e Lista (Ocupa 8 colunas de 12 no Desktop) */}
        <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 8' } }}>
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, 
              gap: 3 
            }}
          >
            
            {/* Card 1 */}
            <Box sx={{ gridColumn: 'span 1' }}>
              <Card sx={{ height: '100%', borderRadius: 4, p: 2, bgcolor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.light', mr: 2 }}>
                      <LinkIcon />
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary" fontWeight="600">Links Verificados</Typography>
                  </Box>
                  <Typography variant="h4" fontWeight="800">142</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Card 2 */}
            <Box sx={{ gridColumn: 'span 1' }}>
              <Card sx={{ height: '100%', borderRadius: 4, p: 2, bgcolor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: alpha(theme.palette.secondary.main, 0.1), color: 'secondary.light', mr: 2 }}>
                      <Visibility />
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary" fontWeight="600">E-mails Monitorados</Typography>
                  </Box>
                  <Typography variant="h4" fontWeight="800">2</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Lista de Atividades (Ocupa as 2 colunas do container dela) */}
            <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
              <Card sx={{ borderRadius: 4, bgcolor: 'background.paper' }}>
                <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h6" fontWeight="700">Atividades Recentes</Typography>
                  <Button size="small" sx={{ textTransform: 'none' }}>Ver tudo</Button>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
                <List disablePadding>
                  {recentActivities.map((activity, index) => (
                    <Box key={activity.id}>
                      <ListItem sx={{ py: 2.5, px: 3 }}>
                        <ListItemIcon sx={{ minWidth: 50 }}>
                          <Box sx={{ p: 1, borderRadius: '50%', bgcolor: alpha(getStatusColor(activity.type), 0.1), color: getStatusColor(activity.type), display: 'flex' }}>
                            {activity.icon}
                          </Box>
                        </ListItemIcon>
                        <ListItemText 
                          primary={<Typography variant="subtitle2" fontWeight="700" sx={{ mb: 0.5 }}>{activity.action}</Typography>}
                          secondary={<Typography variant="body2" color="text.secondary">{activity.details}</Typography>}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 100 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>{activity.time}</Typography>
                          <Chip 
                            size="small" 
                            label={activity.type === 'error' ? 'Bloqueado' : activity.type === 'warning' ? 'Revisar' : 'Seguro'} 
                            sx={{ height: 20, fontSize: '0.7rem', fontWeight: 'bold', bgcolor: alpha(getStatusColor(activity.type), 0.15), color: getStatusColor(activity.type) }} 
                          />
                        </Box>
                      </ListItem>
                      {index < recentActivities.length - 1 && <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />}
                    </Box>
                  ))}
                </List>
              </Card>
            </Box>

          </Box>
        </Box>

      </Box>
    </Box>
  );
};
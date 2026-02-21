import { Box, Typography, IconButton, Link, Divider, Button, Tooltip } from '@mui/material';
import { GitHub, LinkedIn, Instagram, WhatsApp } from '@mui/icons-material';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Mensagem pré-formatada para o WhatsApp (já convertida para URL)
  const whatsappMessage = encodeURIComponent("Olá Renan! Achei incrível o projeto Escudo Cidadão. Gostaria de conversar sobre o desenvolvimento de um aplicativo e solicitar um orçamento.");
  
  // Substitua o 5511999999999 pelo seu número (55 = Brasil, 11 = DDD, 9... = Número)
  const whatsappLink = `https://wa.me/5511965781243?text=${whatsappMessage}`;

  return (
    <Box component="footer" sx={{ mt: 'auto', pt: 6, pb: 2 }}>
      <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.05)' }} />
      
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: 3 
        }}
      >
        <Typography variant="body2" color="text.secondary" textAlign="center">
          &copy; {currentYear} Escudo Cidadão. Todos os direitos reservados.
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Desenvolvido por{' '}
          <Link 
            href="https://github.com/renanfrontend" 
            target="_blank" 
            rel="noopener noreferrer"
            color="primary.main" 
            underline="hover" 
            fontWeight="bold"
          >
            Renan Augusto
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Ícones das Redes Sociais */}
          <IconButton 
            href="https://github.com/renanfrontend" 
            target="_blank" 
            color="inherit" 
            size="small" 
            sx={{ color: 'text.secondary', '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' } }}
          >
            <GitHub fontSize="small" />
          </IconButton>
          <IconButton 
            href="https://linkedin.com/in/renan-augusto-santos" 
            target="_blank" 
            color="inherit" 
            size="small" 
            sx={{ color: 'text.secondary', '&:hover': { color: '#0a66c2', bgcolor: 'rgba(10,102,194,0.1)' } }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
          <IconButton 
            href="https://instagram.com/renanbrocanelli.dev" 
            target="_blank" 
            color="inherit" 
            size="small" 
            sx={{ color: 'text.secondary', '&:hover': { color: '#e1306c', bgcolor: 'rgba(225,48,108,0.1)' } }}
          >
            <Instagram fontSize="small" />
          </IconButton>

          {/* Divisória vertical sutil */}
          <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1, borderColor: 'rgba(255,255,255,0.1)' }} />

          {/* Botão de Orçamento (WhatsApp) - CTA de Vendas */}
          <Tooltip title="Solicite um orçamento para o seu projeto!" arrow placement="top">
            <Button
              variant="outlined"
              size="small"
              href={whatsappLink}
              target="_blank"
              startIcon={<WhatsApp />}
              sx={{
                color: '#25D366',
                borderColor: 'rgba(37, 211, 102, 0.4)',
                textTransform: 'none',
                borderRadius: 2,
                fontWeight: 600,
                px: 2,
                '&:hover': {
                  borderColor: '#25D366',
                  bgcolor: 'rgba(37, 211, 102, 0.1)',
                }
              }}
            >
              Criar meu App
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
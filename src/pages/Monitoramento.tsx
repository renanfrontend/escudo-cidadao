import { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, InputAdornment, Chip, Alert, AlertTitle, Accordion, AccordionSummary, AccordionDetails, Divider, Paper, alpha, useTheme } from '@mui/material';
import { Email, Search, ExpandMore, WarningAmber, VpnKey, Badge, GppGood, Language } from '@mui/icons-material';

type Leak = { id: number; source: string; date: string; compromisedData: string[]; description: string; };

export const Monitoramento = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [leaks, setLeaks] = useState<Leak[]>([]);

  const mockLeaks: Leak[] = [
    { id: 1, source: 'LinkedIn (Vazamento Histórico)', date: 'Maio de 2016', compromisedData: ['E-mails', 'Senhas'], description: 'Em 2016, milhões de credenciais do LinkedIn foram colocadas à venda na Dark Web.' },
    { id: 2, source: 'Canva', date: 'Maio de 2019', compromisedData: ['E-mails', 'Nomes', 'Localização'], description: 'O Canva sofreu uma violação de dados que expôs informações de milhões de usuários.' }
  ];

  const handleCheck = () => {
    if (!email.trim() || !email.includes('@')) return;
    setIsLoading(true);
    setHasSearched(false);

    setTimeout(() => {
      if (email.toLowerCase().includes('seguro')) setLeaks([]);
      else setLeaks(mockLeaks);
      setIsLoading(false);
      setHasSearched(true);
    }, 2500);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Box sx={{ textAlign: 'center', mb: 5, mt: { xs: 2, md: 4 } }}>
        <Typography variant="h4" fontWeight="800" gutterBottom>Radar da Dark Web</Typography>
        <Typography variant="body1" color="text.secondary">Descubra se o seu e-mail e senhas foram expostos em vazamentos de dados.</Typography>
      </Box>

      <Paper
        component="form"
        elevation={0}
        onSubmit={(e) => { e.preventDefault(); handleCheck(); }}
        sx={{
          p: { xs: 2, sm: '4px' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          alignItems: 'center',
          borderRadius: 4,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.08)',
          mb: 4,
          transition: 'all 0.3s ease',
          '&:focus-within': { borderColor: 'primary.main', boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}` }
        }}
      >
        <TextField
          fullWidth
          placeholder="Digite seu e-mail principal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          InputProps={{ startAdornment: <InputAdornment position="start" sx={{ pl: 1.5, color: 'text.secondary' }}><Email /></InputAdornment> }}
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              bgcolor: 'transparent',
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
            },
            '& .MuiInputBase-input': {
               py: 2, fontSize: '1.05rem',
               '&:-webkit-autofill': {
                transition: 'background-color 5000s ease-in-out 0s',
                WebkitTextFillColor: theme.palette.text.primary,
                boxShadow: `0 0 0px 1000px ${theme.palette.background.paper} inset`,
              },
              '&:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                boxShadow: `0 0 0px 1000px ${theme.palette.background.paper} inset`,
              },
            }
          }}
        />
        <Button
          variant="contained"
          size="large"
          onClick={handleCheck}
          disabled={!email.trim() || !email.includes('@') || isLoading}
          startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Search />}
          sx={{
            width: { xs: '100%', sm: 'auto' },
            borderRadius: 3, px: { xs: 3, sm: 4 }, py: 1.5, minWidth: { sm: 140 }, m: '4px',
            boxShadow: 'none', '&:hover': { boxShadow: 'none' }
          }}
        >
          {isLoading ? 'Buscando...' : 'Verificar'}
        </Button>
      </Paper>

      {hasSearched && (
        <Box sx={{ animation: 'fadeIn 0.5s ease-in-out' }}>
          {leaks.length === 0 ? (
            <Alert icon={<GppGood fontSize="inherit" />} severity="success" sx={{ borderRadius: 4, p: 3, bgcolor: alpha(theme.palette.success.main, 0.1), color: 'success.light', '& .MuiAlert-icon': { color: 'success.main', fontSize: 32 } }}>
              <AlertTitle sx={{ fontWeight: 'bold', fontSize: '1.2rem', mb: 1 }}>Nenhum vazamento encontrado!</AlertTitle>
              Boas notícias! Não encontramos o e-mail <strong>{email}</strong> na Dark Web.
            </Alert>
          ) : (
            <Box>
              <Alert icon={<WarningAmber fontSize="inherit" />} severity="error" sx={{ borderRadius: 4, p: 3, mb: 4, bgcolor: alpha(theme.palette.error.main, 0.1), color: '#fca5a5', '& .MuiAlert-icon': { color: 'error.main', fontSize: 32 } }}>
                <AlertTitle sx={{ fontWeight: 'bold', fontSize: '1.2rem', mb: 1, color: 'error.main' }}>Atenção: Dados Comprometidos!</AlertTitle>
                O e-mail <strong>{email}</strong> apareceu em <strong>{leaks.length}</strong> vazamentos de dados.
              </Alert>

              <Typography variant="h6" fontWeight="700" sx={{ mb: 2, px: 1 }}>Detalhes dos Vazamentos</Typography>

              {leaks.map((leak) => (
                <Accordion key={leak.id} disableGutters elevation={0} sx={{ bgcolor: 'background.paper', mb: 2, borderRadius: '16px !important', border: '1px solid', borderColor: 'rgba(255,255,255,0.05)', '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'text.secondary' }} />} sx={{ p: { xs: 2, sm: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: alpha(theme.palette.error.main, 0.1), color: 'error.main', display: { xs: 'none', sm: 'flex' } }}><Language /></Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="700">{leak.source}</Typography>
                        <Typography variant="body2" color="text.secondary">Vazado em {leak.date}</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 2, sm: 3 }, pb: 3, pt: 0 }}>
                    <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.05)' }} />
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}>{leak.description}</Typography>
                    <Typography variant="caption" fontWeight="bold" color="text.primary" sx={{ mb: 1, display: 'block', textTransform: 'uppercase', letterSpacing: 1 }}>Dados Comprometidos:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {leak.compromisedData.map((data, index) => (
                        <Chip key={index} icon={data.toLowerCase().includes('senha') ? <VpnKey /> : <Badge />} label={data} size="small" sx={{ bgcolor: data.toLowerCase().includes('senha') ? alpha(theme.palette.error.main, 0.2) : 'rgba(255,255,255,0.08)', color: data.toLowerCase().includes('senha') ? '#fca5a5' : 'text.primary', fontWeight: 'bold', border: '1px solid', borderColor: data.toLowerCase().includes('senha') ? 'error.main' : 'transparent', '& .MuiChip-icon': { color: 'inherit' } }} />
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
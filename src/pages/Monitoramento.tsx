import { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Alert, Accordion, AccordionSummary, AccordionDetails, Paper, useTheme, Chip } from '@mui/material';
import { Email, ExpandMore, WarningAmber, GppGood } from '@mui/icons-material';

export const Monitoramento = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [leaks, setLeaks] = useState<any[]>([]);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

  const handleCheck = async () => {
    if (!email.includes('@')) return;
    setIsLoading(true);
    setHasSearched(false);

    try {
      const response = await fetch(`${API_URL}/api/monitor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setLeaks(data.leaks || []);
      setHasSearched(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="800" textAlign="center" gutterBottom>Radar da Dark Web</Typography>
      
      <Paper sx={{ p: 1, mt: 4, display: 'flex', gap: 1, borderRadius: 4, bgcolor: 'background.paper' }}>
        <TextField
          fullWidth placeholder="seu-email@exemplo.com" value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ 
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiInputBase-input:-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                WebkitTextFillColor: theme.palette.text.primary,
            }
          }}
          InputProps={{ startAdornment: <Email sx={{ ml: 1, mr: 1, color: 'text.secondary' }} /> }}
        />
        <Button variant="contained" onClick={handleCheck} disabled={isLoading} sx={{ borderRadius: 3, px: 4 }}>
          {isLoading ? <CircularProgress size={24} /> : 'Verificar'}
        </Button>
      </Paper>

      {hasSearched && (
        <Box sx={{ mt: 5 }}>
          {leaks.length === 0 ? (
            <Alert severity="success" icon={<GppGood />} sx={{ borderRadius: 3 }}>Tudo limpo!</Alert>
          ) : (
            <Box>
              <Alert severity="error" icon={<WarningAmber />} sx={{ borderRadius: 3, mb: 3 }}>Atenção em {leaks.length} vazamentos.</Alert>
              {leaks.map((leak) => (
                <Accordion key={leak.id} sx={{ mb: 1, borderRadius: '12px !important' }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight="700">{leak.source}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">{leak.description}</Typography>
                    <Box sx={{ mt: 2 }}>{leak.compromisedData.map((d: any) => <Chip key={d} label={d} size="small" sx={{ mr: 1 }} />)}</Box>
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
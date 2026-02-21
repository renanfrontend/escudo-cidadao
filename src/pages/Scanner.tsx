import { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CircularProgress, InputAdornment, IconButton, alpha, useTheme } from '@mui/material';
import { Search, GppBad, GppGood, Clear } from '@mui/icons-material';

export const Scanner = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

  const handleScan = async () => {
    if (!inputValue.trim()) return;
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/api/scan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: inputValue }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult({ isSafe: false, message: 'Erro de Conexão', details: 'Verifique se a API está online.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="800" gutterBottom>Verificador de Links</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>Analise URLs em tempo real.</Typography>

      <Card sx={{ p: 2, borderRadius: 4, bgcolor: 'background.paper' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Cole a URL aqui..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleScan()}
          sx={{ 
            '& .MuiOutlinedInput-root': { borderRadius: 3 },
            // MÁGICA PARA REMOVER O FUNDO AZUL DO NAVEGADOR
            '& .MuiInputBase-input:-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                WebkitTextFillColor: theme.palette.text.primary,
                borderRadius: 'inherit',
            }
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search color="primary" /></InputAdornment>,
            endAdornment: inputValue && (
              <InputAdornment position="end">
                <IconButton onClick={() => { setInputValue(''); setResult(null); }}><Clear /></IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button 
          fullWidth variant="contained" size="large" onClick={handleScan} 
          disabled={isLoading || !inputValue} sx={{ mt: 2, borderRadius: 3, py: 1.5 }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Analisar Agora'}
        </Button>
      </Card>

      {result && (
        <Card sx={{ mt: 4, borderRadius: 4, border: '1px solid', borderColor: result.isSafe ? 'success.main' : 'error.main', bgcolor: alpha(result.isSafe ? theme.palette.success.main : theme.palette.error.main, 0.05) }}>
          <CardContent sx={{ p: 4 }}>
            {result.isSafe ? <GppGood sx={{ fontSize: 60, color: 'success.main' }} /> : <GppBad sx={{ fontSize: 60, color: 'error.main' }} />}
            <Typography variant="h5" fontWeight="700" sx={{ mt: 2 }}>{result.message}</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>{result.details}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};
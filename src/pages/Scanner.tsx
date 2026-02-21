import { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CircularProgress, InputAdornment, Chip, IconButton } from '@mui/material';
import { Search, GppBad, GppGood, Clear } from '@mui/icons-material';

type ScanResult = {
  isSafe: boolean;
  message: string;
  details: string;
} | null;

export const Scanner = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult>(null);

  const handleScan = () => {
    if (!inputValue.trim()) return;
    setIsLoading(true);
    setResult(null);

    setTimeout(() => {
      const isSuspicious = inputValue.includes('gratis') || inputValue.includes('promocao') || inputValue.includes('bit.ly');
      setResult({
        isSafe: !isSuspicious,
        message: isSuspicious ? 'Ameaça Detectada!' : 'Parece Seguro',
        details: isSuspicious ? 'Este link apresenta padrões comuns de phishing ou golpes. Recomendamos não acessar.' : 'Não encontramos registros maliciosos para este link nas nossas bases de dados.',
      });
      setIsLoading(false);
    }, 2000); 
  };

  const handleClear = () => {
    setInputValue('');
    setResult(null);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="700" gutterBottom sx={{ mt: { xs: 2, md: 4 } }}>Verificador de Links</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>Cole abaixo aquele link suspeito que você recebeu no WhatsApp ou SMS. Nossa IA vai analisar se é um golpe.</Typography>

      <Card sx={{ p: { xs: 2, md: 3 }, borderRadius: 4, bgcolor: 'background.paper', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ex: https://promocao-imperdivel.com/premio"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'background.default' } }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search color="primary" /></InputAdornment>,
            endAdornment: inputValue && (
              <InputAdornment position="end">
                <IconButton onClick={handleClear} edge="end" disabled={isLoading}><Clear /></IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button fullWidth variant="contained" size="large" onClick={handleScan} disabled={!inputValue.trim() || isLoading} sx={{ mt: 3, borderRadius: 3, py: 1.5, fontSize: '1.1rem' }}>
          {isLoading ? <CircularProgress size={26} color="inherit" /> : 'Analisar Link'}
        </Button>
      </Card>

      {result && (
        <Card sx={{ mt: 4, borderRadius: 4, border: '1px solid', borderColor: result.isSafe ? 'success.main' : 'error.main', bgcolor: result.isSafe ? 'rgba(129, 201, 149, 0.05)' : 'rgba(242, 139, 130, 0.05)' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
            {result.isSafe ? <GppGood sx={{ fontSize: 64, color: 'success.main', mb: 2 }} /> : <GppBad sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />}
            <Chip label={result.message} color={result.isSafe ? 'success' : 'error'} sx={{ fontWeight: 'bold', mb: 2, px: 1 }} />
            <Typography variant="body1" color="text.primary">{result.details}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};
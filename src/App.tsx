import { Routes, Route } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Scanner } from './pages/Scanner'; // Importamos a nossa nova tela!

// Placeholder para as telas que ainda não criamos
const Placeholder = ({ title }: { title: string }) => (
  <Box>
    <Typography variant="h4" color="primary" gutterBottom fontWeight="bold">{title}</Typography>
    <Typography variant="body1" color="text.secondary">
      Esta jornada está em construção. Em breve você poderá interagir com os componentes reais aqui.
    </Typography>
  </Box>
);

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Placeholder title="Painel Operacional" />} />
        
        {/* Usando o componente real aqui! */}
        <Route path="/scanner" element={<Scanner />} /> 
        
        <Route path="/monitoramento" element={<Placeholder title="Monitoramento de Vazamentos" />} />
        <Route path="/configuracoes" element={<Placeholder title="Configurações" />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
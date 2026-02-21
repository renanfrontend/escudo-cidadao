import { Routes, Route } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Scanner } from './pages/Scanner';
import { Dashboard } from './pages/Dashboard';
import { Monitoramento } from './pages/Monitoramento'; // Adiciona esta importação

const Placeholder = ({ title }: { title: string }) => (
  <Box>
    <Typography variant="h4" color="primary" gutterBottom fontWeight="bold">{title}</Typography>
    <Typography variant="body1" color="text.secondary">
      Esta jornada está em construção.
    </Typography>
  </Box>
);

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/scanner" element={<Scanner />} />
        
        {/* Adiciona a página real de Monitoramento aqui! */}
        <Route path="/monitoramento" element={<Monitoramento />} />
        
        <Route path="/configuracoes" element={<Placeholder title="Configurações" />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
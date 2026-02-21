import { Routes, Route } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Scanner } from './pages/Scanner';
import { Dashboard } from './pages/Dashboard'; // Importamos a Home!

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
        {/* Agora a rota "/" aponta pro nosso Painel Operacional! */}
        <Route path="/" element={<Dashboard />} /> 
        
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/monitoramento" element={<Placeholder title="Monitoramento de Vazamentos" />} />
        <Route path="/configuracoes" element={<Placeholder title="Configurações" />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
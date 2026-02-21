import { Routes, Route } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { DashboardLayout } from './layouts/DashboardLayout';

// Componente temporário até criarmos as telas reais
const Placeholder = ({ title }: { title: string }) => (
  <Box>
    <Typography variant="h2" color="primary" gutterBottom>{title}</Typography>
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
        <Route path="/scanner" element={<Placeholder title="Verificação (Scanner)" />} />
        <Route path="/monitoramento" element={<Placeholder title="Monitoramento de Vazamentos" />} />
        <Route path="/configuracoes" element={<Placeholder title="Configurações" />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Scanner } from './pages/Scanner';
import { Dashboard } from './pages/Dashboard';
import { Monitoramento } from './pages/Monitoramento';
import { Configuracoes } from './pages/Configuracoes';

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
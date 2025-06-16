// Este comentario fuerza un nuevo deploy en Vercel 🚀

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReportarMascota from './components/ReportarMascota';
import VerReportes from './components/VerReportes';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Reportar Mascota</Link> |{' '}
        <Link to="/reportes">Ver Reportes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ReportarMascota />} />
        <Route path="/reportes" element={<VerReportes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


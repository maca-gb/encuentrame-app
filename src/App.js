import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [reportType, setReportType] = useState('');
  const [reports, setReports] = useState([]);
  const [form, setForm] = useState({
    type: '',
    description: '',
    location: '',
    contact: '',
    image: ''
  });

  useEffect(() => {
    const fetchReports = async () => {
      const { data, error } = await supabase.from('reports').select('*').order('created_at', { ascending: false });
      if (error) console.error('Error al cargar reportes:', error);
      else setReports(data);
    };
    fetchReports();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('reports').insert([{ ...form, type: reportType }]);
    if (error) {
      alert('Error al guardar el reporte');
      console.error(error);
    } else {
      alert('¡Reporte guardado!');
      setReports([data[0], ...reports]);
      setForm({ type: '', description: '', location: '', contact: '', image: '' });
      setReportType('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial' }}>
      <h1>🐾 Encuéntrame</h1>
      <p>Ayudemos a reunir animales perdidos y encontrados en Uruguay.</p>

      {!reportType && (
        <div style={{ margin: '20px 0' }}>
          <button onClick={() => setReportType('perdido')} style={{ marginRight: 10 }}>Reportar Perdido</button>
          <button onClick={() => setReportType('encontrado')}>Reportar Encontrado</button>
        </div>
      )}

      {reportType && (
        <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
          <h2>Reportar animal {reportType}</h2>
          <input
            type="text"
            placeholder="Descripción"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
          <input
            type="text"
            placeholder="Ubicación"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
          <input
            type="text"
            placeholder="Contacto"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
          <input
            type="text"
            placeholder="Imagen (URL opcional)"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            style={{ width: '100%', marginBottom: 10 }}
          />
          <button type="submit">Enviar reporte</button>
        </form>
      )}

      <h2>📍 Reportes recientes</h2>
      {reports.length === 0 ? (
        <p>No hay reportes aún.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {reports.map((r, i) => (
            <li key={i} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
              <strong>{r.type.toUpperCase()}</strong><br />
              Descripción: {r.description}<br />
              Ubicación: {r.location}<br />
              Contacto: {r.contact}<br />
              {r.image && <img src={r.image} alt="animal" style={{ width: '100%', maxHeight: 200, objectFit: 'cover', marginTop: 10 }} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

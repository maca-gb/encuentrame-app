import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function VerReportes() {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    fetchReportes();
  }, []);

  const fetchReportes = async () => {
    const { data, error } = await supabase.from('reports').select('*');
    if (error) console.error(error);
    else setReportes(data);
  };

  return (
    <div>
      <h1>Reportes de Mascotas</h1>
      {reportes.map((reporte) => (
        <div key={reporte.id}>
          <img src={reporte.Image} alt="Mascota" width="200" />
          <p>Descripción: {reporte.Description}</p>
          <p>Ubicación: {reporte.Location}</p>
          <p>Contacto: {reporte.Contact}</p>
        </div>
      ))}
    </div>
  );
}

export default VerReportes;

import React, { useState } from 'react';
import UploadFoto from './components/UploadFoto';

function App() {
  const [formData, setFormData] = useState({
    descripcion: '',
    ubicacion: '',
    contacto: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Reporte enviado! (simulado)');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>🐾 Reportar Animal Encontrado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }}
        />
        <input
          type="text"
          name="ubicacion"
          placeholder="Ubicación"
          value={formData.ubicacion}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }}
        />
        <input
          type="text"
          name="contacto"
          placeholder="Contacto"
          value={formData.contacto}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }}
        />

        {/* Botón Examinar para adjuntar imagen */}
        <UploadFoto />

        <button type="submit" style={{ marginTop: 15, padding: 10, width: '100%' }}>
          Enviar reporte
        </button>
      </form>
    </div>
  );
}

export default App;

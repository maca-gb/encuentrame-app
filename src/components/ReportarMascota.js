import React, { useState } from 'react';

function ReportarMascota() {
  const [foto, setFoto] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [contacto, setContacto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ foto, descripcion, ubicacion, contacto });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reportar Mascota</h1>

      <label>Foto:</label>
      <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} />

      <label>Descripción:</label>
      <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

      <label>Ubicación:</label>
      <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />

      <label>Contacto:</label>
      <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} />

      <button type="submit">Enviar reporte</button>
    </form>
  );
}

export default ReportarMascota;

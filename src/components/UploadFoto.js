import React, { useState } from 'react';

function UploadFoto() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log('Archivo seleccionado:', event.target.files[0]);
  };

  return (
    <div>
      <h2>Adjuntar foto del perrito perdido</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <p>Archivo: {file.name}</p>}
    </div>
  );
}

export default UploadFoto;

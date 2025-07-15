import { useState } from 'react';

export default function ConvertPDF() {
  const [file, setFile] = useState(null);

  const handleConvert = () => {
    if (file && file.name.endsWith('.pdf')) {
      alert("PDF converted to JPG (demo only).");
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Convert PDF to JPG</h2>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}
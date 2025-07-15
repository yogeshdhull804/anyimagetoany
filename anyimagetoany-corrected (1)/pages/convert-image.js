import { useState } from 'react';

export default function ConvertImage() {
  const [file, setFile] = useState(null);

  const handleConvert = () => {
    if (file) {
      alert("Converted successfully (demo only).");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Convert Image</h2>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}
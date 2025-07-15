export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>AnyImageToAny</h1>
      <p>Select a conversion type:</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <a href="/convert-image">Convert Image</a>
        <a href="/convert-pdf">Convert PDF to JPG</a>
      </div>
    </div>
  );
}
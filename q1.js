import React, { useState } from 'react';
import './App.css';

function App() {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState({});
  const [error, setError] = useState('');

  const fetchNumbers = async () => {
    try {
      const response = await fetch(`/numbers?${urls}`);
      if (!response.ok) {
        setError('Error fetching data');
        return;
      }
      const data = await response.json();
      setResult(data);
      setError('');
    } catch (error) {
      setError('Error fetching data');
    }
  };

  const handleUrlsChange = (event) => {
    setUrls(event.target.value);
  };

  return (
    <div className="App">
      <h1>Number Management App</h1>
      <div>
        <label>Enter URLs separated by commas:</label>
        <input type="text" value={urls} onChange={handleUrlsChange} />
      </div>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Result:</h2>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;

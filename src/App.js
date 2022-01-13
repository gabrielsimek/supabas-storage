import { upload } from './services/images';
import { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const res = await upload(file);
    console.log(`\x1b[35m%s\x1b[0m`, 'res: ', res);
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          console.log(`\x1b[35m%s\x1b[0m`, 'e.target.files: ', e.target.files, [...e.target.files]);
          setFile(e.target.files[0]);
        }}
      />
      {file && (
        <>
          <div className="output">
            <img alt="output" src={URL.createObjectURL(file)} />
          </div>
          <button onClick={handleUpload}>Upload to Supabase</button>
        </>
      )}
    </div>
  );
}

export default App;

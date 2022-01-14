import { upload, getImageUrl } from './services/images';
import { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = async () => {
    const res = await upload(file, name);
    console.log(`\x1b[35m%s\x1b[0m`, 'res: ', res);
    alert('Probably uploaded');
  };

  const handleGetUrl = () => {
    const url = getImageUrl(fileName);
    setImageUrl(url);
  };

  return (
    // SET IMAGE
    <div className="App">
      <label>Enter Optional File Name</label>
      <input type="text" onChange={(e) => {
        setName(e.target.value);
      }}/>
      <input
        type="file"
        onChange={(e) => {
          // console.log(`\x1b[35m%s\x1b[0m`, 'e.target.files: ', e.target.files, [...e.target.files]);
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
  
      {/* GET IMAGE */}
      <div>
        <h3>Image from Supabase</h3>
        {imageUrl && <div className="output">
          <img alt="output" src={imageUrl} />
        </div>}
        <input
          type='text'
          value={fileName} 
          onChange={({ target }) => setFileName(target.value)}
        />
        <button onClick={handleGetUrl}>Get Image</button>
      </div>
    </div>
  );
}

export default App;

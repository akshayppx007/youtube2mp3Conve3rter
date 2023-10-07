import { useState } from "react";
import axios from "axios";

function Mp3Converter() {

    const [url1, setUrl] = useState();

    const downloadMp3 = async () => {
        try {
          const response = await axios.post('/api/v1/url/convert', { videoUrl: url1 }, {
            responseType: 'blob', 
          });
      
          const blob = new Blob([response.data], { type: 'audio/mpeg' });
      
          const url = window.URL.createObjectURL(blob);
      
          const a = document.createElement('a');
          a.href = url;
          a.download = 'downloaded.mp3';
      
          a.click();
      
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const handleChange = (e) => {
        setUrl(e.target.value);
      }

  return (
    <>
      <div className="top-container">
        <form id="form">
          <h1>
            <i className="fab fa-youtube"></i> YouTube 2 MP3 Converter
          </h1>
          <h4>Enter the video ID</h4>
          <div>
            <input type="text" name="videoId" placeholder="Video ID..." onChange={handleChange} ></input>
            <button type="button" id="submit-btn" onClick={() => downloadMp3()}>Convert</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Mp3Converter;

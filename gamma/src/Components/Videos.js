// Videos.js
import React from 'react';

const Videos = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,}}>
      <div className="video-container" style={{ position: 'relative', width: '950px', height: '540px',top:"-200px", borderRadius:"20px" }}>
        <video controls autoPlay style={{ position: 'absolute', width: '100%', height: '100%' ,borderRadius:"20px"}}>
          <source src="https://www.youtube.com/watch?v=bkaRnJpzttA" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Videos;

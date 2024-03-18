import React from 'react';
import "./video.css"
const VideoPlayer = () => {
  return (
    <div className="video-container">
      
      <div className="video-wrapper">
        <iframe
          className="video-frame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/r9VOYJM6nZc?list=TLGGDNkzuz3hNY4xNzAzMjAyNA"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;

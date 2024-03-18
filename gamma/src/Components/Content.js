// Content.js
import React from 'react';
import "./Content.css"; // Import CSS for styling

const Content = () => {
  return (
    <div className="content-container">
      <div className="content">
        {/* Left side content */}
        <div className='1'>
        <h3>Never start from scratch</h3>
        <h1>Generate docs, decks & webpages in seconds</h1>
        <p>Create a working <strong>presentation</strong>, document or <strong>webpage</strong> you can refine and customize in under a minute, using our powerful <strong>AI generator</strong>.</p>

        <div className="card">
          <p>Gamma allows me to package up information in ways I can't with slides, while still creating good flow for my presentations.</p>
        </div>
        </div>

        <div className='two'>
        <h3>Beautiful and on-brand</h3>
        <h1>Make it polished and ready in one click</h1>
        <p>Create a working <strong>presentation</strong>, document or <strong>webpage</strong> you can refine and customize in under a minute, using our powerful <strong>AI generator</strong>.</p>

        <div className="card">
          <p>Creating polished slides gets really tedious, especially aligning boxes and keeping things on-brand. With Gamma, I can get things done <strong>so much faster</strong>.</p>
        </div>
        </div>
      </div>

      
      <div className="image-container">
        {/* Right side image and animations */}
        <div className="video-container1">
      
      <div className="video-wrapper">
        <iframe
          className="video-frame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e6Xz_bGBjB8"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="video-container2">
      
      <div className="video-wrapper">
        <iframe
          className="video-frame"
          
          src="https://www.youtube.com/embed/e6Xz_bGBjB8"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Content;

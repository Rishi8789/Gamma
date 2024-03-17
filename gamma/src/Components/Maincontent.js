// Maincontent.js
import React from 'react';
import topImage from "./topImage.jpg";
import "./MainStyle.css";

const Maincontent = () => {
  return (
    <div className="main-content" style={{backgroundImage: `url(${topImage})`}}>
     <h1 className='heading'><span className='heading1'>A new medium for</span><span className='heading2'>presenting ideas.</span> 
</h1>
    </div>
  );
}

export default Maincontent;

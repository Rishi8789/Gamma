// Prefooter.js
import React from 'react';
import "./Prefooter.css";

const Prefooter = () => {
  return (
    <div className="prefooter-container">
      <img className="logo" src="https://d2x8ygf1qnoedj.cloudfront.net/images/Gamma_V1_Icon_only_4.gif" alt="Gamma Logo" />
      <img  className="image" src='https://uploads-ssl.webflow.com/62e823626cd4fdd0e5dc1527/62e823626cd4fd359cdc15a8_Universe%20BG.png' alt="Universe Background" />
      <div className="contentp">
        <h1 className="tagline"><span className='open'>Open the door</span> <br/>
        <span className='universe'>to a new universe</span> </h1>
        <p className="description">More visual than a doc. More collaborative than a<br/> slide deck. More interactive than a video.</p>
        <button className="try-free-btn">Try Gamma for free</button>
      </div>
    </div>
  );
}

export default Prefooter;

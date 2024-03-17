import React from 'react'
import "./FStyles.css"
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
    <div className='gammaImg'>
        <img src='https://asset.brandfetch.io/idAmHoFYTU/idWyo6kqsa.png'/>
    </div>
      <div className="footer-column">
        <h4>Product</h4>
        <ul>
          <li>Help</li>
          <li>Change log</li>
          <li>Templates</li>
          <li>Inspiration</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li>Team</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Language</h4>
        <ul>
          <li>Follow us</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>TikTok</li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
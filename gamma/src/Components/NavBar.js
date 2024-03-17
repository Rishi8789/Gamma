import React from 'react';
import './Styles.css';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='Lside-container'>
       <img src='https://asset.brandfetch.io/idAmHoFYTU/idWyo6kqsa.png'/>
      </div>
      <div className='Rside-container'>
        <ul>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <button>Sign up for free</button>
      </div>
    </div>
  );
};

export default NavBar;

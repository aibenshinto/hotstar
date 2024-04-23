import React from 'react';
import './SideNav.css';
import logoImage from '../assets/icons/hotstarLogo.svg';
import account_icon from '../assets/icons/account_icon.svg';
import home_icon from '../assets/icons/home_icon.svg';
import movie_icon from '../assets/icons/movie_icon.svg';
import search_icon from '../assets/icons/search_icon.png';
import tennis_icon from '../assets/icons/tennis_icon.svg';
import tv_icon from '../assets/icons/tv_icon.svg';


const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="navigation">
        <ul>
        <li><img src={account_icon} alt="Home" className="icon" /></li>
        <li><img src={search_icon} alt="Home" className="icon" /></li>
          <li><img src={home_icon} alt="Home" className="icon" /></li>
          <li><img src={tv_icon} alt="About" className="icon" /></li>
          <li><img src={movie_icon} alt="Services" className="icon" /></li>
          <li><img src={tennis_icon} alt="Contact" className="icon" /></li>
        </ul>
      </div>
    </div>
  );
};




export default SideNav;

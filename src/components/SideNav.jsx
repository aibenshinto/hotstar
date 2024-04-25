import React from 'react';
import '../style/SideNav.css';
import logoImage from '../assets/icons/hotstarLogo.svg';
import accountIcon from '../assets/icons/account_icon.svg';
import homeIcon from '../assets/icons/home_icon.svg';
import movieIcon from '../assets/icons/movie_icon.svg';
import searchIcon from '../assets/icons/search_icon.png';
import tennisIcon from '../assets/icons/tennis_icon.svg';
import tvIcon from '../assets/icons/tv_icon.svg';

const SideNav = ({ setIsHovered }) => {
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="sidenav">
      <div className="logo-container">
        <img src={logoImage} alt="Hotstar Logo" className="logo" />
      </div>
      <div className="navigation">
        <ul>
          <li onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src={accountIcon} alt="Account" className="icon" /></li>
          <li onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src={searchIcon} alt="Search" className="icon" /></li>
          <li onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src={homeIcon} alt="Home" className="icon" /></li>
          <li onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src={tvIcon} alt="TV" className="icon" /></li>
          <li onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src={movieIcon} alt="Movies" className="icon" /></li>
          <li onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src={tennisIcon} alt="Tennis" className="icon" /></li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

import React from 'react';
import '../style/HoverGrid.css';

const HoverGrid = () => {

  const iconNames = ['Account', 'Search', 'Home', 'TV', 'Movies', 'Tennis'];

  return (
    <div className="hover-grid-container">
      <ul className="icon-list">
        {iconNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HoverGrid;

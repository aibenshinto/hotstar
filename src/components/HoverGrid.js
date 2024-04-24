import React from 'react';
import './HoverGrid.css';

const HoverGrid = () => {
  // Array of icon names
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

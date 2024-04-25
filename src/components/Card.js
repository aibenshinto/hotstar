import React from 'react';
import '../style/Card.css';

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
    </div>
  );
};

export default Card;

import React from 'react';
import './MainContent.css';
import sample_video from '../assets/videos/sample_video.mp4';
import deadpool from '../assets/icons/deadpool.png';
import Card from './Card'; // Import your Card component

const MainContent = () => {
  return (
    <div className="main-content-container">
      {/* Video Container */}
      <div className="video-container">
        <video className="main-video" autoPlay muted loop>
          <source src={sample_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Grid with Rows and Columns */}
      <div className="overlay-grid">
        {/* Grid Container */}
        <div className="grid-container">
          {/* Row 1 with Image */}
          <div className="grid-row">
            {/* Image in Column 1 */}
            <div className="grid-column">
              <img src={deadpool} alt="Sample" className="grid-image" />
            </div>
          </div>

          {/* Rows with Text Content */}
          <div className="grid-row">
            <div className="grid-column bold-text">
              <strong>2024 English U/A 16+</strong>
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-column">
              Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy.
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-column bold-text">Action | Comedy</div>
          </div>

          {/* Last Row with Buttons */}
          <div className="grid-row">
            <div className="grid-column wider-column">
              <button className="long-button">Subscribe to Watch</button>
            </div>
            <div className="grid-column shorter-column">
              <button className="short-button">+</button>
            </div>
          </div>
        </div>
      </div>

       {/* Horizontal List of Cards */}
       <div className="cards-container">
        <h2 className="cards-title">Featured Cards</h2>
        <div className="horizontal-cards">
          {/* Render Card components */}
          <Card
            title="Card 1"
            description="Description for Card 1"
            imageUrl="https://placekitten.com/200/300" // Example image URL
          />
          <Card
            title="Card 2"
            description="Description for Card 2"
            imageUrl="https://placekitten.com/200/300" // Example image URL
          />
          <Card
            title="Card 3"
            description="Description for Card 3"
            imageUrl="https://placekitten.com/200/300" // Example image URL
          />
          {/* Add more Card components as needed */}
        </div>
      </div>
    </div>
  );
};


export default MainContent;

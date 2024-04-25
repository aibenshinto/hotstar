import React from 'react';
import '../style/MainContent.css';
import sample_video from '../assets/videos/sample_video.mp4';
import deadpool from '../assets/icons/deadpool.png';
import sample_movie1 from '../assets/icons/sample_movie1.webp';
import sample_movie2 from '../assets/icons/sample_movie2.webp';
import sample_movie3 from '../assets/icons/sample_movie3.webp';
import sample_movie4 from '../assets/icons/sample_movie4.webp';
import sample_movie5 from '../assets/icons/sample_movie5.webp';
import Card from './Card'; 

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

          {/* Row 2 */}
          <div className="grid-row">
            <div className="grid-column bold-text">
              <strong>2024 English U/A 16+</strong>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid-row">
            <div className="grid-column">
              Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy.
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid-row">
            <div className="grid-column bold-text">Action | Comedy</div>
          </div>

          {/* Last Row with Two Columns */}
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

      <div className="card-section">
        <div className="card-container">
          <Card imageUrl={sample_movie1} />
          <Card imageUrl={sample_movie2} />
          <Card imageUrl={sample_movie3} />
          <Card imageUrl={sample_movie4} />
          <Card imageUrl={sample_movie5} />
          <Card imageUrl={sample_movie1} />
          {/* Add more Card components as needed */}
        </div>
        <div className="card-container">
          <Card imageUrl={sample_movie2} />
          <Card imageUrl={sample_movie5} />
          <Card imageUrl={sample_movie3} />
          <Card imageUrl={sample_movie1} />
          <Card imageUrl={sample_movie4} />
          <Card imageUrl={sample_movie5} />
          {/* Add more Card components as needed */}
        </div>


      </div>
    </div>
  );
};

export default MainContent;

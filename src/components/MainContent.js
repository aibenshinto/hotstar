import React from 'react';
import './MainContent.css';
import sample_video from '../assets/videos/sample_video.mp4'; // Import the video file
import deadpool from '../assets/icons/deadpool.png'; // Import the image file

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
            <div className="grid-column">2024 English U/A 16+</div>
          </div>

          {/* Row 3 */}
          <div className="grid-row">
            <div className="grid-column">Wolverine is recovering from his injuries when 
            he crosses paths with the loudmouth, Deadpool. 
            They team up to defeat a common enemy.</div>
          </div>

          {/* Row 4 */}
          <div className="grid-row">
            <div className="grid-column">Action | Comedy</div>
          </div>

          {/* Last Row with Two Columns */}
          <div className="grid-row">
            <div className="grid-column">Column 1</div>
            <div className="grid-column">Column 2</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};


export default MainContent;

import React, { useState } from 'react';
import './style/App.css';
import SideNav from './components/SideNav';
import HoverGrid from './components/HoverGrid';
import MainContent from './components/MainContent';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="app">
     
       <div className="sidebar">
        <SideNav setIsHovered={setIsHovered} />
       </div>
       {isHovered && (
        <div className="hover-grid">
          <HoverGrid />
        </div>
       )}
       <div className="main-content">
        <MainContent />
       </div>
       </div>
    

    
  );
}

export default App;

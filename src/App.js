import React from 'react';
import './App.css';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <SideNav />
      </div>
      <div className="main-content">
        {/* Main content goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;

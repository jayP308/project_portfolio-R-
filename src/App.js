
import React, { useState } from 'react';
import ProjectsThings from './ProjectsThings';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import MyResume from './MyResume';
import './App.css';


function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(true);


  const handlePortfolioClick = (event) => {
    event.preventDefault();
    setShowPortfolio(true);
    setShowAboutMe(false)
    setShowContact(false);
    setShowResume(false);
  };

  const handleAboutmeClick = (event) => {
    event.preventDefault();
    setShowAboutMe(true);
    setShowPortfolio(false);
    setShowContact(false);
    setShowResume(false);
  }

  const handleContactClick = (event) => {
    event.preventDefault();
    setShowContact(true);
    setShowAboutMe(false);
    setShowPortfolio(false);
    setShowResume(false);
  }

  const handleResumeClick = (event) => {
    event.preventDefault();
    setShowResume(true);
    setShowContact(false);
    setShowAboutMe(false);
    setShowPortfolio(false);
  }

  return (
    <div className="App">
      <header className='header-style'>
        <h1>JP Padilla</h1>
        <nav className='nav-dashboard'>
          <a href='/' onClick={handleAboutmeClick} id='nav-links'>About Me</a>
          <a href='/' onClick={handlePortfolioClick} id='nav-links'>Portfolio</a>
          <a href='/' onClick={handleContactClick} id='nav-links'>Contacts</a>
          <a href='/' onClick={handleResumeClick} id='nav-links'>Resume</a>
        </nav>
      </header>

      {showPortfolio && <ProjectsThings />}
      {showAboutMe && <AboutMe />}
      {showContact && <ContactMe />}
      {showResume && <MyResume />}
      
    </div>
  );
}

export default App;

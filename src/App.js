import React, { useState } from 'react';
import ProjectsThings from './ProjectsThings';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import MyResume from './MyResume';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState('About Me');
  
  const handleNavClick = (event, buttonName) => {
    event.preventDefault();
    setActiveButton(buttonName);
  };

  return (
    <div className="App">
      <header className='header-style'>
        <h1>JP Padilla</h1>
        <nav className='nav-dashboard'>
          <a href='/' onClick={(event) => handleNavClick(event, 'About Me')} id={activeButton === 'About Me' ? 'active-nav-link' : 'nav-links'}>
            About Me
          </a>
          <a href='/' onClick={(event) => handleNavClick(event, 'Portfolio')} id={activeButton === 'Portfolio' ? 'active-nav-link' : 'nav-links'}>
            Portfolio
          </a>
          <a href='/' onClick={(event) => handleNavClick(event, 'Contacts')} id={activeButton === 'Contacts' ? 'active-nav-link' : 'nav-links'}>
            Contacts
          </a>
          <a href='/' onClick={(event) => handleNavClick(event, 'Resume')} id={activeButton === 'Resume' ? 'active-nav-link' : 'nav-links'}>
            Resume
          </a>
        </nav>
      </header>

      {activeButton === 'Portfolio' && <ProjectsThings />}
      {activeButton === 'About Me' && <AboutMe />}
      {activeButton === 'Contacts' && <ContactMe />}
      {activeButton === 'Resume' && <MyResume />}
      
      <footer className='footer'>
        <h3>&copy; Made By Junnel R. Padilla</h3>
      </footer>
    </div>
  );
}

export default App;


import profileImage from './images/header-sample.jpg';
import githubIcon from './images/github-icon.png';
import linkedIn from './images/linkedin-icon.png';
import slackIcon from './images/slack-icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header-style'>
        <h1>JP Padilla</h1>
        <nav className='nav-dashboard'>
          <a href='/'>About Me</a>
          <a href='/'>Portfolio</a>
          <a href='/'>Contacts</a>
          <a href='/'>Resume</a>
        </nav>
      </header>
      <div className='about-me'>
        <h1>About Me</h1>
        <img src={profileImage} id='profile-image'/>
        <div className='description'>
            <p>
                My name is Junnel R. Padilla, i was born in the Philippines.
                My career right now is in the medical field. I joined the bootcamp
                to divert from being a pharmacy technician finally do something I 
                wanted to do, which is to be in the technology industry.
            </p>

            <p>
                Currently, I have done the pre-work which is creating a study
                guide website where i have to build, style a layout of the webpage and
                store information regarding what HTML, CSS, Git, and JavaScript does.
                The challenge 1 project is a little bit different given that we dont
                have to do the code from scratch, where we replaced given non-semantic 
                elements to semantic elements and also add accessibility features to 
                the images. Click on my avatar to access my instagram page!
            </p>
          </div>

          <div className='icon-links'>
            <a className="profile-links" href="https://github.com/jayP308" target="_blank">
                <img id="icons" src={githubIcon} />
                <p id="icon-title">Github</p>
            </a>
            <a className="profile-links" href="https://www.linkedin.com/in/jp-padilla-038854251/" target="_blank">
                <img id="icons" src={linkedIn} />
                <p id="icon-title">LinkedIn</p>
            </a>
            <a className="profile-links" href="https://app.slack.com/client/T04E091KMGD/D04M19YEU1L/rimeto_profile/U04LSF3AG1Z" target="_blank">
                <img id="icons" src={slackIcon} />
                <p id="icon-title">Slacks</p>
            </a>
          </div>
      </div>
 
    </div>
  );
}

export default App;

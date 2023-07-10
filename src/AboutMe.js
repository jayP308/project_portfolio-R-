import profileImage from './images/profile-pic2.jpg';
import githubIcon from './images/github-icon.png';
import linkedIn from './images/linkedin-icon.png';
import slackIcon from './images/slack-icon.png';

const AboutMe = () => {
    return(
        <div>
           <div className='about-me'>
        <h1 id='aboutme-title'>About Me</h1>
        <a title="Click here to view my Instagram page" href="https://www.instagram.com/jeeeeppeee/" target="_blank" id='nav-links'>
            <img src={profileImage} id='profile-image'/>
        </a>
        <div className='description'>
            <p>
                My name is Junnel R. Padilla, and i was born in the Philippines. I am a Junior Software Developer, and a Pharmacy Technician as well. Having both knowledge with website development and medication really opens up lots of ideas of how i can incorporate both my profession.
            </p>

            <p>
                Currently, I have done a full stack course learning both front-end and back-end development. Starting with HTML, CSS, Handlebars serving as the templating UI, as well as back-end work where i learned about JavaScript, database using SQL, node.js and express packages to run server side. Check out my portfolio to know more about my experience and what i learn throughout class.
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
};

export default AboutMe;
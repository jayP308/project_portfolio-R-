import githubIcon from './images/github-icon.png';
import linkedIn from './images/linkedin-icon.png';
import slackIcon from './images/slack-icon.png';

const ContactMe = () => {
    return(
        <div>
            <div className='contact-me'>
                <h1>Contact Me</h1>
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

export default ContactMe;
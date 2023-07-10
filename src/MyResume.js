import resumeImage from './images/resume.png'
import githubIcon from './images/github-icon.png';
import linkedIn from './images/linkedin-icon.png';
import slackIcon from './images/slack-icon.png';

const MyResume = () => {
    return(
        <div>
            <div className='my-resume'>
                <h1>Resume</h1>
                <a id='download-button' title="Click here to download Resume" href={resumeImage} target="_blank" download>Click Here to download</a>
                <img src={resumeImage} id='resume-page' />

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

export default MyResume;
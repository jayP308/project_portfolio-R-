import weatherThumb from './images/weather-thumbnail.jpg';
import alumniBooksThumb from './images/alumni-book.gif';
import eventThumb from './images/event-scheduler.gif';
import gameThumb from './images/game-thumbnail.gif';
import FoodThumb from './images/dirty-food.gif';
import notesThumb from './images/note-pad.gif';
import blogThumb from './images/blog-spot.gif';
import githubIcon from './images/github-icon.png';
import linkedIn from './images/linkedin-icon.png';
import slackIcon from './images/slack-icon.png';
import React, { useState } from 'react';
import MoreProjects from './MoreProjects';

const ProjectsThings = () => {
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const handleMoreProjects = (event) => {
        event.preventDefault();
        setShowMoreProjects(!showMoreProjects);
    }

    return(
        <div>
            {!showMoreProjects && (
            <div className='my-projects'>
                <h1>Project Highlights</h1>

                <div className='project-container'>
                    <a href="https://alumni-book-app-cae10c9784e0.herokuapp.com/" target="_blank" className='web-link'>
                        <img src={alumniBooksThumb} id='project-images'/>
                        <div className='web-title'>Alumni Books</div>
                        <div id='hover-background'>
                            <div className='web-title1'>Alumni Books</div>
                            <a className="profile-links1" href="https://github.com/jayP308/Alumni-Books" target="_blank">
                                <img id="icons1" src={githubIcon} />
                            </a>
                            <h3>&copy; Made By Alumni Books</h3>
                        </div>
                    </a>
                </div>

                <div className='project-container'>
                    <a href="https://software-engineer-blogspot-48f56e664ad0.herokuapp.com/" target="_blank" className='web-link'>
                        <img src={blogThumb} id='project-images'/>
                        <div className='web-title'>Software Engineer Blogspot</div>
                        <div id='hover-background'>
                            <div className='web-title1'>Software Engineer Blogspot</div>
                            <a className="profile-links1" href="https://github.com/jayP308/e_SoftEn_blogspot" target="_blank">
                                <img id="icons1" src={githubIcon} />
                            </a>
                            <h3>&copy; Made By Junnel R. Padilla</h3>
                        </div>
                    </a>
                </div>
                <div className='project-container'>
                    <a href="https://key-notes-01-19b3cfa09fb4.herokuapp.com/" target="_blank" className='web-link'>
                        <img src={notesThumb} id='project-images'/>
                        <div className='web-title'>Key Notes</div>
                        <div id='hover-background'>
                            <div className='web-title1'>Key Notes</div>
                            <a className="profile-links1" href="https://github.com/jayP308/key_notes" target="_blank">
                                <img id="icons1" src={githubIcon} />
                            </a>
                            <h3>&copy; Made By Junnel R. Padilla</h3>
                        </div>
                    </a>
                </div>
                <div className='project-container'>
                    <a href="https://jayp308.github.io/Dirty_Food_Project/" target="_blank" className='web-link'>
                        <img src={FoodThumb} id='project-images'/>
                        <div className='web-title'>Dirty Foods</div>
                        <div id='hover-background'>
                            <div className='web-title1'>Dirty Foods</div>
                            <a className="profile-links1" href="https://github.com/jayP308/Dirty_Food_Project" target="_blank">
                                <img id="icons1" src={githubIcon} />
                            </a>
                            <h3>&copy; Made By Awesome Geckos</h3>
                        </div>
                    </a>
                </div>
                <div className='project-container'>
                    <a href="https://gameraters.herokuapp.com/" target="_blank" className='web-link'>
                        <img src={gameThumb} id='project-images'/>
                        <div className='web-title'>Arcade Rater</div>
                        <div id='hover-background'>
                            <div className='web-title1'>Arcade Rater</div>
                            <a className="profile-links1" href="https://github.com/jayP308/ArcadeRater" target="_blank">
                                <img id="icons1" src={githubIcon} />
                            </a>
                            <h3>&copy; Made By Arcade Raters </h3>
                        </div>
                    </a>
                </div>
                <div className='project-container'>
                    <a href="https://jayp308.github.io/weather-patrol/" target="_blank" className='web-link'>
                        <img src={weatherThumb} id='project-images'/>
                        <div className='web-title'>Weather Patrol</div>
                        <div id='hover-background'>
                            <div className='web-title1'>Weather Patrol</div>
                            <a className="profile-links1" href="https://github.com/jayP308/weather-patrol" target="_blank">
                                <img id="icons1" src={githubIcon} />
                            </a>
                            <h3>&copy; Made By Junnel R. Padilla</h3>
                        </div>
                    </a>
                </div>
                <a id='download-button' href='/' onClick={handleMoreProjects}>Show All Projects</a>
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
            )}
            {showMoreProjects && <MoreProjects />}
        </div>
    );
};

export default ProjectsThings;
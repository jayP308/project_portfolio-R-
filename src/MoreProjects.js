import projectImage1 from './images/profile-pic2.jpg';
import alumniBooksThumb from './images/alumni-book.gif';
import bookSearchThumb from './images/book-search.gif';
import weatherThumb from './images/weather-thumbnail.jpg';
import eventThumb from './images/event-scheduler.gif';
import gameThumb from './images/game-thumbnail.gif';
import FoodThumb from './images/dirty-food.gif';
import notesThumb from './images/note-pad.gif';
import blogThumb from './images/blog-spot.gif';
import pokeThumb from './images/pokemon-thumbnail1.gif';
import passThumb from './images/password-gen.gif';
import portfolioThumb from './images/portfolio-thumb.gif';
import horiseonThumb from './images/horiseon-thumb.gif';
import githubIcon from './images/github-icon.png';
import linkedIn from './images/linkedin-icon.png';
import slackIcon from './images/slack-icon.png';

const MoreProjectThings = () => {
        return(
            <div>
                
                <div className='my-projects'>
                    <h1>Table Of Contents</h1>
                        <a href='#group-projects' id='nav-links1's>Group Projects</a>
                        <a href='#individual-projects' id='nav-links1'>Individual Projects</a>
                        <a href='#contact-information' id='nav-links1'>Connect with me</a>
    
                    <h1 id='group-projects'>Group Projects</h1>

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
                    <h1 id='individual-projects'>Individual Projects</h1>
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
                        <a href="https://book-search-applicat-da020dda03be.herokuapp.com/" target="_blank" className='web-link'>
                            <img src={bookSearchThumb} id='project-images'/>
                            <div className='web-title'>Book Search</div>
                            <div id='hover-background'>
                                <div className='web-title1'>Book Search</div>
                                <a className="profile-links1" href="https://github.com/jayP308/Book_Searching" target="_blank">
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
                    <div className='project-container'>
                        <a href="https://jayp308.github.io/schedule-organizer/" target="_blank" className='web-link'>
                            <img src={eventThumb} id='project-images'/>
                            <div className='web-title'>Event Scheduler</div>
                            <div id='hover-background'>
                                <div className='web-title1'>Event Scheduler</div>
                                <a className="profile-links1" href="https://github.com/jayP308/schedule-organizer" target="_blank">
                                    <img id="icons1" src={githubIcon} />
                                </a>
                                <h3>&copy; Made By Junnel R. Padilla</h3>
                            </div>
                        </a>
                    </div>
                    <div className='project-container'>
                        <a href="https://jayp308.github.io/poke-quiz/" target="_blank" className='web-link'>
                            <img src={pokeThumb} id='project-images'/>
                            <div className='web-title'>Pokemon Quiz</div>
                            <div id='hover-background'>
                                <div className='web-title1'>Pokemon Quiz</div>
                                <a className="profile-links1" href="https://github.com/jayP308/poke-quiz" target="_blank">
                                    <img id="icons1" src={githubIcon} />
                                </a>
                                <h3>&copy; Made By Junnel R. Padilla</h3>
                            </div>
                        </a>
                    </div>
                    <div className='project-container'>
                        <a href="https://jayp308.github.io/gen-pass/" target="_blank" className='web-link'>
                            <img src={passThumb} id='project-images'/>
                            <div className='web-title'>Password Generator</div>
                            <div id='hover-background'>
                                <div className='web-title1'>Password Generator</div>
                                <a className="profile-links1" href="https://github.com/jayP308/gen-pass" target="_blank">
                                    <img id="icons1" src={githubIcon} />
                                </a>
                                <h3>&copy; Made By Junnel R. Padilla</h3>
                            </div>
                        </a>
                    </div>
                    <div className='project-container'>
                        <a href="https://jayp308.github.io/work-portfolio/" target="_blank" className='web-link'>
                            <img src={portfolioThumb} id='project-images'/>
                            <div className='web-title'>Work Porfolio (Original Design)</div>
                            <div id='hover-background'>
                                <div className='web-title1'>Work Porfolio (Original Design)</div>
                                <a className="profile-links1" href="https://github.com/jayP308/work-portfolio" target="_blank">
                                    <img id="icons1" src={githubIcon} />
                                </a>
                                <h3>&copy; Made By Junnel R. Padilla</h3>
                            </div>
                        </a>
                    </div>
                    <div className='project-container'>
                        <a href="https://jayp308.github.io/horiseon-webpage/" target="_blank" className='web-link'>
                            <img src={horiseonThumb} id='project-images'/>
                            <div className='web-title'>Horiseon Web (Refactoring)</div>
                            <div id='hover-background'>
                                <div className='web-title1'>Horiseon Web (Refactoring)</div>
                                <a className="profile-links1" href="https://github.com/jayP308/horiseon-webpage" target="_blank">
                                    <img id="icons1" src={githubIcon} />
                                </a>
                                <h3>&copy; Made By Junnel R. Padilla</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='icon-links' id='contact-information'>
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
    );
};

export default MoreProjectThings;
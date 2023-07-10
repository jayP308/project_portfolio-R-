import resumeImage from './images/resume.png'

const MyResume = () => {
    return(
        <div>
            <div className='my-resume'>
                <h1>Resume</h1>
                <a id='download-button' title="Click here to download Resume" href={resumeImage} target="_blank" download>Click Here to download</a>
                <img src={resumeImage} id='resume-page' />
            </div>
        </div>
    );
};

export default MyResume;
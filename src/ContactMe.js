import React, { useState } from 'react';
import githubIcon from './images/github-icon.png';
import linkedIn from './images/linkedin-icon.png';
import slackIcon from './images/slack-icon.png';

const ContactMe = () => {
  const [message, setMessage] = useState('');
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);

  const handleBlur = () => {
    setIsMessageEmpty(message.trim() === '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.trim() === '') {
      setIsMessageEmpty(true);
      return;
    }
  };

  return (
    <div>
      <div className='contact-me'>
        <h1>Contact Me</h1>
        <form className='contact-form' onSubmit={handleSubmit}>
          <p id='name'>Name:</p>
          <input type='text' id='name-input' placeholder='Type Here......'/>

          <p id='email'>Email Address:</p>
          <input type='email' id='email-input' placeholder='Type Here......' required/>

          <p id='email-error' className='error-message'></p>

          <p id='message'>Message:</p>
          <textarea
            type='text'
            id='message-input'
            placeholder='Type Here......'
            required
            onBlur={handleBlur}
            onChange={(e) => setMessage(e.target.value)}
          />

          {isMessageEmpty && <p className='error-message'>Message cannot be empty</p>}

          <p></p>
          <button type='submit' id='submit-button'>Submit</button>
        </form>

        <div className='icon-links'>
          <a className='profile-links' href='https://github.com/jayP308' target='_blank'>
            <img id='icons' src={githubIcon} />
            <p id='icon-title'>Github</p>
          </a>
          <a className='profile-links' href='https://www.linkedin.com/in/jp-padilla-038854251/' target='_blank'>
            <img id='icons' src={linkedIn} />
            <p id='icon-title'>LinkedIn</p>
          </a>
          <a className='profile-links' href='https://app.slack.com/client/T04E091KMGD/D04M19YEU1L/rimeto_profile/U04LSF3AG1Z' target='_blank'>
            <img id='icons' src={slackIcon} />
            <p id='icon-title'>Slacks</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

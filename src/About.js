import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="margin-default">
      <p>I'm 25 years old, currently enrolled in a programming bootcamp through Fullstack Academy. I enjoy cooking, watching sports, playing trumpet, and working out.</p>
      <p className="font-weight-bold">Shoot me an email, slide into my DMs, or send a raven:</p>
      <div className="flex flex-column">
        <div className="flex contact-item">
          <div className="contact-image-wrapper">
            <img className="contact-gmail-img" alt="jeremyphilipson@gmail.com" src="./vendor/images/gmail_logo.png" />
          </div>
          <div>
            <a href="mailto:jeremyphilipson@gmail.com">jeremyphilipson@gmail.com</a>
          </div>
        </div>
        <div className="flex contact-item">
          <div className="contact-image-wrapper">
            <img className="contact-twitter-img" alt="@jeremyphilipson" src="./vendor/images/twitter_logo.png" />
          </div>
          <div>
            <a href="https://www.twitter.com/jeremyphilipson">@jeremyphilipson</a>
          </div>
        </div>
        <div className="flex contact-item">
          <div className="contact-image-wrapper">
            <img className="contact-apt-img" alt="356 E 50th St, Apt C, New York, NY 10022" src="./vendor/images/house_image.png" />
          </div>
          <div>
            <a href="https://www.google.com/maps/place/356+E+50th+St,+New+York,+NY+10022/">356 E 50th St, Apt C, New York, NY 10022</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

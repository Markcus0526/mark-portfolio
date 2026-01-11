import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Markcus</h1>
          <p>Full Stack Engineer</p>

          <p>Discover your perfect home in our modern Development: Live, Grow, and Thrive.</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/markcus" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/markcus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <div className="social_icons">
              <a href="https://github.com/markcus" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/markcus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
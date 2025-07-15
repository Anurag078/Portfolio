import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import userImage from '../assets/images/user-image.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
  <img src={require('../assets/images/user-image.png')} alt="Avatar" />
</div>


        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Anurag078" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anurag786/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Anurag Yadav</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Anurag078" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anurag786/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
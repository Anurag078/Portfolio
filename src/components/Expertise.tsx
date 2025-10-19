import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const languages = [
  "Python", "Java", "C","PHP", "JavaScript", "HTML/CSS", "SQL"
];
const frameworks = [
"React.js", "Angular", "Node.js", "Hibernate", "Bootstrap", "AJAX"
  ];
const devTools = [ "VS Code", "Eclipse", "Android Studio", "Google Cloud Platform", "Power BI", "XAMPP", "Git" 
];
const technologies = [ "Linux", "MySQL", "PrestaShop", "GitHub", "Advanced Excel", "RESTful APIs" 
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Key Skills</h1>
        <div className="skills-grid">
          <div className="skill">
            <h3>Skills Summary</h3>
            <p>A categorized overview of my technical skills and tools I use regularly.</p>

      
            <h4 className="section-heading">Language:</h4>
            <div className="flex-chips languages-row">
              {languages.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>

       
            <h4 className="section-heading">Developer Tools:</h4>
            <div className="flex-chips">
              {devTools.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>

         
            <h4 className="section-heading">Technologies / Frameworks:</h4>
            <div className="flex-chips">
              {techFrameworks.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

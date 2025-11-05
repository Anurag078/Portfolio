import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Career Experience</h1>
        <VerticalTimeline>
          {/* Most recent first */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Novemer 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer </h3>
            <h4 className="vertical-timeline-element-subtitle">TractionShastra Pvt. Ltd. — Mumbai, Maharashtra</h4>
            <ul>
              <li>Developed and deployed multiple dynamic web applications using PHP, JavaScript, Bootstrap, and AJAX focusing on responsive design and performance.</li>
              <li>Built a car service booking platform (Book My Garage) with real-time appointment scheduling and secure backend handling.</li>
              <li>Created an automated PPT Generator dashboard (Python + JavaScript) with Excel/slide downloads and email automation for event triggers.</li>
              <li>Customized PrestaShop frontend & backend modules to match client UI/UX and improve store functionality.</li>
              <li>Collaborated cross-functionally to design, develop, and deliver production-ready features ensuring scalability and maintainability.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2024 - January 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CEREBRATE BUSINESS SOLUTIONS PVT. LTD.</h3>
            <h4 className="vertical-timeline-element-subtitle">Vashi, Mumbai</h4>
            <p>
              Social Media Monitoring, Brand Reputation Management, Sentiment Analysis, Customer Engagement, Keyword Filtering, Locobuzz Dashboard
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2023 - September 2023 (2 Months)"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
            <p>
              Data Analysis, Machine Learning, Data Visualization, Data Cleaning, Model Building, Real-World Problem Solving
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

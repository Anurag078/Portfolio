import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Career Experience</h1>
        <VerticalTimeline>
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
Social Media Monitoring, Brand Reputation Management, Sentiment Analysis, Customer Engagement, Keyword Filtering, Locobuzz Dashboard            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Auguest 2023 - Sepember 2023(2 Months)"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Banglore</h4>
            <p>
              Data Analysis, Machine Learning, Data Visualization, Data Cleaning, Model Building, Real-World Problem Solving            </p>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
    <a href="https://admybrand-landing.vercel.app" target="_blank" rel="noreferrer">
        <h2>ADmyBRAND – AI-Powered SaaS Landing Page 🚀</h2>
    </a>
    <p>
        A modern, fully responsive SaaS landing page for ADmyBRAND, built with Next.js 15, Tailwind CSS, 
        and Framer Motion. This project demonstrates beautiful UI, AI-powered development workflow, and smooth user interactions.
    </p>
    {/* <ul>
        <li>Sticky animated Navbar with scroll-aware background</li>
        <li>Hero section with gradient and CTA</li>
        <li>Features with expandable cards and keyboard navigation</li>
        <li>Pricing section with toggle calculator</li>
        <li>Testimonials and CTA for conversion</li>
        <li>FAQ and Contact section with smooth scroll</li>
        <li>Fully responsive on all screen sizes</li>
    </ul> */}
</div>

            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Task Management Web App</h2></a>
                <p>Built a full-stack task management app with Angular, Spring Boot, Hibernate, and MySQL, enabling task CRUD operations with role-based access control and REST API integration.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Real-time Chat Application</h2></a>
                <p>Developed a multi-user chat app with real-time messaging using PHP, Ratchet WebSocket, and MySQL, featuring user registration, login, and chat rooms.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Resume Builder</h2></a>
                <p>Built a resume generator web app using MongoDB, Express.js, React.js, and Node.js, enabling users to create, preview, and export professional resumes with live form data and PDF download functionality.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Fraud Prevention in Real Estate using Blockchain</h2></a>
                <p>A blockchain-based real estate system that automates property ownership verification and secures transactions by turning assets into NFT's. This project was designed to explore blockchain technology. </p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;            
import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">

        {/* Digital Heroes */}
        <div className="project">
          <h2>
            <a
              href="https://digital-heros-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Heroes
            </a>
          </h2>

          <p>
            Digital Heroes turns your golf performance into real-world change.
            Support local missions, enter the draw, and help save lives through
            every game.
          </p>
        </div>

        {/* ADmyBRAND */}
        <div className="project">
          <h2>
            <a
              href="https://your-admybrand-link.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ADmyBRAND – AI-Powered SaaS Landing Page 🚀
            </a>
          </h2>

          <p>
            A modern, fully responsive SaaS landing page for ADmyBRAND, built
            with Next.js 15, Tailwind CSS, and Framer Motion. This project
            demonstrates beautiful UI, AI-powered development workflow, and
            smooth user interactions.
          </p>
        </div>

        {/* Task Management */}
        <div className="project">
          <h2>
            <a
              href="https://your-task-management-link.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Task Management Web App
            </a>
          </h2>

          <p>
            Built a full-stack task management app with Angular, Spring Boot,
            Hibernate, and MySQL, enabling task CRUD operations with role-based
            access control and REST API integration.
          </p>
        </div>

        {/* Chat App */}
        <div className="project">
          <h2>
            <a
              href="https://your-chat-app-link.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Real-time Chat Application
            </a>
          </h2>

          <p>
            Developed a multi-user chat app with real-time messaging using PHP,
            Ratchet WebSocket, and MySQL, featuring user registration, login,
            and chat rooms.
          </p>
        </div>

        {/* Resume Builder */}
        <div className="project">
          <h2>
            <a
              href="https://your-resume-builder-link.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume Builder
            </a>
          </h2>

          <p>
            Built a resume generator web app using MongoDB, Express.js,
            React.js, and Node.js, enabling users to create, preview, and
            export professional resumes with live form data and PDF download
            functionality.
          </p>
        </div>

        {/* Blockchain Project */}
        <div className="project">
          <h2>
            <a
              href="https://your-blockchain-project-link.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fraud Prevention in Real Estate using Blockchain
            </a>
          </h2>

          <p>
            A blockchain-based real estate system that automates property
            ownership verification and secures transactions by turning assets
            into NFTs. This project was designed to explore blockchain
            technology.
          </p>
        </div>

        {/* SaaS Landing Page */}
        <div className="project">
          <h2>
            <a
              href="https://your-saas-link.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI-Powered SaaS Landing Page
            </a>
          </h2>

          <p>
            A modern, fully responsive SaaS landing page for ADmyBRAND, built
            with Next.js 15, Tailwind CSS, and Framer Motion. Features smooth
            animations, responsive design, and optimized performance — hosted
            on Netlify.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;

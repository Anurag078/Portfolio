import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">

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
            Support local missions, enter the draw, and help save lives through every game.
          </p>
        </div>

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
            A modern, fully responsive SaaS landing page for ADmyBRAND,
            built with Next.js 15, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div className="project">
          <h2>Task Management Web App</h2>

          <p>
            Built a full-stack task management app with Angular,
            Spring Boot, Hibernate, and MySQL.
          </p>
        </div>

        <div className="project">
          <h2>Real-time Chat Application</h2>

          <p>
            Developed a multi-user chat app with real-time messaging
            using PHP, Ratchet WebSocket, and MySQL.
          </p>
        </div>

        <div className="project">
          <h2>Resume Builder</h2>

          <p>
            Built a resume generator web app using MongoDB,
            Express.js, React.js, and Node.js.
          </p>
        </div>

        <div className="project">
          <h2>Fraud Prevention in Real Estate using Blockchain</h2>

          <p>
            A blockchain-based real estate system that automates
            property ownership verification and secures transactions.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;

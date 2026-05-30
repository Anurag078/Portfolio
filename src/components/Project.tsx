
import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="projects-grid">

                <div className="project">
                    <h2>
                        <a
                            href="https://react-landing-ecommerce.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React E-Commerce Landing Page
                        </a>
                    </h2>
                    <p>
                        Built a responsive e-commerce landing page using React.js, JavaScript,
                        CSS, and HTML. Designed reusable components, optimized user experience
                        across devices, and deployed the application on Vercel.
                    </p>
                </div>

                <div className="project">
                    <h2>ADmyBRAND – AI-Powered SaaS Landing Page 🚀</h2>
                    <p>
                        A modern, fully responsive SaaS landing page for ADmyBRAND, built with
                        Next.js 15, Tailwind CSS, and Framer Motion. This project demonstrates
                        beautiful UI, AI-powered development workflow, and smooth user interactions.
                    </p>
                </div>

                <div className="project">
                    <h2>Task Management Web App</h2>
                    <p>
                        Built a full-stack task management app with Angular, Spring Boot,
                        Hibernate, and MySQL, enabling task CRUD operations with role-based
                        access control and REST API integration.
                    </p>
                </div>

                <div className="project">
                    <h2>Real-time Chat Application</h2>
                    <p>
                        Developed a multi-user chat app with real-time messaging using PHP,
                        Ratchet WebSocket, and MySQL, featuring user registration, login,
                        and chat rooms.
                    </p>
                </div>

                <div className="project">
                    <h2>Resume Builder</h2>
                    <p>
                        Built a resume generator web app using MongoDB, Express.js, React.js,
                        and Node.js, enabling users to create, preview, and export professional
                        resumes with live form data and PDF download functionality.
                    </p>
                </div>

                <div className="project">
                    <h2>Fraud Prevention in Real Estate using Blockchain</h2>
                    <p>
                        A blockchain-based real estate system that automates property ownership
                        verification and secures transactions by turning assets into NFTs.
                        This project was designed to explore blockchain technology.
                    </p>
                </div>

                <div className="project">
                    <h2>AI-Powered SaaS Landing Page</h2>
                    <p>
                        A modern, fully responsive SaaS landing page for ADmyBRAND, built with
                        Next.js 15, Tailwind CSS, and Framer Motion. Features smooth animations,
                        responsive design, and optimized performance — hosted on Netlify.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;

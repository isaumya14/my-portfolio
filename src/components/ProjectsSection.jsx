import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "StudyNotion",
    description:
      "StudyNotion is a fully-featured EdTech web application that enables users to learn, teach, and manage educational content with ease. Built with the MERN stack (MongoDB, Express, React, Node.js) and powered by Razorpay for secure transactions, it offers a seamless user experience for both learners and instructors.",
    image: "/projects/studynotion.png",
    tags: [
      "Frontend: React, Redux, Tailwind CSS, React Router",
      "Backend: Node.js, Express.js, MongoDB",
      "Authentication: JSON Web Tokens, Bcrypt, OTP System",
      "Payments: Razorpay integration",
      "File Storage: Cloudinary for media uploads",
      "Deployment: Hosted on Render",
    ],
    demoUrl: "https://studynotion-i8zw.onrender.com/",
    githubUrl: "https://github.com/isaumya14/exchangify",
  },
  {
    id: 2,
    title: "Exchangify",
    description:
      "Exchangify is a beautifully crafted, responsive currency converter web application that delivers accurate and real-time currency exchange rates using the Frankfurter API. Designed with a focus on usability and simplicity, it allows users to instantly convert between global currencies, mark favorites, and view recent conversions — all wrapped in a smooth, modern UI.",
    image: "/projects/exchangify.png",
    tags: [
      "Frontend: React.js, Tailwind CSS",
      "API: Frankfurter (currency exchange)",
      "UX: React Icons, React Toastify",
      "Deployment: Hosted on Netlify",
    ],
    demoUrl: "https://exchangify.netlify.app/",
    githubUrl: "https://github.com/isaumya14/exchangify",
  },
  {
    id: 3,
    title: "Dice Game",
    description:
      "Playing With Dices is a minimal yet engaging dice-rolling web app built with React. It offers a fun and interactive way for users to roll virtual dice, choose lucky numbers, and test their luck. The app dynamically updates scores and messages, making it a great blend of random logic, conditional rendering, and user interaction.",
    image: "/projects/dicegame.png",
    tags: [
      "Frontend: React.js, Tailwind CSS",
      "State Management: React Hooks",
      "Logic: Math.random() based dice mechanics",
      "Deployment: Hosted on Netlify",
    ],
    demoUrl: "https://playingwithdices.netlify.app/",
    githubUrl: "https://github.com/isaumya14/my-dice-game",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-pink-300">Projects</span>
        </h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-white/5 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-foreground/80 text-sm mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mb-3">
                  <div className="flex space-x-3">
                    <p className="ml-2 font-bold text-pink-300">
                      Project Links :{" "}
                    </p>
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-pink-900 transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-pink-900 transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
    <a
      href="https://github.com/isaumya14"
      className="cosmic-button w-fit flex items-center gap-2"
      target="_blank"
    >
      Check My GitHub <ArrowRight size={16} />
    </a>

    <a
      href="https://leetcode.com/u/isaumya_/"
      className="cosmic-button w-fit flex items-center gap-2"
      target="_blank"
    >
      My LeetCode Profile <ArrowRight size={16} />
    </a>
  </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import Card from "../Card";
import Footer from "../Footer";

const projects = [
  {
    id: 0,
    image: "/imgs/passwordgen.png",
    name: "Password Generator",
    githubLink: "https://github.com/KimShiHyun/password-generator",
    deployedLink: "https://kimshihyun.github.io/password-generator/",
  },
  {
    id: 1,
    image: "/imgs/weather.png",
    name: "Weather Dashboard",
    githubLink: "https://github.com/KimShiHyun/Weather-Dashboard",
    deployedLink: "https://kimshihyun.github.io/Weather-Dashboard/",
  },
  {
    id: 2,
    image: "/imgs/lyrific.png",
    name: "Lyrific",
    githubLink: "https://github.com/dereklewis/music-project-main",
    deployedLink: "https://dereklewis.github.io/music-project-main/",
  },
  {
    id: 3,
    image: "/imgs/quiz.png",
    name: "Code Quizlet",
    githubLink: "https://github.com/KimShiHyun/code-quizlet",
    deployedLink: "https://kimshihyun.github.io/code-quizlet/",
  },
  {
    id: 4,
    image: "/imgs/budgettracker.png",
    name: "Budget Tracker",
    githubLink: "https://github.com/KimShiHyun/Budget-Tracker",
    deployedLink: "https://kevin-budget-tracker.herokuapp.com/",
  },
  {
    id: 5,
    image: "/imgs/notetaker.png",
    name: "Note Taker",
    githubLink: "https://github.com/KimShiHyun/Note-Taker-App",
    deployedLink: "https://kevink-note-taker.herokuapp.com/",
  },
];

function Projects() {
  return (
    <main>
      <div className="container">
        <div className="row row-cols-md-3 mx-auto mt-5">
          {projects.map((project) => (
            <Card
              className="card"
              key={project.id}
              image={project.image}
              name={project.name}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default Projects;

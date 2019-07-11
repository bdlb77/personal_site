import React from "react";
import styled from "styled-components";
import Project from "./Project";
import dangApp from "../images/dang_app.jpg";
import immigration from "../images/immigration_works.jpg";
import priicer from "../images/priicer_app.jpg";
import rails from "../assets/rails.svg";
import ruby from "../assets/ruby.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import postgres from "../assets/postgres.svg";
const ProjectsList = styled.div`
  height: 120vh;
  display: flex;
  justify-content: space-around;
`;
const projects = [
  {
    title: "Integration Works",
    image: immigration,
    description:
      "Berlin Tech hackathon 3rd Place Winner. An app for navigating the legal boundaries of the hiring process of refugees in Germany.",
    stack: [rails, ruby, javascript, html, css, postgres],
    url: "https://immigration-legaltech.herokuapp.com/",
  },
  {
    title: "Priicer",
    image: priicer,
    description:
      "EKM Metering Inc. An app to measure meters and automatically turn on and off household appliances based on the price of electricity.",
    stack: [rails, ruby, javascript, html, css /*"stimulus" */],
    url: "https://www.priicer.com/",
  },
  {
    title: "Meal Buddy",
    image: dangApp,
    description: "A Node.js app personal project",
    stack: [node, express, javascript, html, css /* mongodb */],
    url: "https://meal-buddy.herokuapp.com/",
  },
];
console.log(projects[0].stack);
const Projects = props => (
  <ProjectsList>
    {projects.map(project => (
      <Project
        key={project.title}
        image={project.image}
        title={project.title}
        description={project.description}
        stack={project.stack}
        url={project.url}
      />
    ))}
  </ProjectsList>
);

export default Projects;

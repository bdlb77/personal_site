import React from "react";
import styled from "styled-components";
import Project from "./Project";
import dangApp from "../images/dang_app.jpg";
import immigration from "../images/immigration_works.jpg";
import priicer from "../images/priicer_app.jpg";

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
    stack: [],
    url: "https://immigration-legaltech.herokuapp.com/",
  },
  {
    title: "Priicer",
    image: priicer,
    description:
      "EKM Metering Inc. An app to measure meters and automatically turn on and off household appliances based on the price of electricity.",
    stack: [],
    url: "https://www.priicer.com/",
  },
  {
    title: "Now That's Delicious!",
    image: dangApp,
    description: "A Node.js app tutorial from Wes Bos. ",
    stack: [],
    url: "https://now-thats-delicious-bl.herokuapp.com/",
  },
];
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

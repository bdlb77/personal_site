import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Project from "./Project";
import dangApp from "../images/dang_app.jpg";
import MealBuddy from "../images/mealbuddy.png";
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
import mongodb from "../assets/mongodb.svg";

const StimulusI = props => (
  <StaticQuery
    query={graphql`
      query {
        stimulus: file(relativePath: { eq: "stimulus.jpg" }) {
          childImageSharp {
            fixed(width: 65) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.stimulus.childImageSharp.fixed} />}
  />
);

const ProjectsSection = styled.section`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    line-height: 4rem;
    box-shadow: 0px 15px 0 ${props => props.theme.black};
    align-self: center;
    text-align: center;
  }
`;
const ProjectsList = styled.div`
  min-height: 120vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-items: center;
  justify-items: center;
  margin: 1rem;
  margin-top: 4rem;

  @media screen and (max-width: 770px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
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
    stack: [rails, ruby, javascript, html, css, StimulusI],
    url: "https://www.priicer.com/",
  },
  {
    title: "Meal Buddy",
    image: MealBuddy,
    description: "A Node.js app personal project",
    stack: [node, express, javascript, html, css, mongodb],
    url: "https://meal-buddy.herokuapp.com/",
  },
];
const Projects = props => (
  <ProjectsSection>
    <h1>Projects</h1>
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
  </ProjectsSection>
);

export default Projects;

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
const Projects = props => (
  <ProjectsList>
    <Project image={dangApp} />
    <Project image={immigration} />
    <Project image={priicer} />
  </ProjectsList>
);

export default Projects;

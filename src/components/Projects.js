import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ProjectsList = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Projects = props => (
  <ProjectsList>
    <Project />
    <Project />
    <Project />
  </ProjectsList>
);

export default Projects;

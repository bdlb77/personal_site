import React from "react";
import styled from "styled-components";
import bryimg from "../images/bryimg.jpg";
const ProjectStyles = styled.div`
  width: 30vw;
  height: 120vh;
  display: grid;
  grid-template-rows: 25% 55% 20%;
  img {
    height: 100%;
    width: 100%;
    background: ${props => props.theme.black};
  }
  .icons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .icons-wrapper {
    display: flex;
    justify-content: space-around;
  }

  .icon {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background: ${props => props.theme.snow};
  }
  .description {
    background-color: ${props => props.theme.snow};
  }
`;
const Project = props => {
  return (
    <ProjectStyles>
      <img src={props.image} alt="Self Portrait" />
      <div className="icons-wrapper">
        <div className="icons icons-left">
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
        </div>
        <div className="icons icons-right">
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
        </div>
      </div>
      <div className="description">description</div>
    </ProjectStyles>
  );
};

export default Project;

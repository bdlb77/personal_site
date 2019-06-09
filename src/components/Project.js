import React from "react";
import styled from "styled-components";
import bryimg from "../images/bryimg.jpg";
const ProjectStyles = styled.div`
  width: 30vw;
  height: 120vh;
  display: grid;
  grid-template-rows: 30% 50% 20%;
  img {
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
    box-shadow: 0 0 24px ${props => props.theme.black};
    &:hover {
      transform: scale(1.01);
      opacity: 0.7;
    }
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
    background-color: ${props => props.theme.darkGray};
    color: ${props => props.theme.snow};
    box-shadow: ${props => props.theme.boxShadow};
    padding: 1rem;
    p {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
  }
`;
const Project = props => {
  return (
    <ProjectStyles>
      <a href={props.url} target="_blank">
        <img src={props.image} alt="Self Portrait" />
      </a>
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
      <div className="description">
        <p>{props.description}</p>
      </div>
    </ProjectStyles>
  );
};

export default Project;

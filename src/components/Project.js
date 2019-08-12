import React, { useState } from "react";
import styled from "styled-components";
import IconList from "./IconList";
const ProjectStyles = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem 1rem;
  transition: 1s all ease;

  @media screen and (max-width: 770px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    min-height: unset;
  }
`;

const StyledImage = styled.a`
  height: 35vh;
  margin-bottom: 1rem;
  img {
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
    box-shadow: ${props => props.theme.boxShadow};
    &:hover {
      transform: scale(1.01);
      opacity: 0.7;
    }
  }
`;

const StyledDesc = styled.div`
  margin-top: 1rem;
  background-color: ${props => props.theme.darkGray};
  color: ${props => props.theme.snow};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 1rem;
  overflow-y: auto;
  height: 30vh;
  transition: all 1s ease;

  ${props =>
    props.isActive
      ? `
    transform: translateY(0);
  `
      : `
    transform: translateY(-60vh);
  `}

  p {
    font-size: 1rem;
    line-height: 2.1rem;
  }
`;
const Project = props => {
  const [showStack, setShowStack] = useState(false);

  return (
    <ProjectStyles isActive={showStack}>
      <a href={props.url} target="_blank">
        <img src={props.image} alt="Self Portrait" />
      </a>
      <CSSTransition in={showStack} timeout={300} classNames="icons">
        <IconList stack={props.stack} className="icon-list" />
      </CSSTransition>
      <div className="description" onClick={() => setShowStack(!showStack)}>
        <p>{props.description}</p>
      </div>
    </ProjectStyles>
  );
};

export default Project;

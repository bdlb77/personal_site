import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import IconList from "./IconList";
const ProjectStyles = styled.div`
  margin: 1rem 0;
  min-height: 120vh;
  display: grid;
  grid-template-rows: 30% 50% 20%;
  margin: 0 1rem 1rem 1rem;
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
  .description {
    background-color: ${props => props.theme.darkGray};
    color: ${props => props.theme.snow};
    box-shadow: ${props => props.theme.boxShadow};
    padding: 1rem;
    overflow-y: auto;
    transition: all 1s ease;

    p {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
  }

  .description-enter {
    transform: translateY(0);
  }
  .description-enter-active {
    /* transition: all 1s ease; */
    transform: translateY(150px);
  }
  .description-exit-active {
    /* transition: all 1s ease; */
    transform: translateY(150px);
  }
  .description-exit {
    transform: translateY(0);
  }
  .stack-enter {
    opacity: 0;
  }
  .stack-enter-active {
    opacity: 1;
    transition: all 1s ease;
  }
  .stack-exit {
    opacity: 1;
  }
  .stack-exit-active {
    opacity: 0;
    transition: all 1s ease;
  }
  @media screen and (max-width: 770px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    min-height: unset;
  }
`;
const Project = props => {
  const [showStack, setShowStack] = useState(false);
  return (
    <ProjectStyles>
      <a href={props.url} target="_blank">
        <img src={props.image} alt="Self Portrait" />
      </a>
      {showStack && (
        <CSSTransition
          in={showStack}
          timeout={{ enter: 2000, exit: 2000 }}
          classNames="stack"
          className="stack"
          unmountOnExit
        >
          <IconList stack={props.stack} />
        </CSSTransition>
      )}
      <CSSTransition
        in={showStack}
        timeout={{ enter: 500, exit: 500 }}
        classNames="description"
      >
        <div className="description" onClick={() => setShowStack(!showStack)}>
          <p>{props.description}</p>
        </div>
      </CSSTransition>
    </ProjectStyles>
  );
};

export default Project;

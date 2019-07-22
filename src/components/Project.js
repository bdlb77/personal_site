import React from "react";
import styled from "styled-components";
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
    overflow-y: auto;

    p {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
  }
  @media screen and (max-width: 770px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    min-height: unset;
    .icons {
      width: inherit;
      display: flex;
      flex-direction: unset;
      flex-wrap: wrap;
      margin: 1rem 0;
    }
  }
`;

const StackStyles = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.theme.darkGray};
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  svg,
  img {
    width: 65%;
    height: 65%;
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
          {props.stack.slice(0, 3).map(stack => {
            let Stack = stack;
            return <StackWrapper stack={stack} />;
          })}
        </div>
        <div className="icons icons-right">
          {props.stack.slice(3).map(stack => {
            return <StackWrapper stack={stack} />;
          })}
        </div>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </ProjectStyles>
  );
};
const StackWrapper = props => {
  let Stack = props.stack;
  return (
    <StackStyles>
      <Stack />
    </StackStyles>
  );
};
export default Project;

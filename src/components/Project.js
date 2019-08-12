import React, { useState } from "react";
import styled from "styled-components";
import IconList from "./IconList";
const ProjectStyles = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem 1rem;
  transition: 1s all ease;
  width: 30%;
  @media screen and (max-width: 1067px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    min-height: unset;
  }
`;

const StyledImage = styled.a`
  height: 300px;
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

  @media screen and (min-width: 768px) and (max-width: 1076px) {
    height: 400px;
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
  transition: all 1s ease, box-shadow 0.4s ease;

  &:hover {
    box-shadow: 5px -20px 24px -15px #333;
  }
  @media screen and (min-width: 450px) and (max-width: 1067px) {
    ${props =>
      props.isActive
        ? `
      transform: translateY(-8vh);
      `
        : `
      transform: translateY(-20vh);
      `}
  }

  @media screen and (min-width: 1068px) {
    ${props =>
      props.isActive
        ? `
          transform: translateY(0);
          `
        : `
          transform: translateY(-60vh);
          `}
  }

  p {
    font-size: 1rem;
    line-height: 2.1rem;
  }
`;
const Project = props => {
  const [showStack, setShowStack] = useState(false);

  return (
    <ProjectStyles isActive={showStack}>
      <StyledImage href={props.url} target="_blank">
        <img src={props.image} alt="Self Portrait" />
      </StyledImage>
      <IconList
        stack={props.stack}
        showStack={showStack}
        className="icon-list"
      />
      <StyledDesc isActive={showStack} onClick={() => setShowStack(!showStack)}>
        <p>{props.description}</p>
      </StyledDesc>
    </ProjectStyles>
  );
};

export default Project;

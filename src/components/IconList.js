import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0%  {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1%;
  }

   20%, 100% {
    opacity: 0;
  }

  100% {
  }
`;
const IconsListStyles = styled.div`
  display: flex;
  justify-content: space-around;
  transition: all 2s ease;
  height: 60vh;
  visibility: ${props => (props.isActive ? "visible" : "hidden")};
  transition: height 1s linear;

  @media screen and (max-width: 449px) {
    visibility: visible;
  }
  @media screen and (min-width: 450px) and (max-width: 1067px) {
    height: 20vh;
  }
  @media screen and (min-width: 450px) {
    .icons {
      ${StackStyles} div:nth-child(1) {
        animation: ${props => props.isActive && fadeIn} 0.5s linear;
      }
      ${StackStyles} div:nth-child(2) {
        animation: ${props => props.isActive && fadeIn} 0.7s linear;
      }
      ${StackStyles} div:nth-child(3) {
        animation: ${props => props.isActive && fadeIn} 1s linear;
      }
    }
  }
  .icons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .icon {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background: ${props => props.theme.snow};
  }

  @media screen and (max-width: 1067px) {
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
const IconList = props => {
  const { showStack, stack } = props;

  return (
    <IconsListStyles isActive={showStack}>
      <div className="icons icons-left">
        {stack.slice(0, 3).map((Stack, index) => (
          <StackStyles key={index} index={index}>
            <Stack />
          </StackStyles>
        ))}
      </div>
      <div className="icons icons-right">
        {stack.slice(3).map((Stack, index) => (
          <StackStyles key={index}>
            <Stack />
          </StackStyles>
        ))}
      </div>
    </IconsListStyles>
  );
};
export default IconList;

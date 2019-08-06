import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const IconsListStyles = styled.div`
  display: flex;
  justify-content: space-around;
  height: 0;
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
  @media screen and (max-width: 770px) {
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
  return (
  <CSSTransition in={showStack} timeout={300} classNames="icons">

    <IconsListStyles>
      <div className="icons icons-left">
        {props.stack.slice(0, 3).map((Stack, index) => (
          <StackStyles key={index}>
            <Stack />
          </StackStyles>
        ))}
      </div>
      <div className="icons icons-right">
        {props.stack.slice(3).map((Stack, index) => (
          <StackStyles key={index}>
            <Stack />
          </StackStyles>
        ))}
      </div>
    </IconsListStyles>
    <CSSTransition/>
  );
};
export default IconList;

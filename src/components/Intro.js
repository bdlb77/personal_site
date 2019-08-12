import React, { Component } from "react";
import styled from "styled-components";
import backgroundBg from "../images/background.svg";
const IntroStyles = styled.div`
  width: 100vw;
  height: 110vh;
  margin: 0 auto;
  background: url(${backgroundBg});
  background-size: cover;
  background-position: top top;
  background-position: left 39% bottom 4%;
`;
const IntroWrapper = styled.div`
  padding: 7rem 1rem;
  font-size: 8rem;
  margin-top: -5rem;
  h1 {
    margin: 0;
    font-size: 3.5rem;
  }
  .self__name {
    margin-bottom: 3.5rem;
  }
  span {
    box-shadow: 0px 4px 0px ${props => props.theme.purple};
    text-shadow: 0px 15px 10px ${props => props.theme.purple};
  }
`;
class Intro extends Component {
  render() {
    return (
      <IntroStyles>
        <IntroWrapper>
          <div className="self">
            <div className="self__name">
              <h1>Howdy,</h1>
              <h1>I'm Bryan!</h1>
            </div>
            <div className="self__job">
              <h1>I am a Fullstack Developer</h1>
              <h1>
                in <span>Tel Aviv</span>
              </h1>
            </div>
          </div>
        </IntroWrapper>
      </IntroStyles>
    );
  }
}

export default Intro;

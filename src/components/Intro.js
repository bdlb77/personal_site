import React, { Component } from "react"
import styled from "styled-components"

const IntroStyles = styled.div`
  background-color: ${props => props.theme.black};
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`
const IntroWrapper = styled.div`
  padding: 5vw;
  font-size: 8rem;
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
`
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
    )
  }
}

export default Intro

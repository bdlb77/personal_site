import React from "react"
import styled from "styled-components"

const AboutMeStyles = styled.div`
  padding: 3rem 5vw;
  height: 80vh;
  display: grid;
  grid-template-columns: 60% 40%;
  p {
    font-size: 1.5rem;
    line-height: 2rem;
    text-shadow: 0px 0px 1px ${props => props.theme.snow};
  }
`
const AboutMe = props => (
  <AboutMeStyles>
    <div className="about_me">
      <p>
        My name is Bryan and I’m a Fullstack developer who loves to hack in Ruby
        on Rails and JavaScript. I like to learn and try out new technologies
        while strengthening my foundation in things that I already know. I love
        gaming. And by that I mean I LOOOOOVE gaming. I’d love to move in to
        Game Development, so I can built cool things I’d be able to share with
        others who also love gaming.
      </p>
    </div>
    <div className="pic">Picture will be here</div>
  </AboutMeStyles>
)

export default AboutMe

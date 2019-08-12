import React from "react";
import styled from "styled-components";
import Image from "./image";
const AboutMeStyles = styled.div`
  padding: 3rem 5vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-flow: row;
  align-items: center;
  p {
    font-size: 1.5rem;
    line-height: 3.5rem;
    text-shadow: 0px 0px 1px ${props => props.theme.snow};
    margin-right: 2rem;
  }
  .pic {
    align-self: center;
    box-shadow: 0 0 24px ${props => props.theme.black};
  }

  @media screen and (max-width: 450px) {
    padding: 3rem 0;
    p {
      padding-left: 1rem;
    }
  }
`;
const AboutMe = props => (
  <AboutMeStyles>
    <div className="about_me">
      <p>
        My name is Bryan and I’m a Full Stack developer who loves to hack in
        Ruby on Rails and JavaScript. I like to learn and try out new
        technologies while strengthening my foundation in things that I already
        know. I love gaming. And by that I mean I LOOOOOVE gaming. I’d love to
        move in to Game Development, so I can built cool things I’d be able to
        share with others who also love gaming.
      </p>
    </div>
    <div className="pic">
      <Image />
    </div>
  </AboutMeStyles>
);

export default AboutMe;

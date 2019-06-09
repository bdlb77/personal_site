import React from "react";
import OpenSources from "./OpenSources";
import Articles from "./Articles";
import styled from "styled-components";
const ContributionsStyles = styled.section`
  margin-top: 5rem;
  display: grid;
  & > h1 {
    font-size: 2.5rem;
    line-height: 4rem;
    box-shadow: 0px 15px 0 ${props => props.theme.purple};
  }
  grid-template-areas:
    "title1 title2"
    "os articles";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  justify-items: center;
  align-items: center;
  height: 100vh;

  .title1 {
    grid-area: title1;
  }
  .title2 {
    grid-area: title2;
  }
  .os {
    grid-area: os;
  }
  .articles {
    grid-area: articles;
  }
`;
const Contributions = props => (
  <ContributionsStyles>
    <h1 className="title1">Open Source</h1>
    <OpenSources className="os" />
    <h1 className="title2">Articles</h1>
    <Articles className="articles" />
  </ContributionsStyles>
);

export default Contributions;

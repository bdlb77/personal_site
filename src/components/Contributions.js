import React from "react";
import styled from "styled-components";
import OpenSources from "./OpenSources";
import Articles from "./Articles";
const ContributionsStyles = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ContributionTitleWrapper = styled.header`
  display: flex;
  justify-content: space-around;
`;

const ContributionBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
`;

const Contributions = props => (
  <ContributionsStyles>
    <OpenSources className="os" />
    <Articles className="articles" />
  </ContributionsStyles>
);

export default Contributions;

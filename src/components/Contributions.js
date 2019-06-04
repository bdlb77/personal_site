import React from "react";
import OpenSources from "./OpenSources";
import Articles from "./Articles";
import styled from "styled-components";
const ContributionsStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;
const Contributions = props => (
  <ContributionsStyles>
    <OpenSources />
    <Articles />
  </ContributionsStyles>
);

export default Contributions;

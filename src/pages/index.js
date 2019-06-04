import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contributions from "../components/Contributions";
import backgroundBg from "../images/bgbg.svg";
import styled from "styled-components";

const BGstyles = styled.div`
  background: url(${backgroundBg});
  background-size: contain;
  background-repeat: no-repeat;
`;
const HomePage = () => (
  <Layout>
    <SEO title="BL" />
    <Intro />
    <BGstyles>
      <AboutMe />
      <Projects />
      <Contributions />
    </BGstyles>
  </Layout>
);

export default HomePage;

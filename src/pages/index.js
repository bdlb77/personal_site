import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contributions from "../components/Contributions";
import backgroundBg from "../images/bgbg.svg";

const BGstyles = styled.div`
  background: url(${backgroundBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
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

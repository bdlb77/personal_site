import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contributions from "../components/Contributions";

const HomePage = () => (
  <Layout>
    <SEO title="BL" />
    <Intro />
    <AboutMe />
    <Projects />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Contributions />
  </Layout>
);

export default HomePage;

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="BL" />
    <Intro />
    <AboutMe />
    <Projects />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import React from "react";
import ArticlesOS from "./styles/ArticlesOS";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
const OpenSourceWrapper = styled.div`
  display: flex;
`;
const OpenSourceStyle = styled.article`
  align-self: center;
  text-decoration: none;
  padding: 2rem 0 2rem 2rem;
  height: 300px;
  width: 600px;
  margin: 0 auto;
  background: ${props => props.theme.darkGray};
  box-shadow: ${props => props.theme.boxShadow};
  transition: all 0.7s ease;
  &:hover {
    opacity: 0.7;
    transform: scale(1.02);
  }
  h2 {
    font-size: 2.5rem;
  }
  a {
    display: grid;
    grid-auto-rows: 2fr 1fr;
    color: ${props => props.theme.snow};
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
`;
const OpenSources = ({ githubData }) => {
  return (
    <ArticlesOS>
      <h1 className="title1">Open Source</h1>
      <OpenSourceWrapper>
        <OpenSource repo={githubData.data.repository} />
      </OpenSourceWrapper>
    </ArticlesOS>
  );
};
const OpenSource = ({ repo }) => (
  <OpenSourceStyle>
    <a href={repo.pullRequest.url} target="_blank">
      <h2>{repo.owner.login}</h2>
      <h3>{repo.pullRequest.mergedAt}</h3>
    </a>
  </OpenSourceStyle>
);

export default () => (
  <StaticQuery
    query={graphql`
      query onGitHub {
        githubData {
          data {
            repository {
              owner {
                login
                avatarUrl
              }
              pullRequest {
                url
                mergedAt
                authorAssociation
              }
            }
          }
        }
      }
    `}
    render={({ githubData }) => <OpenSources githubData={githubData} />}
  />
);

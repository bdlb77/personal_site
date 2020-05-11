import React from "react";
import ArticlesOS from "./styles/ArticlesOS";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
const OpenSourceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-row-gap: 2rem;
  width: 80%;
`;
const OpenSourceStyle = styled.article`
  position: relative;
  align-self: center;
  text-decoration: none;
  padding: 0 0 1rem 1rem;
  height: 300px;
  width: 450px;
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
        color: ${props => props.theme.snow};
    text-decoration: none;
  }
  img {
    position: absolute;
    top: 5px;
    right: 5px;

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
        <OpenSource repo={githubData.data.mateStack} />
        <OpenSource repo={githubData.data.secretsStore} />
        <OpenSource repo={githubData.data.devTo} />
      </OpenSourceWrapper>
    </ArticlesOS>
  );
};
const OpenSource = ({ repo }) => {
  // const options = { year: "numeric", month: "long", day: "numeric" };
  const stars = `⭐️ ${repo.stargazers.totalCount}`
  return (
    <OpenSourceStyle>
      <a href={repo.url} target="_blank">
        <img src={repo.owner.avatarUrl} alt={repo.owner.login} height="70"/>
        <h2>{repo.owner.login}</h2>
        <h4>{repo.name}</h4>
        <p>{repo.description}</p>
        <p>{stars}</p>  
      </a>
    </OpenSourceStyle>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query onGitHub {
        githubData {
          data {
            mateStack {
              owner {
                login
                avatarUrl
              }
              name
              url
              description
              stargazers {
                totalCount
              }
              primaryLanguage {
                name
              }
            }
            secretsStore {
              owner {
                login
                avatarUrl
              }
              name
              url
              description
              stargazers {
                totalCount
              }
              primaryLanguage {
                name
              }
            }
            devTo {
              owner {
                login
                avatarUrl
              }
              name
              url
              description
              stargazers {
                totalCount
              }
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    `}
    render={({ githubData }) => <OpenSources githubData={githubData} />}
  />
);

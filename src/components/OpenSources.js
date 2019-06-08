import React from "react";
import ArticlesOS from "./styles/ArticlesOS";
import { StaticQuery, graphql } from "gatsby";

const OpenSources = ({ githubData }) => {
  console.log(githubData);
  return (
    <ArticlesOS>
      <OpenSource repo={githubData.data.repository} />
    </ArticlesOS>
  );
};
const OpenSource = ({ repo }) => (
  <div>
    <img src={repo.owner.avatarUrl} alt={repo.owner.login} />
    <h1>{repo.owner.login}</h1>
  </div>
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
              }
              pullRequest {
                url
                mergedAt
              }
            }
          }
        }
      }
    `}
    render={({ githubData }) => <OpenSources githubData={githubData} />}
  />
);

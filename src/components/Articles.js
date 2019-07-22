import React from "react";
import styled from "styled-components";
import ArticlesOS from "./styles/ArticlesOS";
import { StaticQuery, graphql } from "gatsby";
import Article from "./Article";
const ArticlesWrapper = styled.div`
  display: flex;
`;
const Articles = ({ articles }) => {
  return (
    <ArticlesOS>
      <h1 className="title2">Articles</h1>
      <ArticlesWrapper>
        {articles.map((articleEdge, key) => (
          <Article key={key} article={{ ...articleEdge.node.article }} />
        ))}
      </ArticlesWrapper>
    </ArticlesOS>
  );
};
export default () => (
  <StaticQuery
    query={graphql`
      query allDevArticles {
        allDevArticles {
          edges {
            node {
              article {
                id
                title
                description
                cover_image
                path
                readable_publish_date
              }
            }
          }
        }
      }
    `}
    render={data => <Articles articles={data.allDevArticles.edges} />}
  />
);

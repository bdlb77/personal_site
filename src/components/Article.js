import React from "react";
import styled from "styled-components";

const ArticleStyles = styled.article`
  align-self: center;
  height: 300px;
  width: 600px;
  text-shadow: 1px 1px 1px ${props => props.theme.snow};
  a {
    text-decoration: none;
    color: ${props => props.theme.snow};
  }
  img {
    transition: all 0.7s ease;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 15px #000;
    filter: grayscale(40%) sepia(1);
    &:hover {
      opacity: 0.7;
      transform: scale(1.02);
    }
  }
`;
const Article = ({ article }) => (
  <ArticleStyles>
    <a href={`https://dev.to${article.path}`} target="_blank">
      <img src={article.cover_image} alt={article.title} />
      <h1>{article.title}</h1>
      <h2>{article.readable_publish_date}</h2>
    </a>
  </ArticleStyles>
);

export default Article;

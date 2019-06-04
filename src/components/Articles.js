import React from "react";
import styled from "styled-components";
import ArticlesOS from "./styles/ArticlesOS";

const Articles = props => (
  <ArticlesOS>
    <Article />
    <Article />
  </ArticlesOS>
);

const Article = props => <div>Article</div>;
export default Articles;

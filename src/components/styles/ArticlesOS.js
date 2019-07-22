import styled from "styled-components";

const ArticlesOS = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin: 4rem 0;
  h1 {
    font-size: 2.5rem;
    line-height: 4rem;
    box-shadow: 0px 15px 0 ${props => props.theme.purple};
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    height: unset;
  }
`;

export default ArticlesOS;

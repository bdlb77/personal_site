import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaEnvelope,
  FaDev,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const FooterStyles = styled.footer`
  padding: 2rem 0;
  height: 40vh;
  box-shadow: 0 -5px 20px -5px ${props => props.theme.purple};
  background: ${props => props.theme.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  ul {
    a {
      text-decoration: none;
      color: ${props => props.theme.snow};
      transition: all 0.2s ease;
      &:hover {
        color: ${props => props.theme.purple};
      }
    }
    li {
      margin: 0;
      padding: 0;
    }
    margin: 0;
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 50vw;
    font-size: 1.75rem;
  }
  .footer_sig {
    margin-right: 2rem;
    text-align: center;
    a {
      color: ${props => props.theme.purple};
    }
  }
  @media screen and (max-width: 1067px) {
    justify-content: center;
    ul,
    .footer_sig {
      width: 100%;
    }
    .footer_sig {
      margin: 0;
    }
    ul {
      padding: 0;
    }
  }
`;
const Footer = props => (
  <FooterStyles>
    <ul>
      <li>
        <a href="https://github.com/bdlb77" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/bdlb77/" target="_blank">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://dev.to/bdlb77" target="_blank">
          <FaDev />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/brybrybug" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="mailto:bryan.leigh77@gmail.com" target="_blank">
          <FaEnvelope />
        </a>
      </li>
    </ul>
    <div className="footer_sig">
      {" "}
      © {new Date().getFullYear()}, Designed and Developed with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a> and 💙 by
      {` `}
      Bryan Leighton
    </div>
  </FooterStyles>
);

export default Footer;

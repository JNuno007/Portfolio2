import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { withNamespaces } from "react-i18next";

const Phrase = styled.div`
  height: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BlinkCursor = styled.h1`
  font-weight: 100;
  font-size: 38px;
  color: #2e3d48;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;

  @keyframes "blink" {
    from,
    to {
      color: transparent;
    }
    50% {
      color: gray;
    }
  }
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 55px;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
`;

const LinksWrapper = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const GITHUB_URL = "https://github.com/JNuno007";
const LINKEDIN_URL = "https://www.linkedin.com/in/joaocortezferreira/";

export class Intro extends Component {
  goToAbout = () => {
    window.location = "/about";
  };

  render() {
    const { t } = this.props;
    return (
      <Phrase>
        <h2>{t("hello1")}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Roboto",
          }}
        >
          <h1 style={{ color: "gray" }}>{"<"} </h1>
          <h1 style={{ color: "#0057e5" }}> {" João Ferreira "} </h1>
          <h1 style={{ color: "gray" }}> {" />"}</h1>
          <BlinkCursor>|</BlinkCursor>
        </div>
        <h2>{t("hello2")}</h2>
        <br />
        <Link to="/about">
          <Button variant="outline-dark">{t("aboutMeBtn")}</Button>
        </Link>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <FooterWrapper>
            <LinksWrapper>
              <AiFillGithub
                onClick={() => window.open(GITHUB_URL, "_blank")}
                size="30px"
                style={{ marginRight: "10px" }}
              />
            </LinksWrapper>
            <LinksWrapper>
              <AiFillLinkedin
                onClick={() => window.open(LINKEDIN_URL, "_blank")}
                size="30px"
              />
            </LinksWrapper>
          </FooterWrapper>
        </div>
      </Phrase>
    );
  }
}

export default withNamespaces()(Intro);

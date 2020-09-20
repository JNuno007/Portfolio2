import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";

import { GoHome } from "react-icons/go";
import { BsFileEarmarkText, BsPerson } from "react-icons/bs";
import { RiMailSendLine, RiDashboardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import i18n from "../i18n";

import CV from "../cv/CV.pdf";
import PT from "../images/pt.svg";
import EN from "../images/uk.svg";

const NavBar = styled.div`
  width: 100%;
  height: 45px;
  background-color: #252a35;
  display: none;

  @media only screen and (max-width: 420px) {
    & {
      display: flex;
      position: fixed;
      bottom: 0;
      margin-top: 15px;
      color: white;
      z-index: 10;
    }
  }

  & .col {
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

const ColWrapper = styled(Col)`
  background-color: ${(props) =>
    props.endpoint === window.location.pathname ? "#454B52" : "#252a35"};
`;

const LinkWrapper = styled(Link)`
  color: white;
`;

const LanguageWrapper = styled(Button)`
  position: absolute;
  top: 125px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
`;

const ImgWrapper = styled.img`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  box-shadow: 5px 5px 20px  rgba(0,0,0,0.6);
`;

class MobileNavbar extends Component {
  changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("pt");
    } else {
      i18n.changeLanguage("en");
    }
  };

  render() {
    return (
      <>
        <NavBar>
          <Row style={{ width: "100%", alignItems: "center", marginLeft: 0 }}>
            <ColWrapper endpoint={"/intro"}>
              <LinkWrapper to="/intro">
                <GoHome size="1.5em" />
              </LinkWrapper>
            </ColWrapper>

            <ColWrapper endpoint={"/about"}>
              <LinkWrapper to="/about">
                <BsPerson size="1.5em" />
              </LinkWrapper>
            </ColWrapper>

            <ColWrapper endpoint={"/projects"}>
              <LinkWrapper to="/projects">
                <RiDashboardLine size="1.5em" />
              </LinkWrapper>
            </ColWrapper>

            <ColWrapper endpoint={"/contacts"}>
              <LinkWrapper to="/contacts">
                <RiMailSendLine size="1.5em" />
              </LinkWrapper>
            </ColWrapper>

            <ColWrapper onClick={() => window.open(CV)}>
              <LinkWrapper to="/intro">
                <BsFileEarmarkText size="1.5em" />
              </LinkWrapper>
            </ColWrapper>
          </Row>
        </NavBar>
        <LanguageWrapper variant="dark" onClick={this.changeLanguage}>
          {i18n.language === "en" ? (
            <ImgWrapper src={EN} width="35px" />
          ) : (
            <ImgWrapper src={PT} width="35px" />
          )}
        </LanguageWrapper>
      </>
    );
  }
}

export default withNamespaces()(MobileNavbar);

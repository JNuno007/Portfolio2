import React, {useState} from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import { GoHome } from "react-icons/go";
import { BsPerson, BsFileEarmarkText } from "react-icons/bs";
import { RiMailSendLine, RiDashboardLine } from "react-icons/ri";
import Main from "./Main";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

import CV from "../cv/CV.pdf";
import { Button } from "react-bootstrap";
import PT from "../images/pt.svg";
import EN from "../images/uk.svg";

// Toggle
const StyledToggle = styled(Toggle)`
  color: white;
`;
StyledToggle.defaultProps = Toggle.defaultProps;

const SideNavStyled = styled(SideNav)`
  background-color: #252a35;
  & > * {
    color: white !important;
  }

  @media only screen and (max-width: 420px) {
    & {
      display: none;
    }
  }
`;

const NavbarVertical = ({ t }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    if (i18n.language == "en") {
      i18n.changeLanguage("pt");
      setLanguage("pt");
    } else {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  };

  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNavStyled
              onSelect={(selected) => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="intro">
                <NavItem eventKey="intro">
                  <NavIcon>
                    <GoHome style={{ fontSize: "1.75em" }} title="Home" />
                  </NavIcon>
                  <NavText>{t('sideBarIntro')}</NavText>
                </NavItem>
                <NavItem eventKey="about">
                  <NavIcon>
                    <BsPerson style={{ fontSize: "1.75em" }} title="About" />
                  </NavIcon>
            <NavText>{t('sideBarAbout')}</NavText>
                </NavItem>
                <NavItem eventKey="projects">
                  <NavIcon>
                    <RiDashboardLine
                      style={{ fontSize: "1.75em" }}
                      title="Projects"
                    />
                  </NavIcon>
                  <NavText>{t('sideBarProjects')}</NavText>
                </NavItem>
                <NavItem eventKey="contacts">
                  <NavIcon>
                    <RiMailSendLine
                      style={{ fontSize: "1.75em" }}
                      title="Contact"
                    />
                  </NavIcon>
                  <NavText>{t('sideBarContact')}</NavText>
                </NavItem>
                <NavItem eventKey="resume">
                  <NavIcon>
                    <BsFileEarmarkText
                      style={{ fontSize: "1.75em" }}
                      title="CV"
                    />
                  </NavIcon>
                  <NavText>{t('sideBarCV')}</NavText>
                </NavItem>
                <Button variant="dark" onClick={changeLanguage} block>
                  {language === 'en' ? <img src={EN} width="20px"/> : <img src={PT} width="20px"/>}
                </Button>
              </SideNav.Nav>
            </SideNavStyled>
            <main style={{ height: "100%" }}>
              <Route
                path="/"
                exact
                component={() => <Main children={<Intro />} />}
              />
              <Route
                path="/intro"
                exact
                component={() => <Main children={<Intro />} />}
              />
              <Route
                path="/about"
                component={() => <Main children={<About />} />}
              />
              <Route
                path="/projects"
                component={() => <Main children={<Projects />} />}
              />
              <Route
                path="/contacts"
                exact
                component={() => <Main children={<Contacts />} />}
              />
              <Route
                path="/resume"
                exact
                component={() => {
                  window.open(CV);
                  window.location = "/";
                  return false;
                }}
              />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  );
};

export default withNamespaces()(NavbarVertical);

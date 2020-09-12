import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { GoHome } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { RiMailSendLine, RiDashboardLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
`

export default class MobileNavbar extends Component {
  render() {
    return (
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
        </Row>
      </NavBar>
    );
  }
}

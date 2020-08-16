import React, { Component } from "react";
import StyledContainer from "../components/StyledContainer";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import WarningToast from "../components/WarningToast";
import { Row, Col } from "react-bootstrap";
import Skill from "../components/Skill";

//Images
import HTML from "../images/html.svg";
import CSS from "../images/css.svg";
import VANILLA from "../images/vanillajs.svg";
import ANGULAR from "../images/angular.svg";
import REACT from "../images/react.svg";
import VUE from "../images/vue.svg";
import BOOTSRAP from "../images/bootstrap.svg";
import MATERIALUI from "../images/materialui.svg";

//Mobile
import ANDROID_STUDIO from "../images/androidstudio.svg";
import SWIFT from "../images/swift.svg";

//Server Side
import NODEJS from "../images/nodejs.svg";
import EXPRESSJS from "../images/expressjs.svg";
import JAVA from "../images/java.svg";
import JAVASPRING from "../images/spring.svg";

//Back End
import MYSQL from "../images/mysql.svg";
import ORACLE from "../images/oracle.svg";
import POSTGRES from "../images/postgresql.svg";
import MSSQL from "../images/mssql.svg";
import MONGODB from "../images/mongodb.svg";
import SEQUELIZE from "../images/sequelize.svg";

//Other Tools
import GITHUB from "../images/github.svg";
import JIRA from "../images/jira.svg";
import BITBUCKET from "../images/bitbucket.svg";
import TRELLO from "../images/trello.svg";
import MAVEN from "../images/maven.svg";
import DOCKER from "../images/docker.svg";
import WEBPACK from "../images/webpack.svg";

const ContainerWrapper = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
  overflow: "hidden";
`;

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      openToast: false,
    };
  }

  componentDidMount() {
    this.setState({ openToast: true });
  }

  render() {
    return (
      <>
        <ContainerWrapper>
          <Row>
            <Col>
              <StyledContainer title="Front-End">
                <Row>
                  <Col xs={6} md>
                    <Skill title={"HTML"} image={HTML} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"CSS"} image={CSS} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"JavaScript"} image={VANILLA} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"AngularJS"} image={ANGULAR} stars={4} />
                  </Col>
                </Row>
                <p></p>
                <Row>
                  <Col xs={6} md>
                    <Skill title={"ReactJS"} image={REACT} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"VueJS"} image={VUE} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"Bootstrap"} image={BOOTSRAP} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"Material UI"} image={MATERIALUI} stars={4} />
                  </Col>
                </Row>
              </StyledContainer>
            </Col>
          </Row>
          <p></p>
          <Row>
            <Col>
              <StyledContainer title={"Mobile"}>
                <Row>
                  <Col xs={6} md>
                    <Skill
                      title={"Android Studio"}
                      image={ANDROID_STUDIO}
                      stars={4}
                    />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"Swift"} image={SWIFT} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"React Native"} image={REACT} stars={4} />
                  </Col>
                </Row>
              </StyledContainer>
            </Col>
          </Row>
          <p></p>
          <Row>
            <Col>
              <StyledContainer title={"Server Side"}>
                <Row>
                  <Col xs={6} md>
                    <Skill title={"Node JS"} image={NODEJS} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"Express JS"} image={EXPRESSJS} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"JAVA 8"} image={JAVA} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"JAVA Spring"} image={JAVASPRING} stars={4} />
                  </Col>
                </Row>
              </StyledContainer>
            </Col>
          </Row>
          <p></p>
          <Row>
            <Col>
              <StyledContainer title="Back-End">
                <Row>
                  <Col xs={6} md>
                    <Skill title={"MySQL"} image={MYSQL} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"Oracle"} image={ORACLE} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"Postgres"} image={POSTGRES} stars={4} />
                  </Col>
                </Row>
                <p></p>
                <Row>
                  <Col xs={6} md>
                    <Skill title={"MSSQL"} image={MSSQL} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"MongoDB"} image={MONGODB} stars={4} />
                  </Col>
                  <Col xs={6} md>
                    <Skill title={"Sequelize"} image={SEQUELIZE} stars={4} />
                  </Col>
                </Row>
              </StyledContainer>
            </Col>
          </Row>
          <p></p>
          <Row>
            <Col>
              <StyledContainer title={"Other Tools"}>
                <Row>
                  <Col md={4}>
                    <Skill title={"GitHub"} image={GITHUB} stars={4} />
                  </Col>
                  <Col md={4}>
                    <Skill title={"JIRA"} image={JIRA} stars={4} />
                  </Col>
                  <Col md={4}>
                    <Skill title={"Bitbucket"} image={BITBUCKET} stars={4} />
                  </Col>
                </Row>
                <p></p>
                <Row>
                  <Col md={4}>
                    <Skill title={"Trello"} image={TRELLO} stars={4} />
                  </Col>
                  <Col md={4}>
                    <Skill title={"Maven"} image={MAVEN} stars={4} />
                  </Col>
                  <Col md={4}>
                    <Skill title={"Docker"} image={DOCKER} stars={4} />
                  </Col>
                </Row>
                <p></p>
                <Row>
                  <Col md={4}>
                    <Skill title={"Webpack"} image={WEBPACK} stars={4} />
                  </Col>
                </Row>
              </StyledContainer>
            </Col>
          </Row>
        </ContainerWrapper>

        {this.state.openToast && (
          <WarningToast
            title={"Start Rating"}
            message={
              "The star rating represents the level of knowledge I have in a certain element"
            }
          />
        )}
      </>
    );
  }
}

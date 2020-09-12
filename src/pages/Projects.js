import React, { Component } from "react";
import CardProject from "../components/CardProject";
import Container from "react-bootstrap/Container";
import WarningToast from "../components/WarningToast";
import { Row, Col, Carousel } from "react-bootstrap";
import styled from "styled-components";

//Thumbnail
import CRYPTO_APP_IMAGE from "../images/thumbnails/cryptoapp.jpg";
import CRYPTO_STATS_IMAGE from "../images/thumbnails/cryptostats.jpg";
import CTF_IMAGE from "../images/thumbnails/ctf.jpg";
import DIGIMUSEUM_IMAGE from "../images/thumbnails/digimuseum.jpg";
import JUMP_IMAGE from "../images/thumbnails/jump.jpg";
import LEAGUE_LEGENDS_IMAGE from "../images/thumbnails/leagueoflegends.jpg";
import MY_IMS_IMAGE from "../images/thumbnails/myIMS.jpg";
import PERSONAL_APP_IMAGE from "../images/thumbnails/personalapp.jpg";
import PORTFOLIO_IMAGE from "../images/thumbnails/portfolio.png";
import STAR_WARS_IMAGE from "../images/thumbnails/starwars.jpg";
import TERRALVA_IMAGE from "../images/thumbnails/terralva.jpg";
import UNQUEUEIT_IMAGE from "../images/thumbnails/unqueueit.jpg";
import WEBSITE_IMAGE from "../images/thumbnails/website.jpg";
import RESTAURANTE_IMAGE from "../images/thumbnails/restaurant.jpg";
import PMS_IMAGE from "../images/thumbnails/pms.jpg";

//Tools and languages
import HTML from "../images/html.svg";
import CSS from "../images/css.svg";
import REACT from "../images/react.svg";
import ANDROID_STUDIO from "../images/androidstudio.svg";
import SWIFT from "../images/swift.svg";
import NODEJS from "../images/nodejs.svg";
import EXPRESSJS from "../images/expressjs.svg";
import JAVA from "../images/java.svg";
import ORACLE from "../images/oracle.svg";
import POSTGRES from "../images/postgresql.svg";
import SEQUELIZE from "../images/sequelize.svg";
import PROCESSING from "../images/processing.png";
import OPENCV from "../images/opencv.png";
import IONIC from "../images/ionic.png";
import HIBERNATE from "../images/hibernate.svg";
import MAPS_API from "../images/maps api.png";
import GEOCODING_API from "../images/geocoding api.png";
import JAVASCRIPT from "../images/javascript.svg";
import GRAFANA from "../images/grafana.png";
import INFLUXDB from "../images/influxdb.svg";
import TELEGRAF from "../images/telegraf.png";
import DOCKER from "../images/docker.svg";
import REDIS from "../images/redis.png";
import PHP from "../images/php.svg";
import LEAFLET from "../images/leaflet.png";
import KOA from "../images/koa.png";

//JUMP project
import JUMP_1 from "../images/carousel/ambiente.png";
import JUMP_2 from "../images/carousel/saltar.png";
import JUMP_3 from "../images/carousel/Screenshot_2.png";
import JUMP_4 from "../images/carousel/Screenshot_4.png";

//Descriptions
import projects from "../json/projects.json";

const ColWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 45px;
  overflow: hidden;
`;

const ToolsIcon = styled.img`
  margin: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export default class Projects extends Component {
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
      <Wrapper>
        <Container>
          <Row>
            <ColWrapper xs={12} md>
              <CardProject
                title="Personal App"
                image={PERSONAL_APP_IMAGE}
                video={"https://www.youtube.com/embed/ds-b5e6bb7k"}
                description={projects.personalApp}
                footer={
                  <>
                    <ToolsIcon
                      src={ANDROID_STUDIO}
                      title="Android Studio"
                      width={30}
                    />
                  </>
                }
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="DigiMuseu"
                image={DIGIMUSEUM_IMAGE}
                video={"https://www.youtube.com/embed/Zu8wYdqeDIU"}
                description={projects.digiMuseu}
                footer={
                  <>
                    <ToolsIcon
                      src={ANDROID_STUDIO}
                      title="Android Studio"
                      width={30}
                    />
                  </>
                }
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="UnQueueIT"
                image={UNQUEUEIT_IMAGE}
                video={"https://www.youtube.com/embed/tnrd91SbhGc"}
                description={projects.unqueueIT}
                footer={
                  <>
                    <ToolsIcon
                      src={ANDROID_STUDIO}
                      title="Android Studio"
                      width={30}
                    />
                    <ToolsIcon src={NODEJS} title="Node JS" width={30} />
                    <ToolsIcon src={SEQUELIZE} title="Sequelize" width={30} />
                  </>
                }
              />
            </ColWrapper>
          </Row>
          <Row>
            <ColWrapper xs={12} md>
              <CardProject
                title="Jump"
                image={JUMP_IMAGE}
                carousel
                description={projects.jump}
                footer={
                  <>
                    <ToolsIcon
                      src={PROCESSING}
                      title="Processing JS"
                      width={30}
                    />
                    <ToolsIcon src={OPENCV} title="OpenCV" width={30} />
                  </>
                }
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-75"
                      src={JUMP_1}
                      alt="JUMP_1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-75"
                      src={JUMP_2}
                      alt="JUMP_2"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-75"
                      src={JUMP_3}
                      alt="JUMP_3"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-75"
                      src={JUMP_4}
                      alt="JUMP_4"
                    />
                  </Carousel.Item>
                </Carousel>
              </CardProject>
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="Star Wars Game"
                image={STAR_WARS_IMAGE}
                description={projects.starWars}
                footer={
                  <>
                    <ToolsIcon
                      src={PROCESSING}
                      title="Processing JS"
                      width={30}
                    />
                  </>
                }
                hidden
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="Crypto Coin App"
                image={CRYPTO_APP_IMAGE}
                description={projects.cryptoCoinApp}
                footer={
                  <>
                    <ToolsIcon src={IONIC} title="Ionic" width={56} />
                  </>
                }
                hidden
              />
            </ColWrapper>
          </Row>
          <Row>
            <ColWrapper xs={12} md>
              <CardProject
                title="Restaurant Management"
                image={RESTAURANTE_IMAGE}
                description={projects.restaurantManagement}
                footer={
                  <>
                    <ToolsIcon src={JAVA} title="JAVA 8" width={30} />
                    <ToolsIcon src={HIBERNATE} title="Hibernate" width={30} />
                    <ToolsIcon src={ORACLE} title="Oracle DB" width={30} />
                  </>
                }
                hidden
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="League of Legends Tournament Management"
                image={LEAGUE_LEGENDS_IMAGE}
                video={"https://www.youtube.com/embed/NpBMx5pUfZo"}
                description={projects.lolManagement}
                footer={
                  <>
                    <ToolsIcon src={JAVA} title="JAVA 8" width={30} />
                    <ToolsIcon src={HIBERNATE} title="Hibernate" width={30} />
                    <ToolsIcon src={ORACLE} title="Oracle DB" width={30} />
                  </>
                }
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="Terralva"
                image={TERRALVA_IMAGE}
                description={projects.Terralva}
                hidden
                footer={
                  <>
                    <ToolsIcon src={LEAFLET} title="Leaflet" width={30} />
                    <ToolsIcon src={KOA} title="Koa JS" width={30} />
                    <ToolsIcon src={POSTGRES} title="PostGres DB" width={30} />
                  </>
                }
              />
            </ColWrapper>
          </Row>
          <Row>
            <ColWrapper xs={12} md>
              <CardProject
                title="Capture the Flag"
                image={CTF_IMAGE}
                description={projects.captureTheFlag}
                footer={
                  <>
                    <ToolsIcon src={HTML} title="HTML" width={30} />
                    <ToolsIcon src={JAVASCRIPT} title="Javascript" width={30} />
                    <ToolsIcon src={CSS} title="CSS" width={30} />
                    <ToolsIcon src={NODEJS} title="Node JS" width={30} />
                    <ToolsIcon src={EXPRESSJS} title="Express JS" width={30} />
                  </>
                }
                hidden
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="Website Product Management"
                image={WEBSITE_IMAGE}
                description={projects.websiteManagement}
                footer={
                  <>
                    <ToolsIcon src={PHP} title="PHP" width={40} />
                    <ToolsIcon src={NODEJS} title="Node JS" width={40} />
                    <ToolsIcon src={EXPRESSJS} title="Express JS" width={40} />
                  </>
                }
                hidden
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="myIMS"
                image={MY_IMS_IMAGE}
                video={"https://www.youtube.com/embed/hK4ECIBCcLQ"}
                description={projects.myIMS}
                footer={
                  <>
                    <ToolsIcon src={REACT} title="React Native" width={46} />
                  </>
                }
              />
            </ColWrapper>
          </Row>
          <Row>
            <ColWrapper xs={12} md>
              <CardProject
                title="Performance Management System"
                image={PMS_IMAGE}
                description={projects.PMS}
                footer={
                  <>
                    <ToolsIcon src={JAVA} title="JAVA" width={30} />
                    <ToolsIcon src={DOCKER} title="Docker" width={30} />
                    <ToolsIcon src={INFLUXDB} title="InfluxDB" width={30} />
                    <ToolsIcon src={TELEGRAF} title="Telegraf" width={30} />
                    <ToolsIcon src={REDIS} title="Redis DB" width={30} />
                    <ToolsIcon src={GRAFANA} title="Grafana" width={30} />
                  </>
                }
                hidden
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="UnqueueIT"
                image={UNQUEUEIT_IMAGE}
                description={projects.unqueueIT}
                footer={
                  <>
                    <ToolsIcon src={SWIFT} title="Swift" width={30} />
                    <ToolsIcon src={NODEJS} title="Node JS" width={30} />
                    <ToolsIcon src={SEQUELIZE} title="Sequelize" width={30} />
                    <ToolsIcon
                      src={MAPS_API}
                      title="Google Maps API"
                      width={30}
                    />
                    <ToolsIcon
                      src={GEOCODING_API}
                      title="Google Geocoding API"
                      width={30}
                    />
                  </>
                }
                hidden
              />
            </ColWrapper>
            <ColWrapper xs={12} md>
              <CardProject
                title="CryptoStats"
                image={CRYPTO_STATS_IMAGE}
                video={"https://www.youtube.com/embed/DUZoHs3wOhQ"}
                description={projects.CryptoStats}
                footer={
                  <>
                    <ToolsIcon src={HTML} title="HTML" width={30} />
                    <ToolsIcon src={CSS} title="CSS" width={30} />
                    <ToolsIcon src={JAVASCRIPT} title="Javascript" width={30} />
                  </>
                }
              />
            </ColWrapper>
          </Row>
          <Row>
            <ColWrapper xs={12} md>
              <CardProject
                title="Portfolio"
                image={PORTFOLIO_IMAGE}
                description={projects.Portfolio}
                hidden
                footer={
                  <>
                    <ToolsIcon src={REACT} title="React JS" width={46} />
                  </>
                }
              />
            </ColWrapper>
          </Row>
        </Container>
        <br />
        {this.state.openToast && (
          <WarningToast
            title={"Side Note"}
            message={
              "Some projects do not have any demo videos or pictures for copyright reasons.\n Contact me if you want to know more about the development of the projects."
            }
          />
        )}
      </Wrapper>
    );
  }
}

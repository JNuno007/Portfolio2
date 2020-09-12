import React, { Component } from "react";
import styled from "styled-components";
import MobileNavbar from "../components/MobileNavbar";

const Container = styled.div`
  background-image: url("wallpaper.jpg");
  /* Full height */
  height: 100%;
  width: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
`;

export default class Main extends Component {
  render() {
  return (
  <Container>
    {this.props.children}
    <MobileNavbar />
  </Container>);
  }
}

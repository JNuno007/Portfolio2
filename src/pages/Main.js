import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("wallpaper.jpg");
  /* Full height */
  height: 100%;
  width: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: scroll;
`;

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return <Container>{this.props.children}</Container>;
  }
}

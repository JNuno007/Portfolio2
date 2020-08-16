import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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

export class Intro extends Component {

  goToAbout = () => {
    window.location = '/about';
  }

  render() {
    return (
      <Phrase>
        <h2>Hello, I am</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Roboto",
          }}
        >
          <h1 style={{ color: "gray" }}>{"<"} </h1>
          <h1 style={{ color: "#0057e5" }}> {" João Ferreira "} </h1>
          <h1 style={{ color: "gray" }}> {" />"}</h1><BlinkCursor>|</BlinkCursor>
        </div>
        <h2>and I'm a Software Developer</h2>
        <br/>
        <Button variant="outline-dark" onClick={this.goToAbout}>About me</Button>
      </Phrase>
    );
  }
}

export default Intro;

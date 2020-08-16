import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../images/react.svg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default class Skill extends Component {
  renderStars = () => {
    let result = [];
    for (var i = 0; i < this.props.stars; i++) {
      result.push(<AiFillStar />);
    }
    for (var i = this.props.stars; i < 5; i++) {
      result.push(<AiOutlineStar />);
    }
    return result;
  };
  render() {
    return (
      <Container>
        <Row>
          <Col><strong>{this.props.title}</strong></Col>
        </Row>
        <Row>
          <Col>
            <img src={this.props.image} height="60px" width="60px"/>
          </Col>
        </Row>
        <Row>
          <Col>{this.renderStars()}</Col>
        </Row>
      </Container>
    );
  }
}

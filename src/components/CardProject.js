import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { AiFillPlayCircle, AiFillPicture } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import VideoPlayer from "./VideoPlayer";
import { withNamespaces } from "react-i18next";

const CardWrapper = styled(Card)`
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
`;

const ModalHeaderWrapper = styled(Modal.Header)`
  border-color: red;
`;

class CardProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleClick = () => {
    this.handleShow();
  };

  render() {
    const {t} = this.props;
    return (
      <>
        <CardWrapper style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={this.props.image}
            style={{ width: "100%", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button
              variant="danger"
              onClick={this.handleClick}
              hidden={this.props.hidden}
            >
              {this.props.video ? (
                <AiFillPlayCircle size="2em" />
              ) : (
                <AiFillPicture size="2em" />
              )}{" "}
              {this.props.video ? t('projectCheckVideoBtn') : t('projectCheckPicturesBtn')}
            </Button>
          </Card.Body>
          <Card.Footer>{this.props.footer}</Card.Footer>
        </CardWrapper>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          centered
          size="lg"
        >
          <ModalHeaderWrapper closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </ModalHeaderWrapper>
          {this.props.video && (
            <Modal.Body id="video-container">
              <VideoPlayer
                video={this.props.video}
                title={this.props.title}
              />
            </Modal.Body>
          )}
          {this.props.carousel && (
            <Modal.Body>{this.props.children}</Modal.Body>
          )}
        </Modal>
      </>
    );
  }
}

export default withNamespaces()(CardProject)

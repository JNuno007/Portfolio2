import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";

export default class WarningToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  close = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <Toast
        show={this.state.open}
        onClose={this.close}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{this.props.title}</strong>
        </Toast.Header>
        <Toast.Body>{this.props.message}</Toast.Body>
      </Toast>
    );
  }
}

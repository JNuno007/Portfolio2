import React, { Component } from "react";

export default class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      width: 770,
      height: 500,
    };
  }

  handleResize = () => {
    let containerSize = document.getElementById("video-container").offsetWidth;

    if (document.getElementById("video-container")) {
      if (containerSize === 798) {
        this.setState({
          width: 770,
          height: 500,
        });
      } else if (containerSize === 498) {
        this.setState({
          width: 470,
          height: 500,
        });
      } else if (containerSize >= 350 && containerSize <= 394) {
        this.setState({
          width: 430,
          height: 500,
        });
      }
    }
  };

  componentDidMount() {
    //mobile
    if (window.innerWidth < 415) {
      this.setState({
        width: 365,
        height: 400,
      });
    }
    //landscape mobile
    if (window.innerHeight < window.innerWidth && window.innerHeight < 415) {
      this.setState({
        width: 470,
        height: 250,
      });
    }
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <iframe
        title={this.props.title}
        width={this.state.width}
        height={this.state.height}
        src={this.props.video}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      ></iframe>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  padding: 16px;
`;

const TitleWrapper = styled.div`
  border-bottom: 1px solid red;
  text-align: left;
  margin: 16px;
`;

export default class StyledContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <h4 style={{marginTop:'16px'}}>{this.props.title}</h4>
        </TitleWrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

import React, { Component } from "react";
import StyledContainer from "../components/StyledContainer";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const GITHUB_URL = "https://github.com/JNuno007";
const LINKEDIN_URL = "https://www.linkedin.com/in/joaocortezferreira/";

const ContainerWrapper = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
  overflow: "hidden";
  text-align: left;
  position: relative;
  height: 100%;
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 55px;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
`;

const LinksWrapper = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    }).catch((error) => alert(error));
  };

  render() {
    return (
      <>
        <ContainerWrapper>
          <StyledContainer title="Contact me">
            <Form
              name="contact"
              method="post"
              onSubmit={this.handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="formName"
                  type="text"
                  placeholder="Enter your name"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmailAddress">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="formEmailAddress"
                  type="email"
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formCompanyName">
                <Form.Label>Company's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your company's name (Optional)"
                  name="formCompanyName"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formTextArea">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={window.innerWidth <= 420 ? "6" : "10"}
                  name="formTextArea"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <div style={{ textAlign: "center" }}>
                <Button variant="danger" type="submit">
                  Submit <FiSend />
                </Button>
              </div>
            </Form>
          </StyledContainer>
        </ContainerWrapper>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <FooterWrapper>
            <LinksWrapper>
              <AiFillGithub
                onClick={() => window.open(GITHUB_URL, "_blank")}
                size="30px"
                style={{ marginRight: "10px" }}
              />
            </LinksWrapper>
            <LinksWrapper>
              <AiFillLinkedin
                onClick={() => window.open(LINKEDIN_URL, "_blank")}
                size="30px"
              />
            </LinksWrapper>
          </FooterWrapper>
        </div>
      </>
    );
  }
}

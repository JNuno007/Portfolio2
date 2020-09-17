import React, { Component } from "react";
import StyledContainer from "../components/StyledContainer";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { withNamespaces } from "react-i18next";

const ContainerWrapper = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
  overflow: "hidden";
  text-align: left;
  position: relative;
  height: 100%;
  margin-bottom: ${() => (window.innerWidth <= 350 ? "100px" : 0)};
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contacts extends Component {
  constructor(props) {
    super(props);
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
    const { t } = this.props;
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
                <Form.Label>{t("contactName")}</Form.Label>
                <Form.Control
                  name="formName"
                  type="text"
                  placeholder={t("contactNamePlaceholder")}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmailAddress">
                <Form.Label>{t("contactEmail")}</Form.Label>
                <Form.Control
                  name="formEmailAddress"
                  type="email"
                  placeholder={t("contactEmailPlaceholder")}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formCompanyName">
                <Form.Label>{t("contactCompanysName")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("contactCompanysNamePlaceholder")}
                  name="formCompanyName"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formTextArea">
                <Form.Label>{t('contactMessage')}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={window.innerWidth <= 420 ? "6" : "10"}
                  name="formTextArea"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <div style={{ textAlign: "center" }}>
                <Button variant="danger" type="submit">
                  {t('contactSubmitBtn')} <FiSend />
                </Button>
              </div>
            </Form>
          </StyledContainer>
        </ContainerWrapper>
      </>
    );
  }
}

export default withNamespaces()(Contacts);

import React, { Component } from "react";
import StyledContainer from "../components/StyledContainer";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import {FiSend} from "react-icons/fi";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


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
`

export default class Contacts extends Component {
  render() {
    return (
        <>
      <ContainerWrapper>
        <StyledContainer title="Contact me">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmailAddress">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formCompanyName">
              <Form.Label>Company's Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your company's name (Optional)" />
            </Form.Group>

            <Form.Group controlId="formTextArea">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="10" />
            </Form.Group>

            <div style={{ textAlign: "center" }}>
              <Button variant="danger" type="submit">
                Submit <FiSend />
              </Button>
            </div>
          </Form>
        </StyledContainer>
        <div style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        }}>
            <FooterWrapper>
              <AiFillGithub size="30px" style={{marginRight: '10px'}}/>
              <AiFillLinkedin size="30px"/>
            </FooterWrapper>
        </div>
      </ContainerWrapper>
      </>
    );
  }
}

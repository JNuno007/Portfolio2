import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { GoHome } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { RiMailSendLine, RiDashboardLine } from "react-icons/ri";

const NavBar = styled.div`
    width: 100%;
    height: 45px;
    background-color: #252a35;
    display: none;

    @media only screen and (max-width: 420px) {
        & {
          display: flex;
          position: absolute;
          bottom: 0;
          margin-top: 15px;
          color: white;
        }
      }
`


export default class MobileNavbar extends Component {

    goToPage = (pathname) => {
        window.location = '/' + pathname;
    }

    render() {
        return (
            <NavBar>
                <Row style={{width: '100%', alignItems: 'center', marginLeft: 0}}>
                    <Col onClick={() => this.goToPage('intro')}><GoHome size='1.5em'/></Col>
                    <Col onClick={() => this.goToPage('about')}><BsPerson size='1.5em'/></Col>
                    <Col onClick={() => this.goToPage('projects')}><RiDashboardLine size='1.5em'/></Col>
                    <Col onClick={() => this.goToPage('contacts')}><RiMailSendLine size='1.5em'/></Col>
                </Row>
            </NavBar>
        )
    }
}

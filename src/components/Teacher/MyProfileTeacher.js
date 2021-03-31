import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  Row,
} from "reactstrap";
import base_url from "../../api/bootapi";
import "./MyProfileTeacher.css"


import Schedule from "../Schedule/DashboardSchedule";

function MyProfileStudent() {
  return (
    <div>
      <Navbar color="success">
        <NavbarBrand className="text-light"> Welcome, </NavbarBrand>

        <NavItem>
          <NavbarText>Teacher</NavbarText>
        </NavItem>

        <NavItem>
          <Link to="/">
            <Button color="warning"> LogOut..</Button>
          </Link>
        </NavItem>
      </Navbar>
      <div className="ProfileBody">
        <Row className="border">
          {/* User Profile id card */}
          <Col className="profileLeftIcard" md={4}>
            <Card>
              <CardImg></CardImg>
              <CardBody align="left">
                <CardText>Id :</CardText>
                <CardText>Name :</CardText>
                <CardText>Class : </CardText>
                <CardText>Section : </CardText>
                <CardText> SME : </CardText>
                <CardText> D.O.B : </CardText>
                <CardText> Address : </CardText>
                <CardText> Contact No : </CardText>
                <CardText> E-mail : </CardText>
                <CardText> Password : </CardText>
                <Button onDoubleClick="">Update Password</Button>
              </CardBody>
            </Card>
          </Col>
          {/* User Functions */}
          <Col className="RightProfileBody" justify-content="center" md={8}>
            <Row className="text-center">
              <Schedule />
            </Row>

            <div class="dropdown ml-2 mr-2 mt-2 md-2 ">
              <button class="dropbtn">Manage Teacher  </button>
              <div class="dropdown-content">
                <a href="#">Update Contact No</a>

                <a href="#">Update Password </a>
              </div>
            </div>

            <div class="dropdown ml-2 mr-2 mt-2 md-2">
              <button class="dropbtn">Manage Schedule Data</button>
              <div class="dropdown-content">
                <a href="#">Check Today Schedule</a>

                <a href="#">Week Schedule</a>
              </div>
            </div>

            <div class="dropdown ml-2 mr-2 mt-2 md-2">
              <button class="dropbtn ">Manage OnlineTask </button>
              <div class="dropdown-content">
                <a href="https://drive.google.com/drive/folders/1x_3nesO_zK6M2EQ35MwCPyWOAL2s5pSm?usp=sharing">
                  Add OnlineTask
                </a>

                <a href="https://drive.google.com/drive/folders/1x_3nesO_zK6M2EQ35MwCPyWOAL2s5pSm?usp=sharing">
                  Check OnlineTask
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MyProfileStudent;

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
import "./MyProfile.css"


import Schedule from "../Schedule/DashboardSchedule";

function MyProfile() {
  return (
    <div>
      <Navbar color="info">
        <NavbarBrand className="text-light"> Welcome, </NavbarBrand>

        <NavItem>
          <NavbarText>Admin</NavbarText>
        </NavItem>

        <NavItem>
          <NavbarText>UserNameOfCurrentUser</NavbarText>
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
              <CardBody>
                <CardSubtitle>Id : </CardSubtitle>
                <CardSubtitle className=" font-weight-bold">
                  Name :
                </CardSubtitle>
                <CardText> D.O.B : </CardText>
                <CardText> Address : </CardText>
                <CardText> Contact No : </CardText>
                <CardText> E-mail : </CardText>
                {/* <CardText> Password : </CardText> */}
                <Button onDoubleClick="">Update Password</Button>
              </CardBody>
            </Card>
          </Col>
          {/* User Functions */}
          <Col md={8}>
            <Row className="text-center">{/* <Schedule /> */}</Row>

            <div class="dropdown ml-2 mr-2 mt-2 md-2 ">
              <button class="dropbtn">Manage Student Data</button>
              <div class="dropdown-content">
                {/* to register new stuent data */}
                <Link to="/addStudent">Add Student </Link>
                {/* to update student data */}
                <a href="#">Update Student</a>
                {/* to delete student data */}
                <a href="#">Delete Student</a>
                {/* to direct to menu to search Student data: by name /id/classid/rollno */}
                <Link to="/showStudent">Search Student</Link>
              </div>
            </div>

            <div class="dropdown ml-2 mr-2 mt-2 md-2">
              <button class="dropbtn ">Manage Teacher Data</button>
              <div class="dropdown-content">
                {/* to register new student data */}
                <a href="/addTeacher">Add Teacher</a>
                {/* to update teacher data */}
                <a href="#">Update Teacher</a>
                {/* to delete teacher data */}
                <a href="#">Delete Teacher</a>
                {/* to direct to menu to search Teacher data: by name /id/classid/ */}
                <a href="#">Search Teacher</a>
              </div>
            </div>

            

            <div class="dropdown ml-2 mr-2 mt-2 md-2">
              <button class="dropbtn ">Manage Admin Data</button>
              <div class="dropdown-content">
                {/* to register new admin data */}
                <Link to="/addAdmin">Add Admin</Link>
                {/* to update admin data */}
                <a href="#">Update Admin</a>
                {/* to delete Admin data */}
                <a href="#">Delete Admin</a>
                {/* to direct to menu to search Admin data: by name /id */}
                <a href="#">Search Admin</a>
              </div>
            </div>

            <div class="dropdown ml-2 mr-2 mt-2 md-2">
              <button class="dropbtn">Manage Schedule Data</button>
              <div class="dropdown-content">
                {/* to register new admin data */}
                <a href="#">Add Schedule</a>
                {/* to update admin data */}
                <a href="#">Update Schedule</a>
                {/* to delete Admin data */}
                <a href="#">Delete Schedule</a>
                {/* to direct to menu to search Schedule data: by classid */}
                <a href="#">Search Schedule</a>
              </div>
            </div>

            <div class="dropdown ml-2 mr-2 mt-2 md-2">
              <button class="dropbtn ">Manage OnlineTask Data</button>
              <div class="dropdown-content">
                {/* to register new onlineTask data */}
                <a href="/addOnlineTask">Add OnlineTask</a>
                {/* to update onlineTask data */}
                <a href="#">Update OnlineTask</a>
                {/* to delete onlineTask data */}
                <a href="#">Delete OnlineTask</a>
                {/* to direct to menu to search onlineTask data: by classid */}
                <a href="#">Search OnlineTask</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MyProfile;

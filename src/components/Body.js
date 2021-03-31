import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import UserMenus from './UserMenus'
import RightMenu from './RightMenu'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AdminLoginForm from './Admin/AdminLoginForm'
import TeacherLoginForm from './Teacher/TeacherLoginForm'
import PrincipalLoginForm from './Principal/PrincipalLoginForm'
import StudentLoginForm from './Student/StudentLoginForm'
import ShowAllAdmin from './Admin/ShowAllAdmin'
import MyProfile from './Admin/MyProfile'
import { ToastContainer } from 'react-toastify'
import base_url from '../api/bootapi'
import MyProfileStudent from './Student/MyProfileStudent'
import MyProfileTeacher from './Teacher/MyProfileTeacher'
import MyProfilePrincipal from "./Principal/MyProfilePrincipal";
import AddStudent from './Student/AddStudent'
import ListAllStudents from './Student/ListAllStudents'
import AddAdmin from './Admin/AddAdmin'
import AddTeacher from './Teacher/AddTeacher'
import AddOnlineTask from './OnlineTask/AddOnlineTask'



function Body() {
    return (
      <div className="bodyarea">
        <Router>
          <Container>
            <Route path="/myProfile-admin" active component={MyProfile} />
            <Route
              path="/myProfile-student"
              active
              component={MyProfileStudent}
            />
            <Route
              path="/myProfile-teacher"
              active
              component={MyProfileTeacher}
            />
            <Route
              path="/myProfile-principal"
              active
              component={MyProfilePrincipal}
            />

            <Row>
              <Col md={4}>
                <Route path="/" component={UserMenus} exact />
                <Route path="/student-loginform" component={UserMenus} exact />
                <Route
                  path="/principal-loginform"
                  component={UserMenus}
                  exact
                />
                <Route path="/teacher-loginform" component={UserMenus} exact />
                <Route path="/admin-loginform" component={UserMenus} exact />
                {/* <UserMenus /> */}
              </Col>
              <Col md={8}>
                <Route
                  path="/student-loginform"
                  component={StudentLoginForm}
                  exact
                />
                <Route
                  path="/principal-loginform"
                  component={PrincipalLoginForm}
                  exact
                />
                <Route
                  path="/teacher-loginform"
                  component={TeacherLoginForm}
                  exact
                />

                <Route
                  path="/admin-loginform"
                  component={AdminLoginForm}
                  exact
                />
                <Route path="/addStudent" component={AddStudent} exact />
                <Route path="/addAdmin" component={AddAdmin} exact />
                <Route path="/addTeacher" component={AddTeacher} exact />
                <Route path="/addOnlineTask" component={AddOnlineTask} exact />
                <Route path="/showStudent" component={ListAllStudents} exact />

                <Route path="/" component={RightMenu} exact />
              </Col>
            </Row>
          </Container>
        </Router>
        <div></div>
      </div>
    );
}

export default Body;

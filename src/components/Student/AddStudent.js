import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import base_url from '../../api/bootapi';

function AddStudent() {

    const [student, setStudent] = useState({});

    //form handle function
    const handleForm = (e) => {
        console.log(student);
        e.preventDefault();
    };

    //creating function to post data on the server
    const postStudentOnServer = (data) => {
        axios.post(`${base_url}/student/add`, data).then((response) => {
            // success
            console.log("success")
        
    })
}
    return (
      //   <div>
      //     <Form onSubmit={handleForm}>
      //       <FormGroup row>
      //         <Label for="studentName">Name</Label>
      //         <Input
      //           type="name"
      //           name="Student Name"
      //           id="studentName"
      //           placeholder="Enter your Name..."
      //           onChange={(e) => {
      //             setStudent({ ...student, studentName: e.target.value });
      //           }}
      //         />
      //       </FormGroup>
      //       <FormGroup>
      //         <Label for="studentEmail">Email</Label>
      //         <Input
      //           type="email"
      //           name="Email"
      //           id="studentEmail"
      //           placeholder="Enter your Email..."
      //           onChange={(e) => {
      //             setStudent({ ...student, studentEmail: e.target.value });
      //           }}
      //         />
      //       </FormGroup>
      //       <FormGroup>
      //         <Label for="studentContactNo">Contact Number</Label>
      //         <Input
      //           type="number"
      //           name="number"
      //           id="studentContactNo"
      //           placeholder="Enter your Contact Number..."
      //           onChange={(e) => {
      //             setStudent({
      //               ...student,
      //               studentContactNumber: e.target.value,
      //             });
      //           }}
      //         />
      //       </FormGroup>
      //       <FormGroup>
      //         <Label for="studentClass">Select Class</Label>
      //         <Input
      //           type="select"
      //           name="select"
      //           id="studentClass"
      //           onChange={(e) => {
      //             setStudent({
      //               ...student,
      //               studentClass: e.target.value,
      //             });
      //           }}
      //         >
      //           <option>5</option>
      //           <option>6</option>
      //           <option>7</option>
      //           <option>8</option>
      //           <option>9</option>
      //           <option>10</option>
      //         </Input>
      //       </FormGroup>
      //       <FormGroup>
      //         <Label for="studentSection">Select Section</Label>
      //         <Input
      //           type="select"
      //           name="select"
      //           id="studentSection"
      //           onChange={(e) => {
      //             setStudent({
      //               ...student,
      //               studentSection: e.target.value,
      //             });
      //           }}
      //         >
      //           <option>A</option>
      //           <option>B</option>
      //           <option>C</option>
      //         </Input>
      //       </FormGroup>
      //       <FormGroup>
      //         <Label for="studentDOB">Date Of Birth</Label>
      //         <Input
      //           type="date"
      //           name="date"
      //           id="studentDOB"
      //           placeholder="date placeholder"
      //           onChange={(e) => {
      //             setStudent({
      //               ...student,
      //               studentDOB: e.target.value,
      //             });
      //           }}
      //         />
      //       </FormGroup>
      //       <FormGroup>
      //         <Label for="studentPassword">Password</Label>
      //         <Input
      //           type="password"
      //           name="password"
      //           id="studentPassword"
      //           placeholder="Enter Password with max 8 characters"
      //           onChange={(e) => {
      //             setStudent({
      //               ...student,
      //               studentPassword: e.target.value,
      //             });
      //           }}
      //         />
      //       </FormGroup>
      //       <FormGroup>
      //         <Label for="studentAddres">Address</Label>
      //         <Input
      //           type="textarea"
      //           name="text"
      //           id="studentAddres"
      //           placeholder="Enter your Address..."
      //           onChange={(e) => {
      //             setStudent({
      //               ...student,
      //               studentAddres: e.target.value,
      //             });
      //           }}
      //         />
      //       </FormGroup>
      //       <div>
      //         All Documents are verified..!
      //         <FormGroup check>
      //           <Label check>
      //             <Input type="checkbox" /> Check me out
      //           </Label>
      //         </FormGroup>
      //       </div>
      //       <Link to="/MyProfile-admin">
      //         <Button color="primary" outline>
      //           Submit
      //         </Button>
      //       </Link>
      //     </Form>
      //   </div>
      //

      <div>
        <Fragment>
          <Form>
            <FormGroup row>
              <Label for="id" sm={2}>
                Id
              </Label>
              <Col sm={10}>
                <Input type="number" name="i_d" id="id" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="nm"
                  id="name"
                  placeholder="Enter your name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="class" sm={2}>
                Class
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="cls"
                  id="class"
                  placeholder="Enter your Class"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="section" sm={2}>
                Section
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="sec"
                  id="section"
                  placeholder="Enter your Section"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="dob" sm={2}>
                DOB
              </Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="date"
                  id="dob"
                  placeholder="mm/dd/yy"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={2}>
                Address
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="add"
                  id="address"
                  placeholder="Enter your Address"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="contactnumber" sm={2}>
                Contact Number
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="num"
                  id="contactnumber"
                  placeholder="Contact number"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="mail"
                  id="email"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <Link to="/MyProfile-admin">
              <Button color="primary" outline>
                Submit
              </Button>
            </Link>
          </Form>
        </Fragment>
      </div>
    );
}

export default AddStudent;

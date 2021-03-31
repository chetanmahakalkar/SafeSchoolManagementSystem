import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import base_url from "../../api/bootapi";

function AddAdmin() {
  const [admin, setAdmin] = useState({});

  //form handle function
  const handleForm = (e) => {
    console.log(admin);
    e.preventDefault();
  };

  //creating function to post data on the server
  const postAdminOnServer = (data) => {
    axios.post(`${base_url}/admin/add`, data).then((response) => {
      // success
      console.log("success");
    });
  };
  return (
    // <div>
    //   <Form onSubmit={handleForm}>
    //     <FormGroup>
    //       <Label for="adminName">Name</Label>
    //       <Input
    //         type="name"
    //         name="Admin Name"
    //         id="adminName"
    //         placeholder="Enter your Name..."
    //         onChange={(e) => {
    //           setAdmin({ ...admin, adminName: e.target.value });
    //         }}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="adminEmail">Email</Label>
    //       <Input
    //         type="email"
    //         name="Email"
    //         id="adminEmail"
    //         placeholder="Enter your Email..."
    //         onChange={(e) => {
    //           setAdmin({ ...admin, adminEmail: e.target.value });
    //         }}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="adminContactNo">Contact Number</Label>
    //       <Input
    //         type="number"
    //         name="number"
    //         id="adminContactNo"
    //         placeholder="Enter your Contact Number..."
    //         onChange={(e) => {
    //           setAdmin({
    //             ...admin,
    //             adminContactNumber: e.target.value,
    //           });
    //         }}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="adminDOB">Date Of Birth</Label>
    //       <Input
    //         type="date"
    //         name="date"
    //         id="adminDOB"
    //         placeholder="date placeholder"
    //         onChange={(e) => {
    //           setAdmin({
    //             ...admin,
    //             adminDOB: e.target.value,
    //           });
    //         }}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="adminPassword">Password</Label>
    //       <Input
    //         type="password"
    //         name="password"
    //         id="adminPassword"
    //         placeholder="Enter Password ..."
    //         onChange={(e) => {
    //           setAdmin({
    //             ...admin,
    //             adminPassword: e.target.value,
    //           });
    //         }}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="adminAddres">Address</Label>
    //       <Input
    //         type="textarea"
    //         name="text"
    //         id="adminAddres"
    //         placeholder="Enter your Address..."
    //         onChange={(e) => {
    //           setAdmin({
    //             ...admin,
    //             adminAddres: e.target.value,
    //           });
    //         }}
    //       />
    //     </FormGroup>
    //     <div>
    //       All Documents are verified..!
    //       <FormGroup check>
    //         <Label check>
    //           <Input type="checkbox" /> Check me out
    //         </Label>
    //       </FormGroup>
    //     </div>
    //      <FormGroup>
    //               <Link to="/MyProfile-admin">
    //         <Button color="primary" outline>
    //           Submit
    //         </Button></Link>
    //     </FormGroup>
    //   </Form>
    //   </div>
      

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
            <Label for="dob" sm={2}>
              DOB
            </Label>
            <Col sm={10}>
              <Input type="date" name="date" id="dob" placeholder="mm/dd/yy" />
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
              <Input type="email" name="mail" id="email" placeholder="Email" />
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

export default AddAdmin;

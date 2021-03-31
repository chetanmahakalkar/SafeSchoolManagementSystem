
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button,Col,Form, FormGroup, Input, Label } from "reactstrap";

const AddTeacher = () => {
  return (
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
                placeholder="Enter your Roll Number"
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
};
export default AddTeacher;

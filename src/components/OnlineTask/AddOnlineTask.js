import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

function AddOnlineTask() {
    return (
      <div>
        <Fragment>
          <Form>
            <FormGroup row>
              <Label for="id" sm={2}>
                OnlineTaskId
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="i_d"
                  id="id"
                  placeholder="DayClassSectioin  Ex:"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Submission
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
               Duedate
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

export default AddOnlineTask;

import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function TeacherLoginForm() {
    return (
      <div>
        <ToastContainer />
        <div class="p-3 mb-2 bg-success text-white">
          <Form>
            <FormGroup>
              <Label for="teachEmail">Teacher: UserId/Email</Label>
              <Input
                type="email"
                name="email"
                id="TeachEmail"
                placeholder="User_Id/Email"
              />
            </FormGroup>
            {""}
            <FormGroup>
              <Label for="teachPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="teachPasswoord"
                placeholder="Password"
              />
            </FormGroup>
            {""}
            <Link to="myProfile-teacher">
              <Button color="warning mr-2">Log In</Button>
            </Link>
            <Link to="/">
              <Button color="secondary ml-2" outline>
                Home
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
}

export default TeacherLoginForm;

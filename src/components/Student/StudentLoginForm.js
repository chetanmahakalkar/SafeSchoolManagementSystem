import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function StudentLoginForm() {
    return (
      <div>
        <ToastContainer />
        <div class="p-3 mb-2 bg-primary text-white">
          <Form>
            <FormGroup>
              <Label for="studEmail">Student: UserId/Email</Label>
              <Input
                type="email"
                name="email"
                id="studEmail"
                placeholder="User_Id/Email"
              />
            </FormGroup>
            {""}
            <FormGroup>
              <Label for="studPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="studPasswoord"
                placeholder="Password"
              />
            </FormGroup>
            {""}

            <Link to="myProfile-student">
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

export default StudentLoginForm;

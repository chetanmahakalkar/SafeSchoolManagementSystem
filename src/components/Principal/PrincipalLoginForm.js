import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function PrincipalLoginForm() {
  return (
    <div>
      <ToastContainer />
      <div class="p-3 mb-2 bg-danger text-white">
        <Form>
          <FormGroup>
            <Label for="princEmail">Principal: UserId/Email</Label>
            <Input
              type="email"
              name="email"
              id="princEmail"
              placeholder="User_Id/Email"
            />
          </FormGroup>
          {""}
          <FormGroup>
            <Label for="princPassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="princPasswoord"
              placeholder="Password"
            />
          </FormGroup>
          {""}
          <Link to="myProfile-principal">
            <Button color="warning mr-2">Log In</Button>
          </Link>
          <Button color="secondary ml-2" outline>
            Home
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PrincipalLoginForm;

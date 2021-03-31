import React from "react";
import { Link, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import MyProfile from "./MyProfile";

function AdminLoginForm() {
  return (
    <div className="adminLoginformpage">
      <ToastContainer />
      <div class="p-3 mb-2 bg-warning text-white">
        <Form>
          <FormGroup>
            <Label for="adminEmail">Admin: UserId/Email</Label>
            <Input
              type="email"
              name="email"
              id="adminEmail"
              placeholder="User_Id/Email"
            />
          </FormGroup>
          {""}
          <FormGroup>
            <Label for="adminPassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="adminPasswoord"
              placeholder="Password"
            />
          </FormGroup>
          {""}

          <Link to="myProfile-admin">
            <Button color="info mr-2">Log In</Button>
          </Link>
          <Link to="/">
            {/* <Button color="danger ml-2">Register New User</Button> */}
            <Button color="secondary ml-2" outline>
              Home
            </Button>
          </Link>
          
        </Form>
      </div>
    </div>
  );
}

export default AdminLoginForm;

import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
} from "reactstrap";
import base_url from "../../api/bootapi";
const Admin = ({ admin, update }) => {
  //delete function
  const deleteAdmin = (adminID) => {
    axios.delete(`${base_url}/admin/${adminID}`).then(
      (response) => {
        toast.success("Admin deleted");
      },
      (error) => {
        console.log("error on delete");
        toast.error("Error occured while deleting...")
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle>Id : {admin.adminID} </CardSubtitle>
        <CardSubtitle className=" font-weight-bold">
          Name : {admin.adminName}
        </CardSubtitle>
        <CardText> D.O.B : {admin.adminDOB}</CardText>
        <CardText> Address : {admin.adminAddress}</CardText>
        <CardText> Contact No : {admin.adminContactNo}</CardText>
        <CardText> E-mail : {admin.adminEmail}</CardText>
        <CardText> Password : {admin.adminPassword}</CardText>
        <Container className="text-center">
          <Button
            color="danger mr-2"
            onClick={() => {
              deleteAdmin(admin.adminID);
            }}
          >
            Delete
          </Button>
          <Button color="secondary ml-2">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Admin;

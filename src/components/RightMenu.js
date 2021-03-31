import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const RightMenu = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h2">Welcome !!</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">
            Please Select your Role To Log In
          </CardSubtitle>
          <CardText>
            "This WebApplication is developed for the safe management of School
            Administration"
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default RightMenu;

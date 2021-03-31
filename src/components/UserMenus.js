import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import "./UserMenus.css"


function UserMenus() {
  return (
    <div> I'am a,
      <ListGroup className="stud-menuBackground">
        <Link
          className="list-group-item list-group-item-action"
          color="primary"
          tag="a"
          to="/student-loginform"
        >
          Student
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          color="success"
          tag="a"
          to="/teacher-loginform"
        >
          Teacher
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          color="danger"
          tag="a"
          to="/principal-loginform"
        >
          Principal
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          color="warning"
          tag="a"
          to="/admin-loginform"
        >
          Admin
        </Link>
      </ListGroup>
    </div>
  );
}

export default UserMenus;

import React, { useEffect, useState } from 'react'
import base_url from "./../../api/bootapi";
import axios from "axios";

import Student from './Student';

function ListAllStudents() {
  const [students, setStudents] = useState([]);

  //function to call student list form server:
  const getAllStudentsFromServer = () => {
    axios.get(`${base_url}/allstudents`).then((response) => {
      //success
      console.log(response.data)
      setStudents(response.data);
    });
  }

  //calling student loading function 
  useEffect(() => {
    getAllStudentsFromServer();


  }, [])
  return (

    <div>
      <h1>All student List</h1>
      {students.length>0 ? students.map((item)=> <Student key={item.id} student={item}/>):"No student found"}
    </div>
  )
}

export default ListAllStudents

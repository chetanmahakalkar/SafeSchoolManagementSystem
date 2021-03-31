import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import base_url from "../../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";



const ShowAllAdmin = () => {

    
  useEffect(() => {
      document.title = "ShowAllAdmin || SafeSchoolManager";
     
  }, []);
  //function to call server
  const getAllAdminsFromServer = () => {
    axios.get(`${base_url}/admin/alladmins`).then(
      (response) => {
        //console.log(response);
        //console.log("printing admin list")
        console.log(response.data);
        //toast.success("updated",{position:"bottom-center"})
        setAdmins(response.data);
      },
      (error) => {
        console.log(error);
       
      }
    );
  };

  //calling loading admins from server
  useEffect(() => {
    getAllAdminsFromServer();
  }, []);

  //demo  array of admins to populate data
  const [admins, setAdmins] = useState([
    // {
    //   adminid: "admin1",
    //   admin_name: "aamAdmin1",
    //   admindob: "1994-01-02",
    //   admin_address: "Chandrapur",
    //   admin_contact_no: "1234567890",
    //   admin_email: "amm@admin1.com",
    //   admin_password: "admin1",
    // },
    // {
    //   adminid: "admin2",
    //   admin_name: "aamAdmin2",
    //   admindob: "1994-02-02",
    //   admin_address: "Nagpurpur",
    //   admin_contact_no: "1234567891",
    //   admin_email: "amm@admin2.com",
    //   admin_password: "admin2",
    // },
    // {
    //   adminid: "admin3",
    //   admin_name: "aamAdmin3",
    //   admindob: "1994-03-02",
    //   admin_address: "Rampur",
    //   admin_contact_no: "1234567892",
    //   admin_email: "amm@admin3.com",
    //   admin_password: "admin3",
    // },
    // {
    //   adminid: "admin6",
    //   admin_name: "aamAdmin3",
    //   admindob: "1994-03-02",
    //   admin_address: "Rampur",
    //   admin_contact_no: "1234567892",
    //   admin_email: "amm@admin3.com",
    //   admin_password: "admin3",
    // },
  ]);

  return (
    <div>
      <h1>All Admins</h1>
      <p>List of Admins</p>

      {admins.length > 0
        ? admins.map((item) => <Admin key={item.adminID} admin={item} />)
        : "No Admin Registered"}
    </div>
  );
};

export default ShowAllAdmin;

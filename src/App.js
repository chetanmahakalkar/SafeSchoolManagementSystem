import React from 'react';
import { Route, Router } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Row } from 'reactstrap';
import './App.css';
import Admin from './components/Admin/Admin';
import ShowAllAdmin from './components/Admin/ShowAllAdmin';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import MyProfile from './components/Admin/MyProfile';
import Student from './components/Student/Student';
import AddStudent from './components/Student/AddStudent';
import AddTeacher from './components/Teacher/AddTeacher';


function App() {
  return (
    <div className="App">
      <Header />       
      <Body />

      <Footer />
      
</div>
  );
}

export default App;

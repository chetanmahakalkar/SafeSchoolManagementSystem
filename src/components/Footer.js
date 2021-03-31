import React from 'react'
import { Col, Row } from 'reactstrap'
import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
            
            <hr/>
            <Row >
                
                <Col  md="9"> &copy;{new Date().getFullYear()} SafeSchoolManager WebApplication | All Rights Reserved | Terms of Services | Privacy</Col>
                
                <Col  md="3"><img src="/assets/images/safeSchool_logo.png" width="100px" height="50px"  ></img> </Col>
            </Row>
            
        </div>
    )
}

export default Footer

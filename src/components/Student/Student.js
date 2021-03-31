import React from 'react'
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

function Student({students}) {
    return (
      <div>
        <table>
          <tr>
            <Card>
              <CardImg></CardImg>
              <CardBody align="left">
                <td>
                  <CardText>Id :{students.studentId}</CardText>
                </td>
                <CardText>Name :{students.studentName}</CardText>
                <CardText>Class :{students.studentClass} </CardText>
                <CardText>Section:{students.studentSection} </CardText>

                <CardText> D.O.B :{students.studentDOB} </CardText>
                <CardText> Contact No : {students.studentContactNo}</CardText>
                <CardText> E-mail :{students.studentEmail} </CardText>
                <CardText> Address :{students.studentAddres} </CardText>
              </CardBody>
            </Card>
          </tr>
        </table>
      </div>
    );
}

export default Student

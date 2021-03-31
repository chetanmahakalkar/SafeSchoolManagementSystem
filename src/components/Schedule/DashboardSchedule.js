import React from 'react'
import { Table } from 'reactstrap';

function Schedule() {
    return (
      <div className="scheduleTable ">
        <Table striped bordered hover  className="mt-3 ml-2 " >
          <thead >
            <tr>
              <th></th>
              <th>Lecture Type</th>
              <th>Shift</th>
              <th>timing</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>School-Lecture</td>
              <td>updateFromDB</td>
              <td>UpdateFromDB</td>
              <td>@UpdateFromDB</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Online-lecture</td>
              <td>updateFromDB</td>
              <td>updateFromDB</td>
              <td>@UpdateFromDB</td>
            </tr>
           
          </tbody>
        </Table>
        <hr />
      </div>
    );
    
}

export default Schedule

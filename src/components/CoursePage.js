import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';

class CoursePage extends React.Component{
  render(){
    return (
      <div class="col-md-6 col-md-offset-3">
        <h1> Choose your course </h1>
        <table>
          <tr>
            <th> Select</th>
            <th> Term</th>
            <th> Course</th>
          </tr>
          <tr>
            <td> <input type="checkbox" name="role" value="professor" /> </td>
            <td> Fall 2017 </td>
            <td> CS5500 </td>
          </tr>
          <tr>
            <td> <input type="checkbox" name="role" value="professor" /> </td>
            <td> Spring 2018 </td>
            <td> CS5600 </td>
          </tr>
          <tr>
            <td> <input type="checkbox" name="role" value="professor" /> </td>
            <td> Fall 2017 </td>
            <td> CS5800 </td>
          </tr>
          <tr>
            <td> <input type="checkbox" name="role" value="professor" /> </td>
            <td> Fall 2017 </td>
            <td> CS5620 </td>
          </tr>
        </table>
        <br />
        <br />
        <Button bsStyle="primary"> Submit </Button>
      </div>
    );
  }
}

export default CoursePage

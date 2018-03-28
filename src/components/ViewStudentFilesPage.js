import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, Button, Jumbotron, MenuItem, ButtonToolbar, DropdownButton, Pager, Panel} from 'react-bootstrap';

class ViewStudentFilesPage extends React.Component{

  render(){

    return (
      <div>
        <h1> Welcome Professor </h1>
        <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <NavItem eventKey="1" href="/home">
          Profile
        </NavItem>
        <NavItem eventKey="3" disabled>
          Logout
        </NavItem>
      </Nav>
      <br />
      <br />

      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Plagiarism Reports</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <a href=""> Student001-Student002 [90%] </a> <br />
          <a href=""> Student003-Student007 [80%] </a> <br />
          <a href=""> Student023-Student008 [70%] </a> <br />
          <a href=""> Student022-Student090 [60%] </a> <br />
        </Panel.Body>
      </Panel>

      <Pager>
        <Pager.Item href="#">Back</Pager.Item>

      </Pager>

      </div>
    );
  }
}

export default ViewStudentFilesPage

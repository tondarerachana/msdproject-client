import React from 'react';
import ReactDOM from 'react-dom';

class AdminPage extends React.Component{

  constructor(props: any){
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {

    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/all')
      .then(response => response.json())
      .then(data => this.setState({users: data}));
  }

  render(){

    const users = this.state.users;
    return (
      <div className={'container col-md-6 col-md-offset-3'}>
        <h1> List of Users </h1>
        UserName | Email | UserRole
        {users.map((user: any) =>
          <div key={user.id}>
            {user.name} | {user.email} | {user.userRole}
          </div>
      )}
      </div>
    );
  }
}

export default AdminPage

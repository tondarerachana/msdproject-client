import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class RegisterPage extends React.Component{

  constructor(){
    super();

    this.state = {userID:'', univID:'', name:'', userRole:'', password:'', email:'', successMessage: ''};

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("Success from RegisterPage!")

    console.log('https://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/registerUser?&userId='+this.state.univID+'&name='+this.state.name+'&userRole='+this.state.userRole+'&password='+this.state.password+'&email='+this.state.email)
    axios.get('https://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/registerUser?&userId='+this.state.univID+'&name='+this.state.name+'&userRole='+this.state.userRole+'&password='+this.state.password+'&email='+this.state.email)

    .then(response => this.setState({successMessage: "Saved!"}))
  }

  update(){
    this.setState({
      userID: 10,
      univID: this.refs.id.value,
      name: this.refs.password.value,
      password: this.refs.password.value,
      email: this.refs.email.value
    })
  }

  handleUserRole(event) {
    this.setState({
      userRole: event.target.value
    })
  }

  render(){
    return (
      <div className={'container col-md-6 col-md-offset-3'}>
        <h1> User Registration </h1>
        <input type="text" ref="id" placeholder="University ID"
                onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="text" name="name" ref="name" placeholder="Name"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="email" name="email" ref="email" placeholder="Email"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="password" name="password" ref="password" placeholder="Password"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="radio" name="role" ref="studentRole" value="student"
                checked={this.state.userRole === 'student'}
                onChange={this.handleUserRole.bind(this)} /> <label>Student</label>
        <br />
        <input type="radio" name="role" ref="profRole" value="professor"
              checked={this.state.userRole === 'professor'}
              onChange={this.handleUserRole.bind(this)} /> <label>Professor</label>
        <br />
        <br />

        <h2> {this.state.successMessage} </h2>

        <button onClick={this.handleClick}> Submit </button>
      </div>
    );
  }
}

export default RegisterPage

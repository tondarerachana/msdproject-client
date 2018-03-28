
import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'aman',
      email: 'rayat.a@husky.neu.edu',
      password: 'Aman',
      id: '123',
      university: 'Northeastern University',
      editing: false,
    };
  }
  edit() {
    this.setState(
      {
        editing: true,
      }
      );
  }
  update() {
    this.setState(
      {
        editing: false,
        name: this.refs.newName.value,
        email: this.refs.newEmail.value,
        password: this.refs.newPassword.value,
        id: this.refs.newId.value,
        university: this.refs.newUniversity.value,
      });
  }
  renderForm() {
    return (
      <div className={'container text-center  w-25 p-t-5'}>
        <h1>Update Profile</h1>
        <form>
            <div className={'form-group'}>
              <input
                ref="newId"
                type="text"
                className="form-control"
                id="Id"
                placeholder={'Id'}
                defaultValue={this.state.id}
              />
            </div>
            <div className="form-group">
              <input
                ref="newName"
                type="text"
                className="form-control"
                id="FirstName"
                placeholder="Name"
                defaultValue={this.state.name}
              />
            </div>
            <div className="form-group">
              <input
                ref="newUniversity"
                type="text"
                className="form-control"
                id="University"
                placeholder="University"
                defaultValue={this.state.university}
              />
            </div>
            <div className="form-group">
              <input
                ref="newEmail"
                type="email"
                className="form-control"
                id="Email"
                placeholder="Email"
                defaultValue={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                ref="newPassword"
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
                defaultValue={this.state.password}
              />
            </div>
            <button
              onClick={this.update.bind(this)}
              type="submit"
              className="btn btn-primary"
            >Save
            </button>
        </form>
      </div>
    );
  }
  renderNormal() {
    return (
      <div className={'container w-25 p-3 text-center p-t-5'}>
        <h1>Profile</h1>
        <ul className="list-group">
          <li className="list-group-item">Id: {this.state.id}</li>
          <li className="list-group-item">Name: {this.state.name}</li>
          <li className="list-group-item">Password: {this.state.email}</li>
          <li className="list-group-item">University: {this.state.university}</li>
          <li className="list-group-item">Password: *****</li>
          <button onClick={this.edit.bind(this)} type="submit" className={'btn btn-primary'}> Update</button>
        </ul>
      </div>
    );
  }

  render() {
    if (this.state.editing) {
      return this.renderForm();
    }
    return this.renderNormal();
  }
}
Form.propTypes = {
  name: React.PropTypes.element.isRequired,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  id: React.PropTypes.number,
  university: React.PropTypes.string,
  editing: React.PropTypes.boolean,
};

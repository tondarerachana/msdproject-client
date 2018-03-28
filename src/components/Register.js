import React from 'react';

export default class Register extends React.Component {
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
  render() {
    return (
      <div>
        <h1 className={'text-center'}>Plagarism Detection System</h1>
        <div className={'container text-center  w-50 p-t-5'} >

          <form className={'m-5'}>
            <div className={'form-group'}>
              <input
                ref="newId"
                type="text"
                className="form-control"
                id="Id"
                placeholder={'Id'}
              />
            </div>
            <div className="form-group">
              <input
                ref="newName"
                type="text"
                className="form-control"
                id="FirstName"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                ref="newUniversity"
                type="text"
                className="form-control"
                id="University"
                placeholder="University"
              />
            </div>
            <div className="form-group">
              <input
                ref="newEmail"
                type="email"
                className="form-control"
                id="Email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                ref="newPassword"
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input float-left" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label" htmlFor={'inlineRadio2'}>Professor</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input float-right" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" htmlFor={'inlineRadio2'}>Student</label>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary m-5"
              >SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

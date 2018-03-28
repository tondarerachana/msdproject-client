    import React from 'react';

    export default class Login extends React.Component {
      render() {
        return (
          <div className={'container text-center col-4'}>
            <h1>Plagarism Detection System</h1>
            <div className={'container'}>
              <form className={'m-5'}>
                <div className="form-group">
                  <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                </div>
                <div className={'m-5'}>
                  <button type="submit" className="btn btn-primary float-left">login</button>
                  <button type="submit" className="btn btn-default float-right">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    }

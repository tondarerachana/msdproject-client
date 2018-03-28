import React from 'react';

export default class Navbar extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Plagarism Checker </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={'container'}>
            <div className="row navbar-nav mr-auto">
          {/*<ul className="navbar-nav mr-auto">*/}

              <div className="col-sm-4 nav-item">
                {/*<li className="nav-item active">*/}
                <a className="nav-link" href="#">Profile<span className="sr-only">(current)</span></a>
                {/*</li>*/}
              </div>
              <div className="col-sm-4 nav-item" >
            {/*<li className="nav-item active">*/}
              <a className="nav-link" href="#">Courses <span className="sr-only">(current)</span></a>
            {/*</li>*/}
              </div>
              <div className="col-sm-4 nav-item">
            {/*<li className="nav-item">*/}
              <a className="nav-link" href="#">Log Out</a>
            {/*</li>*/}
              </div>
          {/*</ul>*/}
            </div>
            </div>
        </div>
      </nav>
    );
  }
}

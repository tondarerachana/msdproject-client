import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import HomePage from './HomePage.js'
import RegisterPage from './RegisterPage.js'
import CoursePage from './CoursePage.js'
import AdminPage from './AdminPage.js'
import ProfessorCoursePage from './ProfessorCoursePage.js'
import PlagiarismReportsPage from './PlagiarismReportsPage.js'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import ChooseCourse from "./ChooseCourse";
import ChooseCoursePage from "./ChooseCoursePage";


class App extends React.Component {

  render(){
    return (
      <div className="container text-center">
      <Router>
        <div>
            <h1 > Plagiarism Detection System </h1>
            <div className={'container'}>
            <button className={'btn'}>
              <Link to="login"> Login </Link>
            </button>
            <button className={'btn'}>
              <Link to="register"> Register </Link>
              </button>
              <button className={'btn'}>
                <Link to="logout"> Logout </Link>
              </button>
          </div>

          <Route path="/login" component={HomePage} />
          <Route path="/logout" component={HomePage} />

          <Route path="/register" component={RegisterPage} />

        </div>
      </Router>

      </div>
    );
  }
}
export default App

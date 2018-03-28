import { render } from 'react-dom';
import  React, { Component } from 'react';
import { Route, Router, NavLink} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {LoginPage} from 'components/LoginPage';

const history = createBrowserHistory()

export default class Main extends React.Component{

  constructor(props){
    super(props);

    // var activeKey=(history.location.pathname).replace('/', '')
    // activeKey=(activeKey.length>0? activeKey: "home")
    // this.state={activeKey: activeKey}

    // this.handleSelect=this.handleSelect.bind(this)
  }
  //
  // handleSelect(selectedKey) {
  //
  //   this.setState({activeKey: selectedKey});
  //
  //   history.push(selectedKey)
  // }

  render() {
    return (
      <Router history = {hashHistory}>
        <Route path="/" component= {LoginPage}>
          <IndexRoute component={LoginPage}></IndexRoute>
        </Route>

      </Router>
  );
  }
}

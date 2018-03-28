import React from 'react';
import Navbar from './Navbar';
import ChooseCourse from './ChooseCourse';
import Header from './Header';

export default class ChooseCoursePage extends React.Component{
  render(){
    return(
      <div>
        <Navbar head={'Courses'}/>
        <Header header={'Select your Courses'}/>
        <ChooseCourse button={'Submit'}/>
      </div>
    )
  }
}

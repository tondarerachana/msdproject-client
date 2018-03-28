import React from 'react';
import ProfessorCoursePage from 'components/ProfessorCoursePage';
import Navbar from 'components/Navbar';
import  Header from 'components/Header';

export default class CheckPlagarismPage extends React.Component{
  render(){
    return(
      <div>
        <Navbar head={'Welcome Professor'}/>
        <Header header={'Check Plagarism'}/>
        <ProfessorCoursePage />
      </div>
    )
  }
}

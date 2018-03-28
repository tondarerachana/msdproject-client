import React from 'react';

export default class CheckPlagarism extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ['2017','2018','2019'],
      course: ['Algorithm', 'Database', 'msd','PDP','angular'],
      assignments: ['Assignment1', 'Assignment2'],
    };
  }
  courseRow(text,i){
    return (
      <option key={i} value="">{text}</option>
  );
  }
  assignmentRow(text,i) {
    return (
      < option
    key = {i}
    value = "" > {text} < /option>
  )
    ;
  }
    TermRow(text,i){
      return (
        <option key={i} value="">{text}</option>
    );
  }
  render() {
    return (
      <div className={'container text-center col-4' }>
      <div className="form-group">
      <select className="form-control" id="exampleFormControlSelect1">
      <option disabled selected={'true'}>Select your Term</option>
    {

      this.state.term.map(this.TermRow.bind(this))
    }
  </select>
      <br/>
      <select className="form-control" id="exampleFormControlSelect1">
      <option disabled selected={'true'}>Select your Course</option>
    {

      this.state.course.map(this.courseRow.bind(this))
    }
  </select>
    <br />
    <select className="form-control" id="exampleFormControlSelect1">
    <option disabled selected={'true'} >Select your Assignment</option>
    {
      this.state.assignments.map(this.assignmentRow.bind(this))
    }
  </select>
    </div>
      <button className={'btn btn-primary float-left'}>Check Plagarism</button>
    <button className = {'btn - btn-primary float-right'}>Set Percentage</button>
      </div>
  );
  }
}

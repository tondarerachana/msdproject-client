import React from 'react';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: ['CS5200', 'CS5800', 'CS5500','CS5010','CS6240'],
      assignments: ['homework1', 'homework2'],
      status: '',
      disableSubmit: false
    };
    this.handleClick = this.handleClick.bind(this)
  }
  courseRow(text,i){
    return (
      <option key={i} value="">{text}</option>
    );
  }
  assignmentRow(text,i){
    return (
      <option key={i} value="">{text}</option>
    );
  }

  handleClick() {
    this.setState({
      disableSubmit: true
    })
  }

  render() {
    let disableSubmit = this.state.disableSubmit;
    if(!disableSubmit){
    return (
      <div className={'container text-center'}>
         <h2> Assignment Submission : </h2>
         <div className="form-group">
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

        <div className="form-group">
          <input type="text" className="form-control" id="GithubLink" placeholder="Place your GitHub Link Here" />
        </div>
        <button className={'btn btn-primary my-1'} onClick={this.handleClick}>Submit</button>
      </div>
    );
  } else
  {
    return( <h2> Assignment Submission successful </h2>)
  }
}
}

import React from 'react';

export default class CourseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: ['Algorithm', 'Pdp', 'Database Management System', 'Msd'],
    };
  }
  removeCourse(i) {
    const arr = this.state.courses;
    arr.splice(i, 1);
    this.setState({ courses: arr });
  }
  addCourse(text, i) {
    return (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td >{text}</td>
        <td>
          <button onClick={this.removeCourse.bind(this)} key={i} className={'btn btn-primary'}> Delete</button>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <div className={'container text-center col-42'}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Course</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{
            this.state.courses.map(this.addCourse.bind(this))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

import React from "react";
import "./YourClasses.scss";

import { connect } from "react-redux";

import { fetchStudents } from "../../actions/instructorActions";

class ClassElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.props.fetchStudents(this.props.classElem.id).then(res => {
      this.setState({
        students: [...this.props.students]
      });
    });
  }

  render() {
    return (
      <div className="yourclass-element">
        <h2 className="yourclass-element-title">{this.props.classElem.name}</h2>
        <h2>{this.props.classElem.schedule}</h2>
        <h2 className="yourclass-location">{this.props.classElem.location}</h2>
        <p className="yourclass-element-subtitle">Students:</p>
        {this.state.students.length == 0 ? (
          <p>No students have signed up yet...</p>
        ) : (
          this.state.students.map(student => <p>{student.username}</p>)
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.instructorReducer.classes,
  students: state.instructorReducer.students
});

export default connect(
  mapStateToProps,
  {
    fetchStudents
  }
)(ClassElement);

import React from "react";
import "./YourClasses.scss";

import { connect } from "react-redux";

import { updatePunchcard } from "../../actions/instructorActions";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentToUpdate: {
          user_id: "",
          uses_remaining: ""
      },
      checked: false
    };
  }

  componentDidMount() {
      console.log(this.props)
    this.setState({
        ...this.state,
        studentToUpdate: {
            user_id: this.props.student.id,
            uses_remaining: this.props.student.uses_remaining
        }
    })
  }

  updateUses = () => {
      this.state.checked ? 
      this.setState({
          studentToUpdate: {
              ...this.state.studentToUpdate,
              uses_remaining: this.state.studentToUpdate.uses_remaining + 1
          },
          checked: !this.state.checked
      })
      : 
      this.setState({
        studentToUpdate: {
            ...this.state.studentToUpdate,
            uses_remaining: this.state.studentToUpdate.uses_remaining - 1
        },
        checked: !this.state.checked
    })
    this.props.updatePunchcard(this.props.classId, this.state.studentToUpdate)
  }

  render() {
    console.log(this.props)
    return (
      <div className="student-elem">
          <p className="student-name">{this.props.student.username}</p>
          <input checked={this.state.checked} onChange={() => this.updateUses()} type="checkbox"></input>
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
    updatePunchcard
  }
)(Student);

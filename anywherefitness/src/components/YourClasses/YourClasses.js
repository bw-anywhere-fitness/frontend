import React from "react";
import "./YourClasses.scss";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchStudents } from "../../actions/instructorActions";

import ClassElement from "./ClassElement"

class YourClasses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="instructor-home-container">
        <div className="navigation">
          <h2>Hello!</h2>
          <nav>
            <Link className="home nav-item" exact to="/instructor/">
              Home
            </Link>
            <Link
              className="classes nav-item"
              exact
              to="/instructor/yourclasses"
            >
              Your classes
            </Link>
            <Link
              className="add-class nav-item"
              exact
              to="/instructor/addclass"
            >
              Add class
            </Link>
          </nav>
        </div>
        <div className="yourclasses-container">
          {this.props.classes.map(classElem => {
            return <ClassElement classElem={classElem} />
          })}
        </div>
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
)(YourClasses);

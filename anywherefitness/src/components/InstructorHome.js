import React from "react";
import "./InstructorHome.scss";

// import { getData, addFriend, deleteFriend } from "../actions";
import { connect } from "react-redux";
// import Friend from "./Friend";
import { NavLink, Link } from "react-router-dom";
import ClassComponent from "./ClassComponent"

import { getData, deleteClass } from "../actions/instructorActions"

import axios from "axios"

class InstructorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: {
        image: "",
        title: "",
        date: ""
      }
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("id");
    this.props.getData(id);
  }

  delete = (event, id) => {
    event.preventDefault();
    this.props.deleteClass(id);
  }

/*  handleChanges = event => {
    event.preventDefault();
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  add = event => {
      event.preventDefault();
        this.props.addFriend(this.state.friend);
  }
 */

  render() {
    return (
      <div className="instructor-home-container">
        <div className="navigation">
          <h2>Hello!</h2>
          <nav>
            {/*<Link className="home nav-item" exact to="/instructor/">
              Home
            </Link>*/}
            <Link className="classes nav-item" exact to="/instructor/">
              Your classes
            </Link>
            <Link className="add-class nav-item" exact to="/instructor/addclass">
              Add class
            </Link>
          </nav>
        </div>
        <div className="classes-container">
          {this.props.classes.map(classElement => <ClassComponent delete={this.delete} classProp={classElement}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.instructorReducer.classes,
  name: state.instructorReducer.name,
});

export default connect(
  mapStateToProps,
  {
    getData, deleteClass
  }
)(InstructorHome);

import React from "react";
import "./InstructorHome.scss";

// import { getData, addFriend, deleteFriend } from "../actions";
import { connect } from "react-redux";
// import Friend from "./Friend";
import { NavLink, Link } from "react-router-dom";

import axios from "axios"

class InstructorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: {
        name: "",
        age: "",
        email: ""
      }
    };
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

  componentDidMount() {
    this.props.getData();
  }

  add = event => {
      event.preventDefault();
        this.props.addFriend(this.state.friend);
  }

  delete = (event, id) => {
    event.preventDefault();
      this.props.deleteFriend(id);
} */

  render() {
    return (
      <div className="instructor-home-container">
        <div className="navigation">
          <h2>Hello, {this.props.name}</h2>
          <nav>
            <Link exact to="/instructor/classes">
              Your classes
            </Link>
            <Link exact to="/instructor/addclass">
              Add class
            </Link>
          </nav>
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
//    getData, addClass, deleteClass
  }
)(InstructorHome);

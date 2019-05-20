import React from "react";
import "./ClassForm.scss";

// import { getData, addFriend, deleteFriend } from "../actions";
import { connect } from "react-redux";
// import Friend from "./Friend";
import { NavLink, Link } from "react-router-dom";

import axios from "axios"

class ClassForm extends React.Component {
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
            <Link className="classes nav-item" exact to="/instructor/">
              Your classes
            </Link>
            <Link className="add-class nav-item" exact to="/instructor/addclass">
              Add class
            </Link>
          </nav>
        </div>
        <div className="class-form-container">
        <div className="form-title">
          <h1>Add your class!</h1>
        </div>
        <form className="form" onSubmit={this.add}>
          <label for="image">Choose image to upload (PNG, JPG)</label>
          <input
            placeholder="Image"
            value={this.state.newClass.image}
            onChange={e => this.handleChanges(e)}
            name="image"
            type="file"
            className="image-form"
          />
          <input
            placeholder="Class title"
            value={this.state.newClass.title}
            onChange={e => this.handleChanges(e)}
            name="title"
          />
          <input
            placeholder="Date"
            type="date"
            value={this.state.newClass.date}
            onChange={e => this.handleChanges(e)}
            name="date"
          />
          <button onClick={this.add}>Add</button>
        </form>

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
)(ClassForm);

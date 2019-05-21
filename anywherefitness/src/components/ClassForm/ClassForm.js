import React from "react";
import "./ClassForm.scss";

import { addClass } from "../../actions/instructorActions";
import { connect } from "react-redux";
// import Friend from "./Friend";
import { NavLink, Link } from "react-router-dom";
import Loader from 'react-loader-spinner';

import axios from "axios"

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: {
        name: "",
        image: "",
        schedule: "",
        location: ""
      }
    };
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      newClass: {
        ...this.state.newClass,
        [event.target.name]: event.target.value
      }
    });
  };

  add = event => {
    event.preventDefault();
      this.props.addClass(this.state.newClass);
  } 

  /*
  componentDidMount() {
    this.props.getData();
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
          <label for="image">Choose image to upload</label>
          <input
            placeholder="Image"
            value={this.state.newClass.image}
            onChange={e => this.handleChanges(e)}
            name="image"
            type="file"
            className="image-form"
            id="image"
          />
          <input
            placeholder="Class name"
            value={this.state.newClass.name}
            onChange={e => this.handleChanges(e)}
            name="name"
          />
          <input
            placeholder="Schedule"
            type="text"
            value={this.state.newClass.schedule}
            onChange={e => this.handleChanges(e)}
            name="schedule"
          />
          <input
            placeholder="Location"
            type="text"
            value={this.state.newClass.location}
            onChange={e => this.handleChanges(e)}
            name="location"
          />
          <button className="btn-2" onClick={this.add}>
            {this.props.addingClass ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "add"
            )}
          </button>
        </form>
        <div className={`error-${Boolean(this.props.error)}`}>
            {this.props.error ? (
              <p>{`Error: ${this.props.error}`}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.instructorReducer.classes,
  name: state.instructorReducer.name,
  error: state.instructorReducer.error,
  addingClass: state.instructorReducer.addingClass,
});

export default connect(
  mapStateToProps,
  {
    addClass
  }
)(ClassForm);

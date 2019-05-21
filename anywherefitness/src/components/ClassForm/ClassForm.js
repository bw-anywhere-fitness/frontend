import React from "react";
import "./ClassForm.scss";

// import { getData, addFriend, deleteFriend } from "../actions";
import { connect } from "react-redux";
// import Friend from "./Friend";
import { NavLink, Link } from "react-router-dom";

import axios from "axios";

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
  uploadfile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "anywhere-fitness");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/cc24/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    this.setState({
      image: file.secure_url
    });
  };

  render() {
    return (
      <div className="instructor-home-container">
        <div className="navigation">
          <h2>Hello, {this.props.name}</h2>
          <nav>
            <Link className="classes nav-item" exact to="/instructor/">
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
        <div className="class-form-container">
          <div className="form-title">
            <h1>Add your class!</h1>
          </div>
          <form className="form" onSubmit={this.add}>
            <label for="image">Choose image to upload (PNG, JPG)</label>
            <input
              placeholder="Image"
              value={this.state.newClass.image}
              onChange={e => this.uploadfile(e)}
              name="image"
              type="file"
              className="image-form"
            />
            {this.state.image && (
              <img src={this.state.image} height="100" weight="100" />
            )}
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
  name: state.instructorReducer.name
});

export default connect(
  mapStateToProps,
  {
    //    getData, addClass, deleteClass
  }
)(ClassForm);

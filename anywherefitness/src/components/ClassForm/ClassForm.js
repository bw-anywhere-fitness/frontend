import React from "react";
import "./ClassForm.scss";

import { addClass } from "../../actions/instructorActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import CustomizedSnackbar from "../MaterialUI/CustomizedSnackBars"

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: {
        name: "",
        image: "",
        schedule: "",
        location: ""
      },
      snackBarOpen: false,
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
    this.props.addClass(this.state.newClass)
    .then( () => {
      this.setState({
        newClass: {
          name: "",
          image: "",
          schedule: "",
          location: ""
        },
        snackBarOpen: true,
      })
    }
    )
  }
  
  toggleSnackbar = () => {
    this.setState({
      ...this.state,
      snackBarOpen: !this.state.snackBarOpen
    })
  }

  uploadfile = async e => {
    const files = e.target.files;
    const data = new FormData();
    console.log(files, "files");
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
      ...this.state,
      newClass: { ...this.state.newClass, image: file.secure_url }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="instructor-home-container">
        <div className="navigation">
          <h2>Hello!</h2>
          <nav>
            <Link className="home nav-item" exact to="/instructor/">
              Home
            </Link>
            <Link className="classes nav-item" exact to="/instructor/yourclasses">
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
            <label for="image">Choose image to upload</label>
            <input
              placeholder="Image"
              onChange={e => this.uploadfile(e)}
              name="image"
              type="file"
              className="image-form"
              id="image"
            />
            {this.state.image && <img src={this.state.image} />}
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
                <Loader
                  type="ThreeDots"
                  color="#1f2a38"
                  height="7.5"
                  width="26"
                />
              ) : (
                "add"
              )}
            </button>
          </form>
          {this.state.snackBarOpen ? (
            <CustomizedSnackbar
              error={this.props.error}
              open={this.state.snackBarOpen}
              toggleSnackbar={this.toggleSnackbar}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.instructorReducer.classes,
  name: state.instructorReducer.name,
  error: state.instructorReducer.error,
  addingClass: state.instructorReducer.addingClass
});

export default connect(
  mapStateToProps,
  {
    addClass
  }
)(ClassForm);

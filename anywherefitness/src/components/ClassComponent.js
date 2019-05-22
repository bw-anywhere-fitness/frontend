import React from "react";
import "./InstructorHome.scss";

import classImage from "../images/Exercise1.jpg";
import Loader from "react-loader-spinner";

function ClassComponent(props) {
  console.log(props);
  console.log(props.classProp);
  return (
    <div className="class-element">
      {props.classProp.image ? (
        <img src={props.classProp.image} />
      ) : (
        <img src={classImage} />
      )}
      <div className="class-element-content">
        <p className="class-title">{props.classProp.name}</p>
        <p className="class-date">{props.classProp.schedule}</p>
      </div>
      <div className="class-element-buttons">
        <button onClick={e => props.delete(e, props.classProp.id)}>
          {props.deletingClass ? (
            <Loader type="ThreeDots" color="#ffffff" height="7.5" width="26" />
          ) : (
            "DELETE"
          )}
        </button>
      </div>
    </div>
  );
}

export default ClassComponent;

import React from "react";
import "./InstructorHome.scss";

function ClassComponent(props) {
  return (
    <div className="class-element">
      <img src={props.classProp.image} />
      <div className="class-element-content">
        <p className="class-title">{props.classProp.name}</p>
        <p className="class-date">{props.classProp.schedule}</p>
      </div>
      <div className="class-element-buttons">
        <button>DELETE</button>
        <button>EDIT</button>
      </div>
    </div>
  );
}

export default ClassComponent;

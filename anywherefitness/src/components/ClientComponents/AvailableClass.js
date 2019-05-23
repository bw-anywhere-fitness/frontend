import React from 'react';
import { connect } from 'react-redux';
import { enrollInClass } from '../../actions';
import classImage from "../../images/Exercise1.jpg";

class AvailableClass extends React.Component {

    enrollInClass = e => {
        e.preventDefault();
        console.log(localStorage.getItem("id"));
        this.props.enrollInClass(this.props.id, localStorage.getItem("id"));
    }

    render() {
        return (
            <div className="class-element">
                {this.props.image ? <img src={this.props.image} alt="fitness" /> 
                : <img src={classImage} alt="fitness" /> }
                
                <div className="class-element-content">
                    <div className="class-title">{this.props.name}</div>
                    <div className="class-date">{this.props.schedule}</div>
                    <div className="class-date">{this.props.location}</div>
                    <div className="class-element-buttons">
                        <button onClick={this.enrollInClass}>Enroll</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
    null,
    { enrollInClass }
)(AvailableClass);


import React from 'react';
import { connect } from 'react-redux';
import { deleteClientClass } from '../../actions';
import classImage from "../../images/Exercise1.jpg";

class ClientClass extends React.Component {

    deleteClientClass = e => {
        e.preventDefault();
        console.log("user id", localStorage.getItem("id"));
        console.log("class id", this.props.id);
        this.props.deleteClientClass(this.props.id, localStorage.getItem("id"));
    }

    render() {
        return (
            <div className="class-element">
                {this.props.image ? <img src={this.props.image} alt="fitness" />
                    : <img src={classImage} alt="fitness" />}
                <div className="class-element-content">
                    <div className="class-title">{this.props.name}</div>
                    <div className="class-date">{this.props.schedule}</div>
                    <div className="class-date">{this.props.location}</div>
                    <div className="class-date">Classes remaining: {this.props.uses_remaining}</div>
                    <div className="class-element-buttons">
                    <button onClick={this.deleteClientClass}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}


    

export default connect(
        null,
        { deleteClientClass }
    )(ClientClass);
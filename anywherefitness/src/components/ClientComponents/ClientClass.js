import React from 'react';
import { connect } from 'react-redux';
import { deleteClass } from '../../actions';

class ClientClass extends React.Component {

    deleteClass = e => {
        e.preventDefault();
        console.log("id", localStorage.getItem("id")); 
        console.log("class id", this.props.id);   
        this.props.deleteClass(this.props.id, localStorage.getItem("id"));
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.schedule}</p>
                <p>{this.props.location}</p>
                <p>Classes remaining: {this.props.uses_remaining}</p>
                <button onClick={this.deleteClass}>Delete</button>
            </div>
        )
    }
}

export default connect(
    null ,
    { deleteClass }
)(ClientClass);
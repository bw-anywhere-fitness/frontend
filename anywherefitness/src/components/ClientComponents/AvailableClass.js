import React from 'react';
import { connect } from 'react-redux';
import { enrollInClass } from '../../actions';

class AvailableClass extends React.Component {

    enrollInClass = e => {
        e.preventDefault();
        console.log(localStorage.getItem("id"));    
        this.props.enrollInClass(this.props.id, localStorage.getItem("id"));
    }

    render() {
        return (
            <div>   
                <p>{this.props.name}</p>
                <p>{this.props.schedule}</p>
                <p>{this.props.location}</p>
                <button onClick={this.enrollInClass}>Enroll</button>
            </div>
        )
    }
}


export default connect(
    null ,
    { enrollInClass }
)(AvailableClass);


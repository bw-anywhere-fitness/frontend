import React from 'react';
import { connect } from 'react-redux';

class Class extends React.Component {
    // enroll in class, placeholder

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.schedule}</p>
                <p>{this.props.location}</p>
                <button>Enroll</button>
            </div>
        )
    }
}

export default Class

// export default connect(
//     null ,
//     { enrollClass }
// )(Class);


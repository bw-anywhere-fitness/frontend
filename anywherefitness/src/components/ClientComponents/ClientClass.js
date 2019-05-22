import React from 'react';

class ClientClass extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.schedule}</p>
                <p>{this.props.location}</p>
                <button>Delete</button>
            </div>
        )
    }
}

export default ClientClass


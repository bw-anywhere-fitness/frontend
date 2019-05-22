import React from 'react';
import { connect } from 'react-redux';

import { getClientClasses } from '../../actions';
import ClientClass from './ClientClass';

class ClientClassList extends React.Component {
    componentDidMount() {
        this.props.getClientClasses(localStorage.getItem("id"));
    }

    render() {
        // console.log("client classes list props", this.props);
        console.log("client class list", this.props.clientClassList)
        return (
            <div>
                <p>Client classes list:</p>
                {this.props.clientClassList.map(singleClass => {
                    return <ClientClass 
                        key={singleClass.id}
                        classId={singleClass.id}
                        name={singleClass.name}
                        schedule={singleClass.schedule}
                        location={singleClass.location}
                        image={singleClass.image}
                    />  
                     })}
                        
            </div>
        )
    }
}


const mapStateToProps = state => ({
    clientClassList: state.clientReducer.clientClassList
})

export default connect(
    mapStateToProps,
    { getClientClasses }
)(ClientClassList)



import React from 'react';
import { connect } from 'react-redux';

import { getClientClasses } from '../../actions';
import Class from './Class';

class MyClassList extends React.Component {
    componentDidMount() {
        this.props.getClientClasses();
    }

    render() {
        // console.log("my classes list props", this.props);
        console.log("client class list", this.props.clientClassList)
        return (
            <div>
                <p>Client classes:</p>
                {this.props.clientClassList.map(singleClass => {
                    return <Class 
                        key={singleClass.id}
                        id={singleClass.id}
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
)(MyClassList)



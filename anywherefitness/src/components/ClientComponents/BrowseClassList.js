import React from 'react';
import { connect } from 'react-redux';

import { getAllClasses } from '../../actions';
import Class from './Class';

class BrowseClassList extends React.Component {
    componentDidMount() {
        this.props.getAllClasses();
    }

    render() {
        console.log("browse class list props", this.props);
        console.log(this.props.classList)
        return (
            <div>
                <p>All classes:</p>
                {this.props.classList.map(singleClass => {
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
    classList: state.clientReducer.classList
})

export default connect(
    mapStateToProps,
    { getAllClasses }
)(BrowseClassList)



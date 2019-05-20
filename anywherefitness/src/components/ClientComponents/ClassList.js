import React from 'react';
import { connect } from 'react-redux';

// import { getClasses } from '../actions';
import Class from './Class';

class ClassList extends React.Component {
    // componentDidMount() {
    //     this.props.getClasses();
    // }

    render() {
        return (
            <div>
                <Class />
            </div>
        )
    }
}

export default ClassList

// const mapStateToProps = state => ({
//     classList: state.classList
// })

// export default connect(
//     mapStateToProps,
//     { getClasses }
// )(ClassList)



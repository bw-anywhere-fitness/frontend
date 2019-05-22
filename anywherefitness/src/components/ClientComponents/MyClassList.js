import React from 'react';
import { connect } from 'react-redux';

// import { getClasses } from '../actions';
import Class from './Class';

class MyClassList extends React.Component {
    // componentDidMount() {
    //     this.props.getClasses();
    // }

    render() {
        return (
            <div>
                <p>My classes:</p>
                <Class />
                <Class />
                <Class />
            </div>
        )
    }
}

export default MyClassList

// const mapStateToProps = state => ({
//     classList: state.classList
// })

// export default connect(
//     mapStateToProps,
//     { getClasses }
// )(ClassList)



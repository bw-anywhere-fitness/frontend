import React from 'react';
import { connect } from 'react-redux';

class ClassPass extends React.Component {

    render() {
        return (
            <div>
                <p>Available class punches left (placeholder)</p>
                <button>Buy another pass for 10 classes </button>
            </div>
        )
    }
}

export default ClassPass

// export default connect(
//     null ,
//     { functionGoesHere }
// )(ClassPass);

import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../actions/iceCreamAction';
function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         buyCake: () => {
//             dispatch(buyCake())
//         }
//     }
// }

export default connect(mapStateToProps, { buyIceCream })(IceCreamContainer);
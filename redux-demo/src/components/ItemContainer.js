import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../actions/cakeAction';
import { buyIceCream } from '../actions/iceCreamAction';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunc = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunc
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
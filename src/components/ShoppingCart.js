import React from 'react';
import List from './List';

function ShoppingCart(props) {
    // console.log(props)
    return (
        <div className="shoppingcart">
            <h1>Winkelmand</h1>
            <button onClick={props.emptyClick}>Leeg de winkelmand</button>
            <List list={props.list} click={props.itemClick} />
        </div>
    )
}

export default ShoppingCart
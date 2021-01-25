import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({item, clearItem, removeItem, addItem}) => {
    console.log('cart item : ', item);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => removeItem(item)}>&#10092;</span>
                <span className="value">{item.quantity}</span>
                <span className="arrow" onClick={() => addItem(item)}>&#10093;</span>
            </span>
            <span className="price">{item.price}</span>
            <span className="remove-button" onClick={() => clearItem(item)}>&#10060;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    {
        clearItem: (item) => dispatch(clearItemFromCart(item)),
        removeItem: (item) => dispatch(removeItem(item)),
        addItem: (item) => dispatch(addItem(item))
    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem);
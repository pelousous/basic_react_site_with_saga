import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {
    console.log('cart item : ', item);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">{item.quantity}</span>
            <span className="price">{item.price}</span>
            <span className="remove-button">&#10060;</span>
        </div>
    )
}

export default CheckoutItem;
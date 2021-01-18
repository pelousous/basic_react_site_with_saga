import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({cartItem: {id, imageUrl, name, quantity, price}}) => {
    return (
    <div className='cart-item' key={id}>
        <img src={imageUrl} alt="item" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} X {price}
            </span>
        </div>
    </div>
    )
}

export default CartItem;
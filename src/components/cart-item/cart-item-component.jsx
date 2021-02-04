import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({cartItem: {id, imageUrl, name, quantity, price}}) => {
    return (
    <CartItemContainer key={id}>
        <CartItemImage src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span className='price'>
                {quantity} X {price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
    )
}

export default CartItem;
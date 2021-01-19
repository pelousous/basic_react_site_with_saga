import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {cartItemsSelector} from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item-component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem  cartItem={cartItem}/>
            ))}
        </div>   
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => {
    return {
        cartItems: cartItemsSelector(state)
    }
    }

export default connect(mapStateToProps)(CartDropdown);
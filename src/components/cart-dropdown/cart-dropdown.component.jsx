import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import {cartItemsSelector} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item-component';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? cartItems.map(cartItem => (
                <CartItem  cartItem={cartItem}/>
            )) :
            <span className="empty-message">The cart is empty</span>
            }
        </div>   
        <CustomButton onClick={
            () => {
                history.push('/checkout'); 
                dispatch(toggleCartHidden())
            }
            }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => {
    return {
        cartItems: cartItemsSelector(state)
    }
}

// we have a shortcut for this if we have only an action
// connect pass the dispatch method to the function so
// we can call toggleCartHidden directly in the component
/*const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})*/

export default withRouter(connect(mapStateToProps)(CartDropdown));
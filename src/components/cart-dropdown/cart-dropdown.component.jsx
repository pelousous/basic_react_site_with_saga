import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import {cartItemsSelector} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

//import './cart-dropdown.styles.scss';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item-component';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? cartItems.map(cartItem => (
                <CartItem  cartItem={cartItem}/>
            )) :
            <EmptyMessageContainer>The cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>   
        <CartDropdownButton onClick={
            () => {
                history.push('/checkout'); 
                dispatch(toggleCartHidden())
            }
            }>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
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
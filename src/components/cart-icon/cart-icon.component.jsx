import React from 'react';
import {connect} from 'react-redux';

//import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {cartItemsCountSelector} from '../../redux/cart/cart.selector';

//import './cart-icon.styles.scss';
import { CartIconContainer, ShoppingIconWrapper, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconWrapper />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStatetoProps = (state) => (
    {
        itemCount: cartItemsCountSelector(state)
    }
)

export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);
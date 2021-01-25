import React from 'react';
import { connect } from 'react-redux';

import './checkout.styles.scss';

import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({items,total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {items.length && items.map(item => {
                return <CheckoutItem key={item.id} item={item}/>
            })}
            <div className='total'>
                Total: $ {total}
            </div>
        </div>
    )
}

/*const mapStateToProps = state => ({
    items: cartItemsSelector(state),
    total: cartTotalSelector(state)
})*/

const mapStateToProps = createStructuredSelector({
    items: cartItemsSelector,
    total: cartTotalSelector
})

export default connect(mapStateToProps)(CheckoutPage);
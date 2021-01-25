import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
    cartSelector,
    cart => cart.cartItems
);

export const cartHiddenSelector = createSelector(
    cartSelector,
    cart => cart.hidden
)

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  items => items.reduce((acc, item) => acc + item.quantity, 0)
)

export const cartTotalSelector = createSelector(
    cartItemsSelector,
    items => items.reduce((acc,item) => acc + item.quantity*item.price,0)
)
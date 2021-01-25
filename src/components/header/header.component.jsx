import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/user/user.selector';
import { cartHiddenSelector } from '../../redux/cart/cart.selector';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
    return (
            <div className='header'>
                <Link className='logo-container' to='/'>
                <Logo className='logo' />
                </Link>
                <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                )}
                <CartIcon />
                </div>
                {!hidden && <CartDropdown />}
            </div>
            )
};

// const mapStateToProps = (state) => {
//     return { 
//         currentUser: currentUserSelector(state),
//         hidden: cartHiddenSelector(state)
//     }
// }

// with createStructuredSelector you can omit the state
// and write a less complex function (is the same as above in the comments)
const mapStateToProps = createStructuredSelector(
    { 
        currentUser: currentUserSelector,
        hidden: cartHiddenSelector
    }
)

export default connect(mapStateToProps)(Header);
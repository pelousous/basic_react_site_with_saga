import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/user/user.selector';
import { cartHiddenSelector } from '../../redux/cart/cart.selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
    return (
            <HeaderContainer>
                <LogoContainer to='/'>
                <Logo className='logo' />
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to='/shop'>
                        SHOP
                    </OptionLink>
                    <OptionLink to='/shop'>
                        CONTACT
                    </OptionLink>
                    {currentUser ? (
                        <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                        </OptionLink>
                    ) : (
                        <OptionLink to='/signin'>
                        SIGN IN
                        </OptionLink>
                    )}
                    <CartIcon />
                </OptionsContainer>
                {!hidden && <CartDropdown />}
            </HeaderContainer>
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
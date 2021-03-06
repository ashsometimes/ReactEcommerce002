import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/header-logo.svg';
import { auth } from '../../firebase/firebase.utils';


const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'>
            </Logo>
        </Link>

        <h1>SHOPAHOLICITY</h1>
            
        <div className='options'>
            <Link className='option' to='/shop'>SHOP
            </Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/sign-in'>SIGN IN</Link>
            }

        </div>


    </div>
);

export default Header;
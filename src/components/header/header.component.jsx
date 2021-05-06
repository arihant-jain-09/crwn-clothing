import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils.js'
import {useDispatch, useSelector} from 'react-redux'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.jsx'
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx'
import {createSelectorCartHidden} from '../../redux/cart/cart.selector.js'
import {createSelectorUser} from '../../redux/user/user.selector.js'
import { SignOutStart } from '../../redux/user/user.actions'
function Header(){
  const currentUser=createSelectorUser(useSelector((state)=>state));
  const hidden=createSelectorCartHidden(useSelector((state)=>state));
  const dispatch = useDispatch();
  return <>
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'> </Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        {currentUser?<div className='option' onClick={()=>dispatch(SignOutStart())}>SIGN OUT</div>:<Link className='option' to='/signin'>SIGN IN</Link>}
        <CartIcon />
      </div>
      {hidden? null:(<CartDropdown />)}
    </div>
  </>
}
export default Header;

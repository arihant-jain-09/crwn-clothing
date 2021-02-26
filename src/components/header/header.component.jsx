import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils.js'
import {connect} from 'react-redux'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.jsx'
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx'
import {createSelectorCartHidden} from '../../redux/cart/cart.selector.js'
import {createSelectorUser} from '../../redux/user/user.selector.js'
import {createStructuredSelector} from 'reselect'
function Header({currentUser,hidden}){
  return <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'> </Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {currentUser?<div className='option' onClick={()=>{auth.signOut()}}>SIGN OUT</div>:<Link className='option' to='/signin'>SIGN IN</Link>}
      <CartIcon />
    </div>
    {hidden? null:(<CartDropdown />)}
  </div>
}
// const mapStateToProps = state=>({
//   currentUser:createSelectorUser(state),
//   hidden:createSelectorCartHidden(state)
// })
//using createStructuredSelector no difference 
const mapStateToProps = createStructuredSelector({
  currentUser:createSelectorUser,
  hidden:createSelectorCartHidden
})


export default connect(mapStateToProps)(Header);

import './index.css'
import './index.scss'
import logo from '../../assets/images/res-logo.png'
import { Container } from 'reactstrap';
import {NavLink, Link} from 'react-router-dom'
import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getTotalQuantity } from '../../store/cartSlice';
import {toggle} from '../../store/cartUiSlice'



const nav__links=[
  {
    display:"Home",
    path:"/"
  },
  {
    display:"Foods",
    path:"foods"
  },
  {
    display:"Cart",
    path:"cart"
  },
  {
    display:"Contact",
    path:"contact"
  }
  
]

const Header = () => {
  const menuRef=useRef()
  const headerRef=useRef()
  const showReg=useRef()
  const quantity=useSelector(getTotalQuantity)
  
  const dispatch= useDispatch()

  const toggleCart=()=>{
    dispatch(toggle())
  }
  const headerResize=()=>{
    window.addEventListener("scroll",()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current?.classList.add("sticky__header")
        
      }else{
        headerRef.current?.classList.remove("sticky__header")
      
      }
    })
  }
useEffect(()=>{
headerResize()
return ()=>window.removeEventListener("scroll", headerResize)
})
  const toggleMenu=()=>{
    menuRef.current?.classList.toggle("show__menu")
    
  }  
  const toggleReg=()=>{
    showReg.current.classList.toggle("toggle__register")
  }
  return <header className="header " ref={headerRef}>
    <Container>
      <div className="nav__wrapper  d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="" className="animate__image"/>
          <h5>Tasty Treat</h5>
        </div>


        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu d-flex align-items-center gap-4">
            {
              nav__links.map((item, index)=>(
                <NavLink key={index} to={item.path}
                className={({isActive})=>isActive? "active__menu":""}
                >{item.display}</NavLink>
              ))
            }
          </div>
        </div>

        <div className="nav__right d-flex align-items-center gap-2">
          <span className="cart__icon" onClick={toggleCart}>
            <i className="ri-shopping-basket-line"></i>
            <span className="cart__badge">{quantity}</span>
          </span>
         
            <span className="user" onClick={toggleReg}>
              <i className="ri-user-line"></i>
            </span>
            

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>

        </div>

      </div>
      
    </Container>
    <div className="register" ref={showReg}>
      
        <Link className="login" to="/login">Login</Link>
        <Link className="signup" to="/signup">sign up</Link>
     
    </div>
  </header>
  
}

export default Header;

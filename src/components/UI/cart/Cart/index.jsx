import React from 'react';
import './index.scss'
import { ListGroup } from 'reactstrap';
import {Link} from 'react-router-dom'
import CartItem from '../CartItem';
import {toggle} from '../../../../store/cartUiSlice'
import {useDispatch, useSelector} from 'react-redux'
import { getCartItems, getTotalPrice } from '../../../../store/cartSlice';

const Cart = () => {
  const dispatch= useDispatch()
  const cartItems = useSelector(getCartItems)
  const totalPrice= useSelector(getTotalPrice)
 
  const toggleCart=()=>{
    dispatch(toggle())
  }
  
  return <div className="cart__container">
    <ListGroup className="cart">
      <div className="cart__close">
        <span onClick={toggleCart}><i className="ri-close-fill"></i></span>
      </div>
      <div className="cart__item-list">
      {
        cartItems.length===0? <h6 className="text-center mt-5">Cart is empty</h6> :(
          cartItems.map(item=><CartItem key={item.id} item={item}/>)
        )
      }
      </div>

      <div className="cart__bottom d-flex align-items-center justify-content-between">
        <h6>Subtotal amount: <span>Ksh. {totalPrice ? totalPrice:0}</span></h6>
        <button><Link to="/checkout">Checkout</Link></button>
      </div>
    </ListGroup>
  </div>
  
}

export default Cart;

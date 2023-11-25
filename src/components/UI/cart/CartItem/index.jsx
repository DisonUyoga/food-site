import './index.scss'
import productImg from '../../../../assets/images/product_01.1.jpg'
import {ListGroupItem} from 'reactstrap'
import { decreaseQuantity, increaseQuantity, deleteItem} from '../../../../store/cartSlice'
import {useDispatch} from 'react-redux'


const CartItem = ({item}) => {
const dispatch=useDispatch()


const decrease=(id)=>{
  dispatch(decreaseQuantity({id}))
}
const increase=(id)=>{
  dispatch(increaseQuantity({id}))
}

const deleteItems=(id)=>{
  dispatch(deleteItem({id}))
}

  return <ListGroupItem className="border-0 cart__item">
    <div className="cart__item-info d-flex gap-2">
      <img src={item?.imgUrl} alt="product-img" />
      <div className="cart__product-info d-flex w-100 align-items-center justify-content-between">
        
        <div>
          <h5 className="cart__product-title">{item?.title}</h5>
          <p className="d-flex align-items-center gap-5 cart__product-price">{item?.quantity}x <span>Ksh.{item?.price}</span></p>
          
          <div className="d-flex align-items-center gap-3 increase__decrease-btn justify-content-between">
            <span onClick={()=>increase(item?.id)} className="increase__btn">
            <i className="ri-add-line"></i>
            </span>
            <span className="quantity">{item?.quantity}</span>
            <span className="decrease__btn" onClick={()=>decrease(item?.id)}><i className="ri-subtract-line"></i></span>
          </div>
        
        </div>
        
        <span className="delete__btn" onClick={()=>deleteItems(item?.id)}><i className="ri-close-line"></i></span>
      </div>
    </div>
  </ListGroupItem>
}

export default CartItem;

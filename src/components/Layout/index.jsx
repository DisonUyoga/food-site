import './index.css'
import Header from '../Header';
import Footer from '../Footer'
import Cart from '../UI/cart/Cart'
import { getCartIsVisible } from '../../store/cartUiSlice';
import {useSelector} from 'react-redux'
import { Outlet } from 'react-router-dom';



const Layout = () => {
  const toggleCart= useSelector(getCartIsVisible)
  

  
  return <>
    <Header/>
    {toggleCart && <Cart/>}
    <div>
       <Outlet/>
    </div> 
    <Footer/>
  </>
}

export default Layout;

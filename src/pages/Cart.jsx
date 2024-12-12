
import CommonSection from '../UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../Styles/cart.css'
import tdImg from '../assets/images/arm-chair-01.jpg'
import React from 'react'
import { Button, Container } from 'reactstrap'
import { motion } from 'framer-motion'
import { CartActions } from '../redux/cartSlices/cartSlices'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'




const Cart = () => {
  const navigatetoshop = useNavigate();
  const navigatetocheckout = useNavigate();


  const navigateToShop = () => {
    navigatetoshop("/shop");
  };
  const navigateToCheckOut = () => {
    navigatetocheckout("/checkout");
  };
  
  const cartItems=useSelector(state=>state.cart.cartItems)

 
  const totalAmount=useSelector(state=>state.cart.totalAmount)



  return <Helmet title='Cart'>
   <CommonSection title='Shopping Cart'>

   </CommonSection>
   <section className='pad8'>
    <Container>
      <div className='lg-9 flex2 '>
      {
        cartItems.length===0?(<h2>No item added to car</h2>):(
          <table className='table bordered'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            cartItems.map((item,index)=>(
              <Tr item={item} key={index}/>

            ))
          }
          <tr>
            <td colSpan='5' className='fw-bold text-avg'>
             Tổng số tiền: ${totalAmount}
             <div className='flex gap-40'>
             <motion.button onClick={navigateToCheckOut} whileTap={{scale:'1.03'}} className='buy__btn fw-bold' style={{width:"50%"}} >
               Thanh toán ngay
             </motion.button>
             <motion.button onClick={navigateToShop} whileTap={{scale:'1.03'}}  className='buy__btn fw-bold' style={{width:"50%"}} >
               Tiếp tục mua hàng
             </motion.button>
             </div>
            
            </td>
          </tr>
          </tbody>
        </table>
        )
      }
       
      </div>
   
    </Container>
   </section>

  </Helmet>
}
const Tr=({item})=>{

  const dispatch=useDispatch()
  const deleteProduct=()=>{
    dispatch(CartActions.deleteItem(item.id))
  }
  return <tr>
   <td>
    <img src={item.imgUrl}></img>
   </td>
   <td>{item.productName}</td>
    <td>{item.price}</td>
    <td>{item.quantity}</td>
    <td><motion.i onClick={deleteProduct} whileTap={{scale:1.3}} style={{fontSize:"30px"}} class="ri-close-line"></motion.i></td>
    

  </tr>
  
}
export default Cart
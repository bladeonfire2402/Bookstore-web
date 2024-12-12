

import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import { Button, Container, Form, FormGroup} from 'reactstrap'
import '../Styles/Checkout.css'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";


const Checkout = () => {
  const totalQty=useSelector(state=>state.cart.totalQuantity)
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  const navigate=useNavigate()
  const navigateToLogin = () => {
    navigate("/login");
  };


  return <Helmet title='CheckOut'>
    <CommonSection title='Thanh toán'/>
    <section>
      <Container className='pad8'>
      <h2 className='check__out__title text__center mar-bot-15'>
            Thông tin thanh toán
          </h2>
        <div className='Check__Out flex0 gap-40'>
          
          <Form className='personal flex-col gap-10'>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Enter your name'></input>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="email" placeholder='Enter your mail'></input>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="number" placeholder='Phone number'></input>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Enter your location'></input>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Enter your postal code'></input>
            </FormGroup>
          </Form>
          <div className='Check__Out_Price text-white'>
          <div className='Checkout_item'>
            <span className=''>Tổng số sản phẩm:</span>
            <span>{totalQty}</span>
          </div>
          <div className='Checkout_item'>
            <span className=''>Tổng số tiền: </span>
            <span>${totalAmount}</span>
          </div>
          <div className='Checkout_item'>
            <span className=''>Phí Ship: </span>
            <span>Miễn phí</span>
          </div>
          <Button onClick={navigateToLogin}  className='check__out_btn'>
            Đặt hàng
          </Button>

        </div>
        </div>
        
      </Container>
    </section>


  </Helmet>
}

export default Checkout

import logo from '../../assets/images/eco-logo.png';

import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/footer.css'
import { Container,Row,Col} from 'reactstrap'

const Footer = () => {
  return <footer className='footer'>
    <Container className='pad8 '> 
      <div className='footer__info flex'>
       <div className='footer__description flex-col gap-10'>
        <h3 className='footer__name text-white mar-bot-8 text-avg mb-text-avg'>Mr Liem bookstore</h3>
        <p className='descripton text-color-opacity'>Ngài Liêm Bảy Màu</p>
       </div>
       <div className='footer__top_categories flex-col gap-10'>
        <h3 className='footer__name text-white mar-bot-8 fw-500 text-avg mb-text-avg'>Danh mục sách</h3>
        <p className='text-sm mb-text-sm mb-text-sm mb-text-sm text-color-opacity'>Văn học</p>
        <p className='text-sm mb-text-sm text-color-opacity'>Modern Sofa</p>
        <p className='text-sm mb-text-sm text-color-opacity'>Arm Chairs</p>
        <p className='text-sm mb-text-sm text-color-opacity'>Smart Watches</p>
       </div>
       <div className='footer__useful__link flex-col gap-10'>
        <h3 className='footer__name text-white mar-bot-8  fw-500 text-avg mb-text-avg'>Useful Links</h3>
        <p className='text-sm mb-text-sm text-color-opacity'>Sản phẩm</p>
        <p className='text-sm mb-text-sm text-color-opacity'>Giỏ hàng</p>
        <p className='text-sm mb-text-sm text-color-opacity' >Đăng nhập</p>
        <p className='text-sm mb-text-sm text-color-opacity'>Bảo mật</p>
       </div>
       <div className='footer__contact flex-col gap-10'>
       <h3 className='footer__name text-white mar-bot-8  fw-500 text-avg mb-text-avg'>Thông tin liên hệ</h3>
        <div className='flex-no gap-10 '><i class="text-color-opacity mb-text-sm ri-map-pin-line"></i><p className='text-color-opacity mb-text-sm'>66/1, Nguyen Tuyen, Binh Trung Tay</p></div>
        <div className='flex-no gap-10'><i class="text-color-opacity mb-text-sm  ri-phone-line"></i><p className='text-color-opacity mb-text-sm '>+0963674165</p></div>
        <div className='flex-no gap-10'><i class="text-color-opacity mb-text-sm  ri-mail-line"></i><p className='text-color-opacity mb-text-sm '>liemp966@gmail.com</p></div>
        
       </div>

      </div>
      <div className='footer__copyright text__center mar-top-15'>
       <h3 className='text-white fw-500 text-sm mb-text-sm'> Copyright 2024 developed by Dinh Liem.All rights reserved</h3>


      </div>


     
      
      
    </Container>

  </footer>
}

export default Footer
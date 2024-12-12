


import React from 'react'
import productImg from '../../src/assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion'
import '../Styles/Product-card.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CartActions } from '../redux/cartSlices/cartSlices'
import { useMemo } from "react";
import { ToastContainer, toast } from 'react-toastify';



const ProductCard = ({item}) => {
  const dispatch=useDispatch()
  const addToCart=()=>{
    dispatch(CartActions.addItem({
      id:item.id,
      productName:item.productName,
      price:item.price,
      imgUrl:item.imgUrl,
    }))
    toast.success("Đã thêm sản phẩm vào giỏ hàng")
  }
  



  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  

  return (
    <div className='product__item flex1'>
        <div className='product__img'>
            <img className='img' src={item.imgUrl} alt=''></img>
        </div>
        <div className='p-2 product__info'>
         <h3 className='product__name'><Link to={`/shop/${item.id}`}>{truncateText(item.productName, 13)}</Link></h3>
         <span className='text__center d-block mar-8'>{item.category}</span>
        </div>
        <div className='product__card-bottom d-flex align-item-center justify-content-between mar-8'>
            <span className='price'>${item.price}</span>
            <motion.span  onClick={addToCart} whileTap={{scale:"1.2"}}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
  )
}

export default ProductCard
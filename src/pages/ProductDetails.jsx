

import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import { Container } from 'reactstrap'
import { motion } from 'framer-motion'
import '../Styles/Product-details.css'
import { useDispatch } from 'react-redux'
import { CartActions } from '../redux/cartSlices/cartSlices'
import { toast } from 'react-toastify'




const ProductDetails = () => {
  const dispatch=useDispatch()
  const addToCart=()=>{
    dispatch(CartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price
    }));
    toast.success('Đã thêm sản phẩm vào giỏ hàng')
  };

  const {id}=useParams()
  const product=products.find((item)=>item.id===id);

  const {imgUrl,productName,price,avgRating,review,description, shortDesc}=product


  return<Helmet title={productName}>
   <CommonSection title={productName}>
   
   </CommonSection>
   <section>
    <Container className='pad8 flex0 gap-40'>
     <div className='product__details__img'>
      <img src={imgUrl}></img>
     </div>

     <div className='product__details flex-col gap-10 '>
      <h1>{productName}</h1>
      <div className='star__rate flex0 gap-10'>
        <span className='start'>
         <i class="ri-star-fill"></i>
        </span>
        <span className='start'>
         <i class="ri-star-fill"></i>
        </span>
        <span className='start'>
         <i class="ri-star-fill"></i>
        </span>
        <span className='start'>
         <i class="ri-star-fill"></i>
        </span>
        <span className='start'>
         <i class="ri-star-fill"></i>
        </span>
        <p style={{marginLeft:'20px'}}>({avgRating} ratings)</p>
      </div>
     
      <span className='price'>$ {price}</span>
      <p>{shortDesc}</p>
      <motion.button onClick={addToCart} whileTap={{scale:'1.05'}} className='mar-top-15 buy__button button'>
       Add to Cart
     </motion.button>
     </div>
     
    </Container>
   </section>

  </Helmet>
}

export default ProductDetails
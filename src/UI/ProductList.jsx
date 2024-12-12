

import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div className='pad4 flex2 gap ipad-justify-center gap-40 flex-wrap'>
    {
      data?.map((item,index)=>(
        <ProductCard item={item} key={index}/>
      ))
    }
       
    </div>
  )
}

export default ProductList
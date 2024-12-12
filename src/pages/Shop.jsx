


import React,{useState,} from 'react'
import CommonSection from '../UI/CommonSection'
import Helmet from '../components/Helmet/Helmet';
import { Container } from 'reactstrap';
import '../Styles/Shop.css';
import products from '../assets/data/products'
import ProductList from '../UI/ProductList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handlerFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'Tiểu thuyết') {
      const filteredProducts = products.filter(item => item.category === filterValue);
      setProductsData(filteredProducts);
    }
    if (filterValue === 'mobile') {
      const filteredProducts = products.filter(item => item.category === filterValue);
      setProductsData(filteredProducts);
    }
    if (filterValue === 'Thơ') {
      const filteredProducts = products.filter(item => item.category === filterValue);
      setProductsData(filteredProducts);
    }
    if (filterValue === 'Truyện tranh') {
      const filteredProducts = products.filter(item => item.category === filterValue);
      setProductsData(filteredProducts);
    }
    if (filterValue === 'Tạp chí') {
      const filteredProducts = products.filter(item => item.category === filterValue);
      setProductsData(filteredProducts);
    }
    
  };

  
  const handleSearch=(e)=>{
    const searchTerm=e.target.value
    const searchedProducts=products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }


  return(
    <Helmet title="Shop">
      <CommonSection title="Product"></CommonSection>
      <section>
        <Container className='flex pad8 gap-10'>
         <div className='filter__func flex2 gap-10'>
          <div className='filter__widget'>
            <select onChange={handlerFilter}>
              <option>Lọc theo danh mục</option>
              <option value="Tiểu thuyết">Tiểu thuyết</option>
              <option value="Thơ">Thơ</option>
              <option value="Truyện tranh">Truyện tranh</option>
              <option value="Tạp chí">Tạp chí</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>
          <div className='filter__widget'>
            <select>
              <option>Sord By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
         </div>
         <div>
          <div className='search__box'>
            <input onChange={handleSearch} type='text' placeholder='Search...' ></input>
            <span><i className='' class="text-white ri-search-line"></i></span>
          </div>
         </div>

        </Container>
      </section>
      <section>
      <Container>
          {productsData.length === 0 ? <h1 className='text__center'>No products are found !</h1> : <ProductList data={productsData} />}
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
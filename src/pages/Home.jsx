import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row } from 'reactstrap';
import heroImg from '../assets/images/haha.png';
import '../Styles/Home.css';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../UI/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../UI/Clock';
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSaleProducts, setBestSalProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts,setPopularProducts]=useState([])
  const NavLink=[
    {
      path:'shop',
      display:'Shop'
    },

  ]

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category 
    === 'Tiểu thuyết');
    const filteredBestSaleProducts = products.filter(
      (item) => item.category 
    === 'Thơ');
    const filteredMobileProducts = products.filter(
      (item) => item.category 
    === 'Truyện tranh');
    const filteredWirelessProducts = products.filter(
      (item) => item.category 
    === 'Tạp chí');
    const filteredPopularProducts = products.filter(
      (item) => item.category 
    === 'watch');
    



    setTrendingProducts(filteredTrendingProducts);
    setBestSalProducts(filteredBestSaleProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  const year = new Date().getFullYear();

  return (
    <Helmet title={'Home'}>
      {/*Banner */}
      <section className="hero_section">
        <Container className="Homemain pad8">
          <div className="half">
            <div className="hero__content">
              <p className="hero__subtiles">Tưng bừng khai trương {year} !</p>
              <h2 >Đọc sách cho ta kiến thức và sự hiểu biết</h2>
              <p>
              Hãy đến và khám phá thế giới tri thức rộng lớn cùng Mr. Liem Bookstore ngay hôm nay!
              </p>
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                <Link to={'/shop'}>Xem ngay</Link>
              </motion.button>
            </div>
          </div>
          <div className="half">
            <div className="hero__img">
              <img src={heroImg} alt="plant" />
            </div>
          </div>
        </Container>
      </section>
      {/*services*/}
      <Services />
      {/*trending product */}
      <section className="trending__products">
        <Container>
          <div className="text__center">
            <h2 className="section__title">Xu hướng</h2>
          </div>
          <ProductList data={trendingProducts} />
        </Container>
      </section>
      {/*best__sales */}
      <section className='best__sales'>
        <Container>
         <div className='text__center'>
           <h2 className='section__title'>Sách bán chạy</h2>
         </div>
         <ProductList data={bestSaleProducts}/>

        </Container>
      </section>
      {/**section timer */}
      <section className='timmer__count'>
        <Container className='flex pad8'>
          <div className='text-white'>
          <h2 className='fw-500 mar-bot-15'>Limited Offers</h2>
          <h3 className='fw-500 mar-bot-15'>Quanlity Armchairs</h3>
            <Clock/>
          </div>
          <div className='counter__img'>
            <img src={counterImg}></img>
          </div>
        </Container>
      </section>
      {/*New arrivals*/}
      <section>
        <Container className='new__arrivals'>
         <div className='text__center'>
           <h2 className='section__title'>Sách mới</h2>
           <ProductList data={mobileProducts}/>
           


         </div>

        </Container>
      </section>
      {/*Popular*/}
      <section>
        <Container className=' popular__catergory'>
         <div className='text__center'>
           <h2 className='section__title mar-bot-15'>Sách phổ biến</h2>
           <ProductList data={wirelessProducts}/>
         </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

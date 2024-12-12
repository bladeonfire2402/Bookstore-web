import React, { useRef, useEffect } from 'react';
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import '../Header/header.css';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';

const nav__link = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
];

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();
  


  const navigateToCart = () => {
    navigate("/cart");
  };
  const navigatetosignup=()=>{
    navigate("/Signup")
  }
  const navigateToLogin=()=>{
    navigate("/login")
  }



  const menuToggle = () => {
    menuRef.current.classList.toggle('active__menu');
  };

  return (
    <header className="sticky__header" ref={headerRef}>
      <Container className='mid'>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1 className='haha'>MrLiem bookstore</h1>
                <p className='haha'>Since 1995</p>
              </div>
            </div>
            <div className="navigation" ref={menuRef}>
              <ul className="menu">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line" style={{ fontSize: '20px' }}></i>
                <span className='badge'><div style={{ textAlign: 'center' }}>1</div></span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line" style={{ fontSize: '20px' }}></i>
                <span className='badge'><div style={{ textAlign: 'center' }}>{totalQuantity}</div></span>
              </span>
              <div className='profile'>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="User Icon" />
              </span>
             
              </div>
          
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line" style={{ fontSize: '20px' }}></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

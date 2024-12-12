import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'reactstrap';
import '../Styles/Service.css';
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className='services'>
      <Container className='center service-container' >
        {
          serviceData.map((item, index) => (
            <div className='service__item' style={{ background: `${item.bg}` }} key={index}>
              <span><i className={item.icon}></i></span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))
        }
      </Container>
    </section>
  );
}

export default Services;

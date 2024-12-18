

import React from 'react'
import { Container } from 'reactstrap'
import '../Styles/CommonSection.css'

const CommonSection = ({title}) => {
  return <section className='common__section'>
    <Container>
        <h1>
            {title}
        </h1>
    </Container>
  </section>
}

export default CommonSection
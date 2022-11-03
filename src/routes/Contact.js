import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2.js';
import Form from '../components/Form.js';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." 
                text="Laissez moi un message "
      />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
import React from 'react';
import Navbar from '../Navbar/Navbar';
import We_Need_Marketing from '../We_Need_Marketing/We_Need_Marketing';
import Digital_Mastery from '../Digital_Mastery/Digital_Mastery';
import Our_Services from '../Our_Services/Our_Services';
import Digital_Landscape from '../Digital_Landscape/Digital_Landscape';
import Peace_Of_Mind from '../Peace_of_Mind/Peace_Of_Mind';
import Form from '../form/Form';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';
import './Home.css'; 
import Testimonials_2 from '../Testimonials/Testimonials';
import Testimonials from '../Testimonials/Testimonials';
import Conversions2 from '../Conversions/Conversions2';
import Conversions1 from '../Conversions/Conversions1';



const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <We_Need_Marketing />
        <Digital_Mastery/>
        <Our_Services />
        <Digital_Landscape />
        <Conversions1 />
        <Conversions2 />
        <Peace_Of_Mind />
        <Testimonials/>
        <Faq />
        <Form />
        <Footer/>
      </div>
      
    </>
  );
};

export default Home;

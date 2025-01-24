import React from 'react';
import Hero from '../components/sections/Hero';
import Courses from '../components/sections/Courses';
import SalaryCalculator from '../components/sections/SalaryCalculator';
import WhyUs from './WhyUs';
import Blog from './Blog';
import SocialResponsibility from '../components/sections/SocialResponsibility';

const Home = () => {
  return (
    <div className=''>
      <Hero />  
      <Courses />
      <WhyUs/>
      <SalaryCalculator />
      <Blog/>
    <SocialResponsibility/>
    

    </div>
  );
};

export default Home;

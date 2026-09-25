import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero';
import Service from './component/Service';
import Banner from './component/Banner';
import Blog from './component/Blog';
import Partners from './component/Partners';
import Footer from './component/Footer';
import {motion} from 'motion/react'
const App = () => {
  return (
    <div  
    className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light duration-200">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <Blog />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;

// App.jsx

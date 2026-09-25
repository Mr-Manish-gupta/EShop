import React, { useState } from 'react';
import { SecondHeroData } from './Hero';
import {motion, useScroll} from "motion/react";

export const SellingData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80",
    title: "Smart Watch Active",
    subtitle: "Best Seller",
    price: "$49.99",
    category: "Smartwatches",
    offer: "20% Off"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    title: "Luxury Rose Gold Watch",
    subtitle: "Premium Choice",
    price: "$129.99",
    category: "Luxury",
    offer: "Flat $15 Off"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    title: "Minimalist Leather Watch",
    subtitle: "Trending Now",
    price: "$79.99",
    category: "Classic",
    offer: "Free Shipping"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&auto=format&fit=crop&q=80",
    title: "Sports Waterproof Watch",
    subtitle: "New Arrival",
    price: "$59.99",
    category: "Sports",
    offer: "Buy 1 Get 1 50% Off"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&auto=format&fit=crop&q=80",
    title: "Fitness Tracker Band",
    subtitle: "Best Value",
    price: "$29.99",
    category: "Smartwatches",
    offer: "10% Off"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&auto=format&fit=crop&q=80",
    title: "Hybrid Premium Watch",
    subtitle: "Highly Rated",
    price: "$149.99",
    category: "Smartwatches",
    offer: "Save $20"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=80",
    title: "Classic Silver Chrono",
    subtitle: "Premium Design",
    price: "$199.99",
    category: "Luxury",
    offer: "Flat 10% Off"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&auto=format&fit=crop&q=80",
    title: "Rugged Tactical Watch",
    subtitle: "Heavy Duty",
    price: "$89.99",
    category: "Sports",
    offer: "Free Shipping"
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    title: "Minimalist Gold Edition",
    subtitle: "Modern Look",
    price: "$69.99",
    category: "Classic",
    offer: "15% Off"
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80",
    title: "Retro Mechanical Watch",
    subtitle: "Vintage Edition",
    price: "$249.99",
    category: "Luxury",
    offer: "Limited Edition"
  }
];


const Banner = () => {
    const {scrollYProgress} = useScroll();
    const featuredItem = SecondHeroData.find((item) => item.id === 1);
  const relatedProducts = SecondHeroData.filter(
    (item) => item.category === featuredItem.category && item.id !== featuredItem.id
  );
  return (
    <>
      {/* Fixed top scroll progress bar */}
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-pink-600 origin-left z-[9999]" />
      
      <div id="banner" className='container md:mx-auto md:py-12 md:px-4 mx-auto py-6 px-2 '>
        <motion.div  initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    className="rounded-3xl text-black grid grid-cols-1  md:grid-cols-2 items-center p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-12 bg-gradient-to-r from-gray-400 to-gray-700 dark:from-gray-500 dark:to-gray-950">
            <div className="absolute -top-10 -left-10 w-40 h-40  bg-white/10  rounded-full z-10 ">            </div>


                {/* left side penal */}
                     <div className="flex flex-col gap-4 text-center md:text-left z-10">
                        <span className="bg-accent text-dark font-extrabold text-xs px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                            {featuredItem.offer}
                        </span>
                        <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
                            Featured {featuredItem.category}
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight dark:text-white dark:hover:text-pink-500 hover:text-pink-500">
                            {featuredItem.title}
                        </h1>
                        <p className="text-lg text-white hover:text-green-500 font-bold max-w-md">
                            Experience next-generation tracking, sleep analysis, and premium metallic build quality. Grab yours today!
                        </p>
                        <div className="mt-4">
                            <motion.button whileHover={{ scale:1.1}} whileTap={{ scale:0.95}} onHoverStart={() => console.log('hover started!')}  className="bg-white text-black mb-2  hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 font-bold md:px-8 md:py-3 px-6 py-2 rounded-full cursor-pointer shadow-lg shadow-3xl hover:shadow-pink-400 dark:bg-black dark:text-white dark:hover:text-black" >
                            Shop Now
                            </motion.button>
                        </div>
                    </div>
                {/* right side penal */}
                    <motion.div 
                      initial={{ 
                        x: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 300, 
                        opacity: 0 
                      }}
                      whileInView={{
                          x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 100,
                          opacity: 1
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                      className="flex flex-col gap-4 text-center md:text-right z-10 mx-auto md:ml-auto"
                    >
                        <img src={featuredItem.img} alt="" className="rounded-3xl bg-transparent h-[250px] md:h-[400px] w-full max-w-[320px] sm:max-w-[350px] md:max-w-[400px] object-cover drop-shadow-md hover:scale-105 duration-300" />
                    </motion.div>
        </motion.div>



        {/* Best Seller section  */}
        <div className="container mx-auto px-4 md:px-8 mt-12 overflow-x-hidden">
            <div className="dark:bg-transparent pt-2 pb-2 flex flex-col items-center justify-center mb-6 bg-transparent">
                <h1 className="text-black dark:text-white text-2xl font-bold font-serif">
                    Best Selling Items 
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Limited offer of best seller watches
                </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {SellingData.map((item) => (
                    <div key={item.id} className="relative bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-3 sm:p-4 rounded-2xl hover:scale-105 duration-300 transition-all shadow-md flex flex-col justify-between w-full h-full">
                        {/* Offer badge */}
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                            {item.offer}
                        </span>
                        
                        <div className="relative">
                            <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover rounded-xl mb-3" />
                        </div>
                        
                        <div>
                            <h3 className="text-pink-600 text-[10px] font-bold uppercase tracking-wider">{item.subtitle}</h3>
                            <h2 className="text-slate-800 dark:text-white text-sm font-bold mt-1 line-clamp-1">{item.title}</h2>
                            <p className="text-[11px] text-gray-400 mt-0.5">{item.category}</p>
                            <p className="text-primary dark:text-accent font-extrabold text-sm mt-2">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

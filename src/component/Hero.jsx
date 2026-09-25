import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ChevronLeft, ChevronRight} from 'lucide-react'
import { useRef, useState } from "react";
const SliderComponent = Slider.default || Slider;
import {motion} from 'motion/react';
const HeroData = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Upto 50% Off", 
    title: "Wireless Headphones", 
    category: "Electronics" 
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80", 
    subtitle: "New Arrival", 
    title: "Smart Watch Pro", 
    category: "Gadgets" 
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Winter Sale", 
    title: "Running Shoes", 
    category: "Fashion" 
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1627124112126-e26e55c3c020?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Best Sellers", 
    title: "Leather Wallet", 
    category: "Accessories" 
  }
];

export const SecondHeroData = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80", 
    subtitle: "New Release", 
    title: "Premium Smartwatch", 
    category: "Gadgets",
    offer: "30% Off"
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Mechanical Keyboard", 
    title: "RGB Gaming Keyboard", 
    category: "Gaming",
    offer: "15% Off"
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Summer Vibes", 
    title: "Retro Sunglasses", 
    category: "Fashion",
    offer: "Flat 20% Off"
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Explore More", 
    title: "Travel Backpack", 
    category: "Accessories",
    offer: "Buy 1 Get 1 Free"
  },
  { 
    id: 5, 
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Capture Moments", 
    title: "DSLR", 
    category: "Photography",
    offer: "10% Off"
  },
  { 
    id: 6, 
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Morning Coffee", 
    title: "Ceramic Coffee Mug", 
    category: "Lifestyle",
    offer: "25% Off"
  },
  { 
    id: 7, 
    img: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Level Up", 
    title: "Wireless Controller", 
    category: "Gaming",
    offer: "12% Off"
  },
  { 
    id: 8, 
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Scent of Luxury", 
    title: "Designer Perfume", 
    category: "Beauty",
    offer: "Hot Deal: 40% Off"
  },
  { 
    id: 9, 
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Bright Ideas", 
    title: "Minimalist Desk Lamp", 
    category: "Home Decor",
    offer: "Save $15"
  },
  { 
    id: 10, 
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80", 
    subtitle: "Stay Connected", 
    title: "10-inch Digital Tablet", 
    category: "Electronics",
    offer: "Free Shipping"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  appendDots: (dots) => (
    <div style={{ bottom: "25px" }}>
      <ul className="flex justify-center gap-2 m-0 p-0"> {dots} </ul>
    </div>
  ),
};

const Hero = () => {
  const sliderRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories list dynamically
  const categories = ["All", ...new Set(SecondHeroData.map(item => item.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? SecondHeroData
    : SecondHeroData.filter(item => item.category === selectedCategory);

  return (
    <div id="hero" className="container mx-auto px-4 py-8">
      {/* Outer wrapper with clean background color */}
      <div className="overflow-hidden rounded-3xl bg-gray-100 dark:bg-slate-900 bg-gradient-to-r from-gray-400/50 dark:from-gray-800 to-gray-100 dark:to-gray-950 border border-gray-200 dark:border-slate-800 transition-colors duration-300 min-h-[550px] sm:min-h-[600px] flex items-center relative group">
        <div className="w-full">
          <SliderComponent ref={sliderRef} {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                {/* Grid layout*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 sm:p-12 md:p-16">
                  
                  {/* Text Section */}
                  <div className="flex flex-col justify-center gap-4 text-center md:text-left order-2 md:order-1">
                    <h3 className="text-primary dark:text-accent font-bold text-sm sm:text-base uppercase tracking-wider">
                      {data.subtitle}
                    </h3>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800 dark:text-white">
                      {data.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest">
                      Category: {data.category}
                    </p>
                    <div className="mt-4">
                      <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md active:scale-95 cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="order-1 md:order-2 flex justify-center items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary/10 dark:bg-accent/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
                      <motion.img initial ={{scale: 0}} animate={{scale : 1}} transition ={{ duration : 1}}
                        src={data.img}
                        alt={data.title}
                        className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] object-cover rounded-3xl mx-auto shadow-xl relative z-10 transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </SliderComponent>

          

            {/* Left Arrow Icon Button */}
            <button 
              onClick={() => sliderRef?.current?.slickPrev()} 
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 p-3 rounded-full text-gray-800 dark:text-white hover:bg-pink-600 hover:text-white transition duration-300 shadow-lg z-20 opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow Icon Button */}
            <button 
              onClick={() => sliderRef?.current?.slickNext()} 
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 p-3 rounded-full text-gray-800 dark:text-white hover:bg-pink-600 hover:text-white transition duration-300 shadow-lg z-20 opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

        </div>
      </div>
      {/* Category Filter Tabs */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-6">
          Explore Our Products
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Slider ke niche ye grid list add karein for auto-arranging layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredProducts.map((item) => (
          <div key={item.id} className="relative bg-white dark:bg-transparent p-3 sm:p-4 shadow border border-gray-300 dark:border-gray-600 rounded-2xl transition-all duration-300 w-full h-full flex flex-col justify-between">
            <div>
              {/* Offer Badge */}
              <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md z-10">
                {item.offer}
              </div>
              <img src={item.img} alt={item.title} className="w-full h-36 sm:h-48 object-cover rounded-xl border border-gray-300 mb-3"/>
              <h3 className="text-pink-700 text-xs sm:text-sm font-bold mt-2">{item.subtitle}</h3>
              <h2 className="text-gray-500 text-sm sm:text-lg font-bold font-serif mt-1 dark:text-white line-clamp-2">{item.title}</h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-gray-500 mt-2">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Hero;
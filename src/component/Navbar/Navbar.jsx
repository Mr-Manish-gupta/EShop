import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react';
import {Search, ShoppingCart , ChevronDown, MenuIcon , X} from 'lucide-react'

const MenuLinks = [
  { id: 1, name: "Home", link: "#hero" },
  { id: 2, name: "Shop", link: "#banner" },
  { id: 3, name: "About", link: "#about" },
  { id: 4, name: "Blogs", link: "#blogs" }
]

const DropDownList = [
  {
    id:1,
    name:"Tranding",
    link: "/#",
  },
  {
    id:2,
    name:"Best Selling",
    link: "/#",
  },
  {
    id:3,
    name:"Electronic",
    link: "/#",
  },
  {
    id:4,
    name:"Fashion",
    link: "/#",
  },
  {
    id:5,
    name:"Beauty",
    link: "/#",
  },
  {
    id:6,
    name:"Toys",
    link: "/#",
  },
]

const Navbar = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  const [isMobileMenuIsOepn , setMobileIsMenuOpen ] = useState(false);
  

  useEffect ((e) => {
    let timer
    if(isMobileMenuIsOepn) {
      timer = setTimeout (() => setMobileIsMenuOpen(false) , 30000);
    }
    return () => clearTimeout(timer);
  },[isMobileMenuIsOepn]);



  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  // Sync theme with DOM and localStorage
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect (() => {
    let timer;

    if(isSearchOpen){
      timer = setTimeout(() => {
        setIsSearchOpen(false);
        setSearchQuery("");
      },30000);
    }
    return () => clearTimeout(timer);
  }, [isSearchOpen , searchQuery]);

  return (
    <div className="bg-white text-black dark:bg-dark dark:text-white duration-200 sticky top-0 z-50  border-b border-gray-200 dark:border-gray-800  ">
      <div className="py-3.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and links section */}
          <div className="flex items-center gap-4 flex-1">
            <a href="#" className="text-pink-600 font-extrabold font-mono tracking-wider text-2xl uppercase sm:text-3xl">
              Eshop
            </a>

            {/* menu items */}
            <div className="hidden md:block flex-1">
              <ul className="flex items-center  pl-4 gap-8 ">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <motion.a  
                     whileHover={{scale: 1.05}} whileTap={{scale:0.95}} transition={{duration : 1}}
                    href={data.link} className="flex gap-8 ml-auto font-bold  text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-300 transition-colors duration-200 hover:scale-105 ">
                      {data.name}
                    </motion.a>
                  </li>
                ))}
                <li className='relative cursor-pointer group'>
                  <a href="#"
                  className='flex items-center text-gray-800 gap-[2px] font-bold dark:text-white dark:hover:text-white '>
                    Quick Links
                    <span
                    className="group-hover:rotate-180 duration-200 ">
                      <ChevronDown  size= {20} />
                    </span>
                  </a>
                  <div className='absolute z-[9999] hidden group-hover:block w-[120px] rounded-md bg-white dark:bg-gray-900 dark:hover:bg-gray-900 shadow-md'>
                    <ul className='space-y-1'>
                      {
                        DropDownList.map((data, index) => (
                            <li key={data.id}>
                              <a href={data.link} className='flex  pl-2  rounded-sm tracking-tighter font-medium  text-black dark:bg-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 '>{data.name}</a>

                            </li>
                        ))
                      }
                    </ul>
                  </div>
                  
                </li>
              </ul>
            </div>

            {/* search bar right section */}
            <div
            className="relative hidden md:flex items-center gap-6">
              
                <div className='relative md:visible md:flex items-center'>
                    <input type="text"
                      placeholder='Search Items....' 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`bg-transparent border dark:hover:border-gray-600 border-gray-300 rounded-full text-gray-800 dark:text-gray-200 focus:outline-none transition-all duration-300 ease-in-out ${
                        isSearchOpen ? 'w-[240px] lg:w-[300px] pl-10 pr-4 py-1.5 opacity-100' : 'w-0 px-0 py-0 opacity-0 border-transparent pointer-events-none'
                      }`}
                    />
                  
                  <button 
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    if (isSearchOpen) setSearchQuery("");
                  }}
                  className={`p-2 hover:bg-gray-300 rounded-full text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 transition duration-300 cursor-pointer ${
                        isSearchOpen ? 'absolute left-1 z-10 bg-transparent hover:bg-transparent dark:hover:bg-transparent' : 'relative'
                      }`}>                   
                       <Search size={18} />
                  </button>
                </div>
                  



                  {/* shoping mood */}
                  <motion.button  whileHover={{scale:1.15}} whileTap={{scale: 0.9}} className='relative p-3 md:visible mr-4'  
                  onClick={() => setIsLoginOpen(true)}>
                    <ShoppingCart size={20} />
                    <div className="w-4 h-4  bg-red-600 rounded-full text-white absolute top-0 right-0 flex items-center justify-center text-sm">8</div>
                    
                   </motion.button>

                   {isLoginOpen && (
                          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99999] transition-all duration-300">
                            
                            {/* Modal Box: Pop-up container */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl w-full max-w-[400px] shadow-2xl relative mx-4">
                              
                              {/* Close Button: Modal band karne ke liye */}
                              <button 
                                onClick={() => setIsLoginOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white font-extrabold text-xl cursor-pointer"
                              >
                                ✕
                              </button>
                             


                              <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6">
                                Welcome Back
                              </h2>
                             


                              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                                <input 
                                  type="email" 
                                  placeholder="Email Address" 
                                  className="w-full px-4 py-2 border dark:border-slate-800 rounded-xl dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                                />


                                <input 
                                  type="password" 
                                  placeholder="Password" 
                                  className="w-full px-4 py-2 border dark:border-slate-800 rounded-xl dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                                />
                                <button className="w-full py-2.5 bg-pink-600 text-white rounded-xl font-bold mt-2 hover:bg-pink-700 transition-colors cursor-pointer">
                                  Sign In
                                </button>
                              </form>
                            </div>
                          </div>
                        )}
                  
            </div>
          </div>

          {/* Navbar right section with Toggle Button */}
          <motion.div layout className="flex items-center gap-4">
               {/* dark Mode  */}
                  <div
                       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="visible w-12 h-6 rounded-full  bg-gray-300 dark:bg-gray-600 flex items-center transition-colors duration-300 focus:outline-none p-1 cursor-pointer sm:top-4 sm:right-2"
                      aria-label="Toggle Dark Mode"
                    >
                      <motion.div animate={{pathLength: 1}}
                        className={`w-4 h-4 rounded-full bg-white dark:bg-yellow-400 transform transition-transform duration-300  ${
                          theme === "dark" ? "translate-x-6" : "translate-x-0"
                        }`}
                    />
                  </div>


                  {/* Mobile menu button  */}
                  <button 
                  onClick={() => setMobileIsMenuOpen(!isMobileMenuIsOepn)}
                  className='md:hidden sm:visible flex top-4 right-4 dark:text-white font-bold text-black hover:text-slate-600 dark:hover:text-slate-700 hover:font-extrabold rounded-full  cursor-pointer'>
                    {isMobileMenuIsOepn ? <X size={23} /> : <MenuIcon size={24} />}
                  </button>
                  

                  { isMobileMenuIsOepn && (
                    <motion.div  
                     initial ={{opacity : 0, y: -20}}
                     animate={{ opacity : 1 , y : 0}}
                     transition={{ duration: 0.5}}
                    className="absolute top-[68px] right-0 w-[130px] bg-slate-100 dark:bg-slate-900 border-b border-gray-300 dark:border-gray-700 shadow-md md:hidden z-[99999] transition-all duration-300 border-b rounded-2xl">
                      <ul className=' flex flex-col p-4 gap-5 items-center'>
                        {MenuLinks.map((data, index) => (
                          <li key={index}>
                            <a href={data.link}
                            onClick={() => setMobileIsMenuOpen(false)}
                            className='  font-bold text-black dark:text-white hover:text-slate-400 hover:font-bold hover:rounded-2xl dark:hover:text-slate-700 dark:hover:border-rounded-2xl dark:hover:bg-slate-900'>
                              {data.name}
                              </a> </li>
                   ) )}
                      </ul>
                    </motion.div>
                  )}
                 
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

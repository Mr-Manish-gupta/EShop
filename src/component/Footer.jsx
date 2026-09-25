import React from 'react';
import { Instagram, Linkedin, Send, Youtube, MapPin, Phone } from 'lucide-react';

const FooterLink = [
  {  title: "Home", link: "/#" },
  {  title: "Shop", link: "/shop" },
  {  title: "About", link: "/about" },
  {  title: "Blogs", link: "/blogs" }
]
const QuickLinks =[
     {
    name:"Tranding",
    link: "/#",
  },
  {
    name:"Best Selling",
    link: "/#",
  },
  {
    name:"Electronic",
    link: "/#",
  },
  {
    name:"Fashion",
    link: "/#",
  },
  {
    name:"Beauty",
    link: "/#",
  },
  {
    name:"Toys",
    link: "/#",
  },
]
const Footer = () => {
    return (
        <div className="bg-transparent">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto mb-10 mt-10 ">
                <div className='py-8 px-4'>
                    <a href="#" className="text-pink-600 font-extrabold font-mono tracking-wider text-2xl uppercase sm:text-3xl">
                       Eshop
                    </a>
                    <p className='text-sm font-bold text-gray-800 dark:text-slate-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam illo nemo sunt incidunt animi vero veritatis, 
                        similique non.
                    </p>
                    <p className='text-gray-900 dark:text-slate-500 text-sm font-bold mt-4'>
                        Made with ❤️ by the Developer 
                    </p>

                    <a href="https://youtube.com/@web_developers_01?si=8DfcrIGWuzGJeXpz"
                    target='_blank'
                    className='px-4 py-2 flex items-center justify-center gap-2 bg-red-600 border border-red-700 text-sm text-slate-200 font-bold rounded-xl w-fit mt-3 mb-2 hover:scale-105 duration-200 shadow-md hover:shadow-lg hover:shadow-pink-500 transition-all'>
                        <Youtube size={18} />
                        <span>Youtube</span>
                    </a>
                </div>


                <div className="py-8 px-4 mt-2 mb-10">
                        <h1 className='text-lg font-bold mb-2'>Importent Links</h1>
                        <ul>
                            {FooterLink.map(
                                (data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                        className='text-sm text-slate-800 dark:text-slate-300 hover:text-gray-900 dark:hover:text-gray-100 hover:font-bold hover:rounded-2xl dark:hover:bg-slate-700 hover:bg-slate-300 px-[6px] py-[3px] '>
                                            {data.title}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                </div>


                <div className="py-8 px-4 mt-2 mb-10">
                    <h1 className='text-lg font-bold mb-2'>
                        Quick Links
                    </h1>
                    <ul>
                        {QuickLinks.map(
                            (data, index) => (
                                <li key={index}>
                                    <a href={data.link}
                                    className="text-sm text-slate-800 dark:text-slate-300 hover:text-gray-900 dark:hover:text-gray-100 hover:font-bold hover:rounded-2xl dark:hover:bg-slate-700 hover:bg-slate-300 px-[6px] py-[3]">
                                        {data.name}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>


                <div className="py-8 px-4 mt-2 mb-10">
                    <h1 className="text-black dark:text-white text-lg font-bold mb-4 font-serif">Contact Info</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-300">
                            <MapPin size={18} className="text-pink-600 shrink-0" />
                            <span>Indore Madhye Pradesh, India</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-300">
                            <Phone size={18} className="text-pink-600 shrink-0" />
                            <span>+91 1234567890</span>
                        </div>
                    
                        <div className="flex items-center gap-4 mt-4">
                            <a href="#" className='text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-200 hover:scale-110 transform'>
                                <Instagram size={20} />
                            </a>
                            <a href="#" className='text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform'>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className='text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 hover:scale-110 transform'>
                                <Send size={20} />
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            

            </div>
        </div>
    )
}

export default Footer;
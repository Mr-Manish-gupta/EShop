import React from "react";
import { Truck, ShieldCheck, Wallet, Headset, Icon } from "lucide-react";
import {motion} from 'motion/react';
// Service Data with 4 premium e-commerce services
export const ServiceData = [
  {
    id: 1,
    icon: Truck, // React component references directly for easy rendering
    title: "Free Shipping",
    description: "Free shipping on all orders over $99",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Secure Guarantee",
    description: "30 Days Money Back Guarantee",
  },
  {
    id: 3,
    icon: Wallet,
    title: "Safe Payments",
    description: "Secure payments with multiple options",
  },
  {
    id: 4,
    icon: Headset,
    title: "Online Support 24/7",
    description: "Technical support available 24/7",
  },
];

const Service = () => {
  return (
    <div  id="service" className="container  mx-auto px-8 mt-8 py-12">
      <motion.div 
        initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition={{duration : 2}}
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {ServiceData.map((data) => {
            const IconComponent  = data.icon;
            return(
            
            <div key={data.id}
            className="flex flex-col  top- 2 items-center text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-3xl border border-gray-200  hover:scale-105 duration-200 dark:border-gray-500 hover:shadow-sm transition-all hover:shadow-blue-600 duration-300">
                  <div className="w-10 h-10  bg-blue-300 rounded-lg border border-gray-300 flex items-center justify-center top-1/2 dark:bg-gray-300 dark:text-black hover:scale-105 duration-200 ">
                    <IconComponent  size={20} />
                  </div>
                  <div className="text-gray-700 font-bold font-serif md:text-lg text-sm flex items-center mt-1 dark:text-gray-300 ">
                  {data.title}
                  </div>
                  <div className="text-gray-400 font-light md:text-sm text-xs flex items-center mt-1">
                    {data.description}
                  </div>

            </div>
          )})}
        </motion.div>
      </div>
  );
};

export default Service;
import React from 'react';
const BrandsData = [
  {
    id: 1,
    name: "Sony",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg"
  },
  {
    id: 2,
    name: "Nike",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },
  {
    id: 3,
    name: "Apple",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    id: 4,
    name: "Samsung",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
  },
  {
    id: 5,
    name: "Canon",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Canon_logo.svg"
  }
];

const Partners = () => {
  return (
    <div id="about" className="bg-gray-100 dark:bg-slate-900 py-8 transition-colors duration-300 mt-12">
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-8">
          Trusted By Brand Partners
        </h3>

        {/* Brand Logos Flexbar */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 dark:opacity-40">
          {BrandsData.map((brand) => (
            <div 
              key={brand.id} 
              className="w-24 sm:w-28 md:w-32 flex justify-center items-center hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={brand.logoUrl} 
                alt={brand.name} 
                className="max-h-8 md:max-h-10 w-auto object-contain dark:invert filter grayscale" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
import React from 'react';


export const BlogData = [
  {
    id: 1,
    title: "How to choose perfect smartwatch",
    subtitle: "Discover the best smartwatch options that fit your daily routine, tracking features, and style preferences.",
    published: "Jan 25, 2026 by Dilshad",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Best gadgets for your daily routine",
    subtitle: "From wireless noise-canceling headphones to smart speakers, explore the devices that make your life easier.",
    published: "Jan 28, 2026 by Satya",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Top style tips for winter season",
    subtitle: "Stay warm and look sharp. Read our curated fashion guide for matching shoes, jackets, and accessories.",
    published: "Feb 02, 2026 by Admin",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80"
  }
];
const Blog = () => {
    return (
            <div id='blogs'>
                <div className="container mx-auto">
                    {/* header section  */}
                    <div className="text-center p-8">
                        <h1 className="text-2xl text-gray-800 font-serif dark:text-gray-200 flex items-center justify-center font-bold pt-3 pb-2">Recent News</h1>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Explore our blogs</p>
                    </div>


                    {/* Blog section  */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 sm:gap-y-2 gap-8 p-6">
                        {/* Blog Card  */}
                        {
                            BlogData.map((blog) => (
                                    <div key={blog.id} className='border border-slate-300 dark:border-slate-800 shadow hover:shadow-lg transition-shadow overflow-hidden rounded-2xl bg-transparent'>
                                        <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover overflow-hidden hover:scale-110 transition-transform duration-200 "></img>
                                        <div className="p-4">
                                             <p className="text-xs text-gray-400 font-medium mb-1">{blog.published}</p>
                                            <h2 className="text-lg font-bold text-slate-800 dark:text-white line-clamp-1 mb-2">{blog.title}</h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{blog.subtitle}</p>
                                        </div>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Blog;
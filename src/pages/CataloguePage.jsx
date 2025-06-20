// src/pages/CataloguePage.jsx
import React from "react";

const catalogueItems = [
    // 1
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750396539/Screenshot_2025-06-20_at_10.45.06_AM_nx4afi.png",
    link: "https://example.com/1",
    category: "Personal Website",
    title: "Portfolio Website"
  },
  //2
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750401102/Screenshot_2025-06-20_at_11.59.40_AM_byhwys.png",
    // link: "https://greencart-gs.vercel.app/",
    category: "E-commerce",
    title: "Online grocery Store"
  },
  //3
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750401250/Screenshot_2025-06-20_at_12.03.53_PM_iizoyg.png",
    // link: "https://",
    category: "SaaS",
    title: "SaaS Landing Page"
  },
    //4
    {
        image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750401128/Screenshot_2025-06-20_at_12.01.02_PM_hvprir.png",
        // link: "https://",
        category: "SaaS",
        title: "Apointment Booking Site"
    },
    //5
    {
        image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750400902/Screenshot_2025-06-20_at_11.57.25_AM_jg5ui1.png",
        // link: "https://",
        category: "E-commerce ",
        title: "Online Clothing Store"
    }
];

const CataloguePage = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
      <h2 className="text-3xl font-bold underline text-center mb-10">📁 Our Catalogue</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catalogueItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
            <a
            //   href={item.link}
              target="_blank"
              rel="noreferrer"
            //   className="text-blue-600 underline"
            >
              Live Preview :- comming soon
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CataloguePage;
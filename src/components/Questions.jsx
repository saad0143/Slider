import { CircleArrowDown, CircleArrowUp, MoveUpRight } from 'lucide-react';
import React, { useState } from 'react';

const modules = [
  {
    title: 'Module 1: Fundamentals of Business',
    content: 'This section will walk you through a broad overview of Funnels, Traffic, Offers, and How to Get Cold Traffic to Actually Exchange Money for Your Services.',
  },
  {
    title: 'Module 2: Client Acquisition',
    content: 'This section will show you idiot-proof ways of getting clients as fast as possible, what to do when you don’t have case studies, and how to not lose money.',
  },
  {
    title: 'Module 3: Cold Email Lead Generation Agency',
    content: 'This section will show you how to make, fulfill, and get clients results running a Cold Email Lead Generation Agency.',
  },
  {
    title: 'Module 4: Video/Content Agency',
    content: 'This section will show you how to make, fulfill, and get clients results running a Video/Content Agency.',
  },
  {
    title: 'Module 5: Google Ads Agency',
    content: 'This section will show you how to make, fulfill, and get clients results running a Google Ads Agency.',
  },
  {
    title: 'Module 6: Facebook Ads Agency',
    content: 'This section will show you how to make, fulfill, and get clients results running a Facebook Ads Agency.',
  },
  {
    title: 'Module 7: Ecom Email Agency',
    content: 'This section will show you how to make, fulfill, and get clients results running an Ecommerce Email Marketing Agency.',
  },
];


const Questions = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="p-6 w-full flex justify-center">

      <div className="w-7/12  p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mb-8 flex justify-start">What Content is Inside Internet Money?</h1>
        {modules.map((module, index) => (
          <div key={index} className="mb-4 hover:scale-[1.03] transform transition-transform duration-300 ease-in-out">
            <button
              className="w-full text-center py-4 px-8 bg-[#e9e8e8] rounded-[10px] focus:outline-none shadow-sm"
              onClick={() => toggleModule(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{module.title}</span>
                <span>{openModule === index ? <CircleArrowUp /> : <CircleArrowDown />}</span>
              </div>
              <div>
                {openModule === index && module.content && (
                  <div className="p-4 rounded-lg font-medium text-justify mt-2">{module.content}</div>
                )}
              </div>
            </button>

          </div>
        ))}
        <button className='cursor-pointer flex justify-start'>
        <div className='w-auto py-3 px-14 bg-black text-[#b3e9a5] rounded-lg flex items-center 
                justify-center no-underline uppercase'>
          <p className='text-md font-medium'>
            Join Now
          </p>
          <MoveUpRight size={22} className='ml-2' />
        </div>
      </button>
      </div>
      

    </div>
  );
}

export default Questions;

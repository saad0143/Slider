import { CircleArrowDown, CircleArrowUp, MoveUpRight } from 'lucide-react';
import React, { useState } from 'react';
import './Questions.css'; // Assuming you have a CSS file for styling

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
  const [openModule, setOpenModule] = useState(Array(modules.length).fill(false));

  const toggleModule = (index) => {
    const updatedModules = [...openModule];
    updatedModules[index] = !updatedModules[index];
    setOpenModule(updatedModules);
  };

  return (
    <div className="sm:p-6 p-3 w-full">
      <div className='w-full flex sm:justify-center justify-start'>
        <div className="sm:w-7/12 sm:p-6 p-3 rounded-lg">
          <h1 className="sm:text-4xl text-2xl font-semibold mb-8 flex sm:justify-start justify-center">What Content is Inside Internet Money?</h1>
          {modules.map((module, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-center sm:py-4 sm:px-8 p-2 bg-[#e9e8e8] rounded-[10px] focus:outline-none shadow-sm"
                onClick={() => toggleModule(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold sm:text-lg text-md text-left sm:text-center">{module.title}</span>
                  <span>
                    {openModule[index] ? (
                      <CircleArrowUp />
                    ) : (
                      <CircleArrowDown />
                    )}
                  </span>
                </div>
                <div className={`module-content bg-[#e9e8e8] ${openModule[index] ? 'open' : 'closed'}`}>
                  {module.content && (
                    <div className="sm:p-4 p-2 rounded-lg font-medium text-justify sm:mt-2 h-auto">{module.content}</div>
                  )}
                </div>
              </button>
            </div>
          ))}
          <button className='cursor-pointer mt-6'>
            <div className='w-auto py-3 px-14 bg-black text-[#b3e9a5] rounded-lg flex items-center justify-center no-underline uppercase'>
              <p className='text-md font-medium text-white'>
                Join Now
              </p>
              <MoveUpRight size={22} className='ml-2' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;

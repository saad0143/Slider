import { CircleArrowDown, CircleArrowUp } from 'lucide-react';
import React, { useState } from 'react';


const modules = [
    {
        title: 'What does the $35/mo cover?',
        content: 'This section will walk you through a broad overview of Funnels, Traffic, Offers, and How to Get Cold Traffic to Actually Exchange Money for Your Services. It covers access to our core training materials and support resources designed to help you succeed in converting cold traffic into paying clients.'
    },
    {
        title: 'Are there any additional costs I’ll have to pay to get started?',
        content: 'Yes, some services might require that you purchase specific software apps. There will always be least cost alternatives provided to minimize expenses. However, you should plan to need roughly in the range of $100/mo for other software & services to work as efficiently as possible.'
    },
    {
        title: 'Can I cancel my subscription at any time?',
        content: 'Yes, you can cancel your subscription at any time without any penalties.'
    },
    {
        title: 'Is there a money back guarantee?',
        content: 'Yes, our money back guarantee allows you to request a refund if you watch at least half of the videos and find the content unsatisfactory.'
    },
    {
        title: 'What makes the program different than other programs?',
        content: 'Our program stands out due to its affordability at $35/mo compared to higher-priced alternatives. We focus on delivering practical strategies and tools without the hefty price tag.'
    },
    {
        title: 'Do I need to have an LLC or business to start?',
        content: 'No, you do not need to have an LLC or an established business to begin. You can create an LLC later on, especially after signing your first client, though we recommend seeking legal advice for the specifics.'
    }
];

const Faq = () => {
    const [openModule, setOpenModule] = useState(null);

    const toggleModule = (index) => {
        setOpenModule(openModule === index ? null : index);
    };

    return (
        <div className="p-6 w-full">


            <div className='w-full flex justify-center'>
                <div className="w-7/12  p-6 rounded-lg">
                    <h1 className="text-4xl font-semibold mb-8 flex justify-start">Frequently Asked Questions</h1>
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

                </div>
            </div>

            <div className='w-full flex justify-center mb-5'>
                <div className='w-8/12 bg-black h-auto py-10 rounded-xl flex items-center justify-center'>
                    <div className='text-white p-2'>
                        <h1 className='text-4xl font-semibold ` '>
                            Join Internet Money Now!
                        </h1>
                        <h1 className='text-xl text-medium mt-3'>
                            Let's help you make your first $1,000 online
                        </h1>
                        <button className='cursor-pointer mt-6'>
                            <div className='w-auto py-3 px-16  bg-[#b3e9a5] rounded-lg flex items-center 
                                justify-center no-underline uppercase'>
                                <p className='text-md font-bold text-black'>
                                    GET INSTANT ACCESS FOR $35/MO
                                </p>

                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;

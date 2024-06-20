import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import arrow from '../assets/arrow.png';

const steps = [
  { title: "Learn a Marketable Skill", description: "Enough so that you feel confident delivering results for clients" },
  { title: "Create an Offer", description: "Make an offer that a prospect feels stupid saying no to" },
  { title: "Get in Front of Clients", description: "Learn how to generate leads, what to say, and how to do it" },
  { title: "Sign Your First Client", description: "Collect payment, start service delivery, and start getting results" },
  { title: "Create Case Studies", description: "Document the results you get for clients, and post it online to attract more clients" },
  { title: "Flywheel Scale", description: "Repeat steps 3 through 5 forever & to infinity" }
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(-1); // Start with -1 to keep all steps inactive initially
  const [arrowHeight, setArrowHeight] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;
      const stepsElements = timelineRef.current.querySelectorAll('.timeline-step');
      console.log(scrollPosition);
      let foundActiveStep = false;

      stepsElements.forEach((step, index) => {
        const offsetTop = step.getBoundingClientRect().top + window.scrollY;
        const offsetHeight = step.offsetHeight;

        if (!foundActiveStep && scrollPosition - 80 > offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveStep(index);
          foundActiveStep = true;
          
        }

        if (scrollPosition > 300 && scrollPosition < 350 ) {
          setActiveStep(-1); 
        }

        if (index <= activeStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });

      const firstStepOffsetTop = stepsElements[0]?.getBoundingClientRect().top + window.scrollY || 0;
      const lastStepOffsetBottom = stepsElements[stepsElements.length - 1]?.getBoundingClientRect().top + window.scrollY + stepsElements[stepsElements.length - 1]?.offsetHeight || 0;
      const maxArrowHeight = lastStepOffsetBottom - firstStepOffsetTop;

      const scrollPercentage = (scrollPosition - firstStepOffsetTop) / maxArrowHeight;
      let newArrowHeight = scrollPercentage * maxArrowHeight;

      if (newArrowHeight > maxArrowHeight) {
        newArrowHeight = maxArrowHeight;
      }

      setArrowHeight(newArrowHeight > 0 ? newArrowHeight : 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeStep]);


  return (
    <div ref={timelineRef} className="flex flex-col items-center relative px-5 sm:pb-5">
      {/* Arrow Line */}
      <div className="arrow-container absolute sm:top-0 left-8 sm:left-[50%] transform sm:-translate-x-1/2 z-10 mb-10">
        <div className="w-[3px] bg-gray-500 sm:h-[1180px] h-[1520px] relative"></div>
      </div>
      {/* Dynamic Arrow */}
      <div className="arrow-container absolute sm:top-0 left-8 sm:left-[50%] transform sm:-translate-x-1/2 z-10 mb-10">
        <div className="arrow" style={{ height: `${arrowHeight}px` }}></div>
      </div>

      {/* Arrows for Small Screens */}
      <div className='sm:hidden block'>
        {[110, 320, 500, 750, 1020, 1280, 1500].map((top, index) => (
          <div key={index} className={`absolute top-[${top}px] left-2`}>
            <img src={arrow} alt="arrow" style={{ height: '50px', width: '50px' }} className='relative' />
          </div>
        ))}
      </div>

      {/* Step Details */}
      {steps.map((step, index) => (
        <div className={`timeline-step sm:flex w-9/12 sm:my-7 my-5 sm:p-5 relative ${index === activeStep ? 'active' : ''}`} key={index}>
          <div className="sm:flex sm:w-[47%] items-center justify-center">
            <div>
              <h2 className="step-number text-8xl font-bold">
                {index + 1}
              </h2>
            </div>
            <div>
              <h3 className="step-title sm:text-2xl text-md font-bold uppercase flex justify-center sm:ml-5 sm:mr-[-35px] sm:mt-2">
                {step.title}
              </h3>
            </div>
          </div>
          <div className='step-arrow w-[6%] sm:flex justify-center mt-[10px] sm:block hidden'>
            <img src={arrow} alt="arrow" style={{ height: '50px', width: '50px' }} className='relative' />
          </div>
          <div className="sm:flex-1 sm:w-[47%] flex justify-center items-center mt-5">
            <p className="step-description sm:text-lg text-md sm:p-2 sm:border-2 sm:px-5 sm:py-3 
            py-2 rounded-lg sm:border-black sm:text-left sm:w-[380px] w-full sm:mt-0 mt-2">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

import React, { useEffect, useState } from 'react';
import './Timeline.css';

const steps = [
  { title: "Learn a Marketable Skill", description: "Enough so that you feel confident delivering results for clients" },
  { title: "Create an Offer", description: "Make an offer that a prospect feels stupid saying no to" },
  { title: "Get in Front of Clients", description: "Learn how to generate leads, what to say, and how to do it" },
  { title: "Sign Your First Client", description: "Collect payment, start service delivery, and start getting results" },
  { title: "Create Case Studies", description: "Document the results you get for clients, and post it online to attract more clients" },
  { title: "Flywheel Scale", description: "Repeat steps 3 through 5 forever & to infinity" }
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [arrowHeight, setArrowHeight] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;
      const steps = document.querySelectorAll('.timeline-step');

      let foundActiveStep = false;

      steps.forEach((step, index) => {
        const offsetTop = step.offsetTop;
        const offsetHeight = step.offsetHeight;

        if (!foundActiveStep && scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveStep(index);
          foundActiveStep = true;
        }

        // Check if the current step should be active or not
        if (index <= activeStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });

      // Calculate arrow height based on the scroll position
      const firstStepOffsetTop = steps[0]?.offsetTop || 0;
      const lastStepOffsetBottom = steps[steps.length - 1]?.offsetTop + steps[steps.length - 1]?.offsetHeight || 0;


      const oneCmInPixels = 25;
      const arrowHeight = Math.min(scrollPosition - firstStepOffsetTop + oneCmInPixels, lastStepOffsetBottom - firstStepOffsetTop);
      setArrowHeight(arrowHeight > 0 ? arrowHeight : 1);
    };


    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeStep]); // Ensure useEffect runs when activeStep changes


  return (
    <div className="flex flex-col items-center relative px-5 sm:py-5">
      <div className="arrow-container absolute sm:top-0 left-8 sm:left-[50%] transform sm:-translate-x-1/2  z-10 mb-10">
        <div className="arrow" style={{ height: `${arrowHeight}px` }}></div>
      </div>


      {steps.map((step, index) => (
        <div className={`timeline-step sm:flex  w-8/12 sm:my-8 my-5 sm:p-5 relative ${index === activeStep ? 'active' : ''}`} key={index}>
          <div className="sm:flex sm:w-1/2 items-center">
            <div>
              <h2 className={`step-number text-8xl font-bold m-0`}>
                {index + 1}
              </h2>
            </div>
            <div>
              <h3 className={`sm:text-2xl text-md font-bold uppercase flex justify-center sm:ml-5 sm:mr-2 sm:mt-0 mt-[-20px]`}>
                {step.title}
              </h3>
            </div>
          </div>
          <div className="sm:flex-1 sm:w-1/2 justify-center sm:ml-10 sm:pl-5 ">
            <div className=''>
              <p className={`step-description sm:text-lg text-md p-2 sm:border-2 sm:px-10 px-5 sm:py-5 py-2 rounded-lg sm:border-black sm:text-justify`}>{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

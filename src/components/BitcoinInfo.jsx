import React from 'react';
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import { GoArrowRight } from "react-icons/go";
const BitcoinInfo = () => {
  return (
    <div className=" mx-auto p-[24px] lg:w-[881px] sm:w-[384px]  bg-white  rounded-[8px]">
      {/* Section Header */}
      <h1 className="text-2xl font-semibold text-[#0F1629] mb-4">About Bitcoin</h1>

      {/* What is Bitcoin Section */}
      <div className="mb-4 lg:border-b-[1px] border-b-[#C9CFDD] pb-3 pr-2">
        <h2 className="text-lg font-semibold text-[#0F1629] mb-2">What is Bitcoin?</h2>
        <p className="text-sm font-medium text-[#3E424A] ">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>

      {/* Lorem Ipsum Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#0F1629] mb-2">Lorem ipsum dolor sit amet</h2>
        <p className="text-sm font-medium text-[#3E424A] mb-4 lg:border-b-[1px] border-b-[#C9CFDD] pb-3 ">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  
        <br/>
        <br/>

Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
<br/>
        <br/>
Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>

      {/* Already Holding Bitcoin? Section */}
      <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Already Holding Bitcoin?</h2>
      
    <div className="flex gap-5  sm:ml-[-10px] sm:flex-col lg:flex-row  mb-4 lg:border-b-[1px] border-b-[#C9CFDD] pb-3  ">
      {/* Box 1 */}
      <div
        className="lg:w-[403px] lg:h-[151px] sm:w-[362px] sm:h-[140px] flex  bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg p-2 text-white"
      >
        <img
          src={r1}
          alt="Profit Tracking"
          className="lg:w-[128px] my-auto lg:h-[128px] sm:w-[119px] sm:h-[119px] mr-2.5"
        />
        <div className='ml-4 mt-3'>
          <p className="m-0 text-sm font-bold text-[20px] mb-3 ">Calculate your <br/>Profits</p>
          <button
            className="flex font-medium items-center justify-between gap-4 mt-2 px-3 py-1.5 text-xs rounded bg-white text-black cursor-pointer"
          >
         <div>Check Now</div>
            <GoArrowRight/>
          </button>
        </div>
      </div>

      {/* Box 2 */}
      <div
        className="lg:w-[403px] lg:h-[151px] sm:w-[362px] sm:h-[140px] flex  bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg p-2 text-white"
      >
        <img
          src={r2}
          alt="Tax Calculation"
          className="lg:w-[128px] my-auto lg:h-[128px] sm:w-[119px] sm:h-[119px] mr-2.5"
        />
        <div className='ml-4'>
          <p className="m-0 text-sm font-bold mt-3 text-[20px] mb-3">Calculate your tax liability</p>
          <button
            className="flex font-medium items-center justify-between gap-4 mt-2 px-3 py-1.5 text-xs rounded bg-white text-black cursor-pointer"
          >
         <div>Check Now</div>
            <GoArrowRight/>
          </button>
        </div>
      </div>
    </div>
  

      {/* Footer Paragraph */}
      <p className="text-sm font-medium text-[#3E424A]">
      Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui


      </p>
    </div>
  );
};

export default BitcoinInfo;

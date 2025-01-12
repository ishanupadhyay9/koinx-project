import React from "react";
import graph from "../assets/graph.png"; // Ensure the path is correct

const Tokenomics = () => {
  return (
    <div
      className=" mx-auto mt-2 hidden lg:flex flex-col w-[881px] h-[539px] p-6 gap-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Tokenomics</h2>
<div className="text-[20px] font-semibold text-gray-700">Initial Distributed</div>
      <div className="flex flex-col gap-6">
        {/* Graph Section */}
        <div className="flex  items-center">
          <img
            src={graph}
            alt="Initial Distribution Graph"
            className="w-[200px] h-[200px]"
          />
          <div className="flex flex-col font-medium mt-4  text-gray-700 ml-7">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex-1 text-gray-700">
          <p className=" font-medium pr-2">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
            vestibulum nunc dignissim vel consequat. Leo etiam nascuter bibendum amet
            enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce
            adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis
            augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam
            donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem
            posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Volputate
            ipsum aliquet odio nisi eu ac risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

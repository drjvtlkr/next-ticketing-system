"use client";

import { FaFire } from "react-icons/fa";

const PriorityDisplay = () => {
  return (
    <>
      <div className="flex justify-center align-baseline">
        <div>
          <FaFire className="text-red-600" />
        </div>
        <div>
          <FaFire className="text-red-600" />
        </div>
        <div>
          <FaFire className="text-red-600" />
        </div>
        <div>
          <FaFire className="text-red-600" />
        </div>
        <div>
          <FaFire className="text-red-600" />
        </div>
      </div>
    </>
  );
};

export default PriorityDisplay;

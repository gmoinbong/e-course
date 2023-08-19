import React from 'react';
import { FaEye } from 'react-icons/fa';



const ViewAll = () => {
  return (
    <button
      className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
      <FaEye className="" />
      <span className="font-medium pl-3">View All</span>
    </button>
  );
};

export default ViewAll;

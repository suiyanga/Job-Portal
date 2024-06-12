'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyButton = () => {

const applyHandler =()=> toast.success("Application Successful");


  return (
    <div>
        <button 
        onClick={applyHandler}
        className="px-8 rounded-lg py-3 bg-teal-600 text-white font-semibold transition-all
         duration-500 hover:bg-teal-800">
            Apply Now
        </button>
        <ToastContainer position="top-center" />
    </div>
  );
};

export default ApplyButton;
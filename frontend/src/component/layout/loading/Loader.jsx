import React from 'react';

const Loading = () => {
  return (
<>
<div>.</div>
        <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#009688] border-solid"></div>
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#E53E3E] border-solid ml-8"></div>
  </div>
</>
  );
};

export default Loading;
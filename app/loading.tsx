import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-secondary_1 animate-spin"></div>
      </div>
      <p className="font-bold mt-4 tracking-widest uppercase">Please wait...</p>
    </div>
  );
};

export default Loading;

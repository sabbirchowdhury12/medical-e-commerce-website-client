import { Loader2Icon } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center  items-center">
      <Loader2Icon color="#0a9a73" className="animate-spin" />

      <span className="text-2xl"> Loding ...</span>
    </div>
  );
};

export default Loader;

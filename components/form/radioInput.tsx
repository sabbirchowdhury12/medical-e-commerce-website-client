import { Label, Radio } from "flowbite-react";
import React from "react";

const RadioInput = ({ value, label, register, error }: any) => {
  return (
    <div className="flex items-center gap-2 mb-6 border border-border_color_7 p-4">
      <Radio id={label} value={value} {...register} />
      <Label htmlFor={label} className="font-bold tracking-wide">
        {label}
      </Label>
      {/* Display the error message if it exists */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default RadioInput;

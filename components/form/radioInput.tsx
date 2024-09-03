import { Label, Radio } from "flowbite-react";
import React from "react";

const RadioInput = ({ value, label, name }: any) => {
  return (
    <div className="flex items-center gap-2 mb-6 border border-border_color_7 p-4">
      <Radio id={label} name={name} value={value} />
      <Label htmlFor={label} className=" font-bold tracking-wide">
        {label}
      </Label>
    </div>
  );
};

export default RadioInput;

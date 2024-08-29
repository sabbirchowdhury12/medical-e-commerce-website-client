import { Label, Radio } from "flowbite-react";
import React from "react";

const RadioInput = ({ value, label }) => {
  return (
    <div className="flex items-center gap-2 mb-6 border border-border_color_7 p-6">
      <Radio id={label} name="value" value="value" />
      <Label htmlFor={label} className="text-lg font-bold tracking-wide">
        {label}
      </Label>
    </div>
  );
};

export default RadioInput;

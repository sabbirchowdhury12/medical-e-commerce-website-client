import React, { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelValue: string;
  error?: string; // Add the error prop
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ labelValue, type, placeholder, error, ...rest }, ref) => {
    return (
      <div className="flex-1 w-full mt-6 mb-6">
        <div className="block">
          <label
            htmlFor={labelValue}
            className="capitalize tracking-widest text-lg font-semibold font-sans"
          >
            {labelValue}
          </label>
        </div>
        <input
          ref={ref}
          className={`p-4  rounded-sm border-2 w-full placeholder:font-mono focus:ring-0 focus:outline-none ${
            error
              ? "border-red-500"
              : "border-border_color_7 focus:border-secondary_1"
          }`}
          placeholder={placeholder}
          id={labelValue}
          type={type}
          {...rest}
          required
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}{" "}
        {/* Show error message */}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;

const FormInput = ({ labelValue, type, placeholder, name }: any) => {
  return (
    <div className="flex-1 w-full">
      <div className="mb-2 block ">
        <label
          htmlFor={labelValue}
          className="capitalize tracking-widest text-lg font-semibold"
        >
          {labelValue}
        </label>
      </div>
      <input
        className="p-4 rounded-sm border-2 border-border_color_7 text-paragraph  focus:ring-0 focus:outline-none focus:border-secondary_1 w-full mb-4 "
        placeholder={placeholder}
        id={labelValue}
        type={type}
        name={name}
        required
      />
    </div>
  );
};

export default FormInput;

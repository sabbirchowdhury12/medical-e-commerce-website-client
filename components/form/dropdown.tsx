interface DropdownInputProps {
  label: string;
  value?: string; // Make value optional
  items: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  name: string; // Add name prop for form registration
  register: any; // Accept register prop from React Hook Form
  error?: string; // Add error prop
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  value,
  items,
  onChange, // Make optional
  disabled = false,
  name,
  register, // Accept register prop
  error, // Accept error prop
}) => {
  return (
    <div className="flex-1 w-full">
      <label className="mb-2 font-bold block text-sm">{label}</label>
      <select
        className="p-4 rounded-sm border-2 border-border_color_7 focus:ring-0 focus:outline-none focus:border-secondary_1 w-full mb-4 block"
        value={value}
        {...register(name)} // Register the input with React Hook Form
        onChange={(e) => {
          register(name).onChange(e); // Call React Hook Form's onChange
          if (onChange) {
            onChange(e.target.value); // Call your custom onChange handler
          }
        }}
        disabled={disabled}
        required
      >
        <option value="" disabled>
          Select a {label.toLowerCase()}
        </option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {/* Display the error message if it exists */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

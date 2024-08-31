interface DropdownInputProps {
  label: string;
  value: string;
  items: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  value,
  items,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex-1 w-full">
      <label className="mb-2 font-bold  block">{label}</label>
      <select
        className="p-4  rounded-sm border-2 border-border_color_7 focus:ring-0 focus:outline-none focus:border-secondary_1 w-full mb-4 block"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="" disabled>
          Select a {label.toLowerCase()}
        </option>
        {items?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

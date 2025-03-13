type DropdownProps<T> = {
  label: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
};

const Dropdown = <T,>({ label, options, value, onChange }: DropdownProps<T>) => (
  <div className="flex gap-8 items-center mb-4">
    <h2 className="font-semibold text-xl text-gray-500">{label}</h2>
    <select
      className="border rounded-xs shadow-sm w-16 p-1 border-gray-400 text-gray-600"
      value={value as string}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {options.map((option) => (
        <option key={option as string} value={option as string}>
          {option as string}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;  
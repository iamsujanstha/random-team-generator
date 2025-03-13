type DropdownProps<T> = {
  label: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
};

const Dropdown = <T,>({ label, options, value, onChange }: DropdownProps<T>) => (
  <div className="flex flex-col">
    <label className="font-semibold mb-1">{label}</label>
    <select
      className="border p-2 rounded-lg shadow-sm"
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
import React from "react";

type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className = "" }) => {
  return (
    <input
      className={`px-4 py-2 focus:outline-none w-full bg-white border border-gray-300 h-11 ${className}`}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default Input;

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, className = "", ...props }) => (
  <button
    className={`p-3 rounded-sm cursor-pointer text-white font-semibold
      ${props.disabled ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"} ${className}`}
    {...props}
  >
    {label}
  </button>
);

export default Button;

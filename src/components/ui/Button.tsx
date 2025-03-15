import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ label, className = "", children, ...props }) => {
  // Ensure the passed className has higher priority, prepend default styles
  const buttonClassName = `${props.disabled && "bg-gray-400"} ${className}`;

  return (
    <button
      className={`cursor-pointer text-white font-semibold ${buttonClassName}`}
      {...props}
    >
      {children ?? label}
    </button>
  );
};

export default Button;

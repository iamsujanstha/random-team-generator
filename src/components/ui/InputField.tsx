import React, { ReactNode, InputHTMLAttributes } from "react";


interface InputRootProps {
  children: ReactNode;
  className?: string;
}
const InputRoot: React.FC<InputRootProps> = ({ children, className }) => {
  return (
    <div className={`relative flex items-center ${className}`}>{children}</div>
  );
};

const InputField: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      className={`
        px-4 py-2 focus:outline-none w-full bg-white border border-gray-300 text-gray-600 h-11 
        placeholder:font-medium placeholder:text-gray-400 text-md
        transition-all duration-300
        ${props.disabled ?
          " bg-gray-200  border-gray-300 text-gray-500 outline-none focus:outline-none hover:border-gray-300" :
          "hover:border-[#66afe9] focus:border-[#66afe9] focus:ring-0 focus:shadow-lg focus:shadow-[#66afe9]/30"}
        ${className}
      `}
      {...props}
    />
  );
};


interface InputIconProps {
  children: ReactNode;
}
const InputIconLeft: React.FC<InputIconProps> = ({ children }) => (
  <span className="absolute left-0">{children}</span>
);

const InputIconRight: React.FC<InputIconProps> = ({ children }) => (
  <span className="absolute right-0">{children}</span>
);

const Input = Object.assign(InputRoot, {
  Field: InputField,
  Left: InputIconLeft,
  Right: InputIconRight,
});


export { Input }
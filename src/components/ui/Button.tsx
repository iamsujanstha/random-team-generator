type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, className }) => (
  <button
    className={`p-3 rounded-lg cursor-pointer text-white font-semibold mt-3 ${disabled ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"} ${className} `}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
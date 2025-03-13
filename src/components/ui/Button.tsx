type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => (
  <button
    className={`p-3 w-full rounded-lg text-white font-semibold mt-3 ${disabled ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
      }`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
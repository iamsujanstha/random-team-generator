import Button from "@components/Button";
import { Input } from "@components/InputField";

type ItemPropType = {
  name: string;
  onRemoveItem?: () => void;
  onNameChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  asLabel?: boolean
  className?: string;
  index?: number;
  isDisable?: boolean;
};

const Item = ({ name, onRemoveItem, onNameChange, placeholder, asLabel = false, className, index, isDisable = false }: ItemPropType) => {

  return (
    <Input className={className}>
      <Input.Left>
        <Button
          onClick={onRemoveItem}
          className="bg-gray-200 border-1 border-gray-300 p-[9px] w-10"
        >
          <span className="p-1 text-[16px] hover:text-gray-700 text-gray-400">{index ?? <i className="fa fa-times" />}</span>
        </Button>
      </Input.Left>
      <Input.Field
        className="pl-12"
        placeholder={placeholder}
        onChange={onNameChange}
        value={name}
        readOnly={asLabel}
        disabled={isDisable}
      />
    </Input>
  );
};

export default Item;

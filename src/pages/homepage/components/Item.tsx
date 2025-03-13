import Input from "@components/Input";

type ItemPropType = {
  name: string;
  onRemoveItem: () => void;
  onNameChange: (newName: string) => void;
  placeholder: string;
};

const Item = ({ name, onRemoveItem, onNameChange, placeholder }: ItemPropType) => {
  return (
    <div className='flex gap-4'>
      <div className="flex items-center border border-gray-300">
        <button
          className="hover:text-gray-700 bg-gray-200 p-[10px] text-gray-400 cursor-pointer"
          onClick={onRemoveItem}
        >
          <i className="fa fa-times px-1" />
        </button>
        <Input
          placeholder={placeholder}
          onChange={onNameChange}
          value={name}
        />
      </div>
    </div>
  );
};

export default Item;

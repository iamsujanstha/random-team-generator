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
        <button className="hover:text-gray-700 bg-gray-300 p-2 text-white" onClick={onRemoveItem}>
          <i className="fa fa-times"></i>
        </button>
        <input
          type="text"
          className="pl-4 py-2 focus:outline-none w-full"
          placeholder={placeholder}
          onChange={(e) => onNameChange(e.target.value)}
          value={name}
        />
      </div>
    </div>
  );
};

export default Item;

import Rating from "@src/pages/homepage/components/Rating";

type ItemPropType = {
  label: string;
  onRemoveItem: () => void;
}
const Item = ({ label, onRemoveItem }: ItemPropType) => {

  return (
    <div className='flex gap-4'>
      <div className="flex height-10 items-center gap-2 border-1 border-gray-300">
        <button
          className=" hover:text-gray-700 bg-gray-300 p-2 text-white"
          onClick={onRemoveItem}
        >
          <i className="fa fa-times"></i>
        </button>
        <input
          type="text"
          className="pr-4 py-2  focus:outline-none w-full"
          placeholder={label}
        />
      </div>
      <Rating />
    </div>
  )
}

export default Item

type Props = {
  itemLength: number;
  onAdd: () => void;
  label: string
}
const AddItemButton = ({ itemLength, onAdd, label }: Props) => {
  return (
    <div className='flex items-center text-sm text-white font-semibold'>
      <span className="bg-gray-400  px-3 py-2 w-11">{itemLength}</span>
      <button className="bg-gray-500  px-4 py-2  cursor-pointer" onClick={onAdd}>
        {label}
      </button>
    </div>
  )
}

export default AddItemButton
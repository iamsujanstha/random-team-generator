
type Props = {
  itemLength: number;
  onAdd: () => void;
  label: string
}
const AddItemButton = ({ itemLength, onAdd, label }: Props) => {
  return (
    <div className='flex items-center'>
      <span className="bg-gray-400 text-white font-semibold px-3 py-2">{itemLength}</span>
      <button className="bg-gray-500 text-white font-semibold px-4 py-2 cursor-pointer" onClick={onAdd}>
        {label}
      </button>
    </div>
  )
}

export default AddItemButton
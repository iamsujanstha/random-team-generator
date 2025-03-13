import { useState } from 'react'

const Rating = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  return (
    <div className='bg-white flex my-1'>
      {[1, 2, 3, 4, 5].map((i) => {
        const isHighlighted = hoveredValue !== null ? i <= hoveredValue : selectedValue !== null && i <= selectedValue;

        return (
          <div
            key={i}
            className={`flex items-center px-4 py-1 cursor-pointer transition-all 
              ${isHighlighted ? 'bg-amber-600 text-white' : 'bg-white text-black'}
            `}
            onMouseEnter={() => setHoveredValue(i)}
            onMouseLeave={() => setHoveredValue(null)}
            onClick={() => setSelectedValue(i)}
          >
            {i}
          </div>
        );
      })}
    </div>
  )
}

export default Rating
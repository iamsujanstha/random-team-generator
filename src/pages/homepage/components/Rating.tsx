import { useState } from 'react'

type RatingProps = {
  onRatingChange: (rating: number) => void;
  rating: number;
}
const Rating = ({ onRatingChange, rating }: RatingProps) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const handleClick = (index: number) => () => {
    onRatingChange(index)
  }
  console.log({ hoveredValue })
  return (
    <div className='bg-white flex my-1'>
      {[1, 2, 3, 4, 5].map((i) => {
        const isHighlighted = hoveredValue !== null ? i <= hoveredValue : rating !== 0 && i <= rating;

        return (
          <div
            key={i}
            className={`flex items-center px-4 py-1 cursor-pointer transition-all 
              ${isHighlighted ? 'bg-amber-600 text-white' : 'bg-white text-gray-500'}
            `}
            onMouseEnter={() => setHoveredValue(i)}
            onMouseLeave={() => setHoveredValue(null)}
            onClick={handleClick(i)}
          >
            {i}
          </div>
        );
      })}
    </div>
  )
}

export default Rating
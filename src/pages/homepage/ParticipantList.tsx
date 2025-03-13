import Item from '@src/pages/homepage/components/Item';
import Rating from '@src/pages/homepage/components/Rating';
import { useState } from 'react';


export type ParticipantType = {
  name: string,
  rating: number
}

const ParticipantList = () => {
  const [participants, setParticipants] = useState<ParticipantType[]>(
    Array.from({ length: 10 }, () => ({
      name: '',
      rating: 0,
    }))
  );

  const removeItem = (index: number) => {
    if (participants.length > 1) {
      setParticipants(participants.filter((_, i) => i !== index));
    }
    return;
  };

  const handleAddItem = () => {
    setParticipants([...participants, { name: '', rating: 0 }]);
  };

  const handleNameChange = (index: number, newName: string) => {
    setParticipants(prev => prev.map((p, i) => (i === index ? { ...p, name: newName } : p)));
  };

  const handleRatingChange = (index: number, rating: number) => {
    setParticipants(prev => prev.map((p, i) => (i === index ? { ...p, rating } : p)))
  }

  console.log(participants)
  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md">
      <h2 className="font-bold mb-2">Participants</h2>
      {participants.map(({ name, rating }, index) => (
        <div key={index} className="flex items-center mb-2 gap-4">
          <Item
            name={name}
            onRemoveItem={() => removeItem(index)}
            onNameChange={(newName) => handleNameChange(index, newName)}
            placeholder={`Participant ${index + 1}`}
          />
          <Rating
            onRatingChange={(rating) => handleRatingChange(index, rating)}
            rating={rating}
          />
        </div>
      ))}
      <div className='flex'>
        <span className="bg-gray-300 text-gray-700 px-3 py-1">{participants.length}</span>
        <button className="bg-gray-500 text-white font-semibold px-4 py-2" onClick={handleAddItem}>
          Add Participant
        </button>
      </div>
    </div>
  );
};

export default ParticipantList;

import { useEffect, useState } from 'react';
import Dropdown from '@components/Dropdown';
import Item from '@src/pages/homepage/components/Item';
import Rating from '@src/pages/homepage/components/Rating';


export type ParticipantType = {
  name: string,
  rating: number
}

const DEFAULT_PARTICIPANTS = 10;
const ParticipantList = () => {
  const [numParticipants, setNumParticipants] = useState(DEFAULT_PARTICIPANTS)
  const [participants, setParticipants] = useState<ParticipantType[]>(
    Array.from({ length: numParticipants }, () => ({
      name: '',
      rating: 0,
    }))
  );


  useEffect(function syncParticipant() {
    setParticipants((prev) => {
      if (numParticipants > prev.length) {
        return [...prev, ...Array.from({ length: numParticipants - prev.length }, () => ({ name: '', rating: 0 }))];
      }
      return prev.slice(0, numParticipants);
    });
  }, [numParticipants]);

  useEffect(function syncNumParticipant() {
    setNumParticipants(participants.length)
  }, [participants])

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

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md">
      <div className='flex'>
        {/* <h2 className="font-bold mb-2 text-start">Participants</h2> */}
        <Dropdown
          label="Participants"
          options={Array.from({ length: 60 }, (_, i) => i + 1)}
          value={numParticipants}
          onChange={(val) => setNumParticipants(val)}
        />
      </div>
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

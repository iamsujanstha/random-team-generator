import { useEffect, useState } from 'react';
import Dropdown from '@components/Dropdown';
import Item from '@src/pages/homepage/components/Item';
import Rating from '@src/pages/homepage/components/Rating';
import AddItemButton from '@src/pages/homepage/components/AddItemButton';


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
    <div className="flex flex-col mt-6">
      <div className='flex'>
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
      <AddItemButton itemLength={participants.length} onAdd={handleAddItem} label='Participant' />
    </div>
  );
};

export default ParticipantList;

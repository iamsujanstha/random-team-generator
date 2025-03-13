import React, { useEffect } from 'react';
import Dropdown from '@components/Dropdown';
import Item from '@src/pages/homepage/components/Item';
import Rating from '@src/pages/homepage/components/Rating';
import AddItemButton from '@src/pages/homepage/components/AddItemButton';


export type ParticipantType = {
  name: string,
  rating: number
}

type Props = {
  participants: ParticipantType[];
  setParticipants: React.Dispatch<React.SetStateAction<ParticipantType[]>>
  numParticipants: number;
  setNumParticipants: React.Dispatch<React.SetStateAction<number>>;
}
const ParticipantList = ({ participants, setParticipants, setNumParticipants, numParticipants }: Props) => {

  useEffect(function syncParticipant() {
    setParticipants((prev) => {
      if (numParticipants > prev.length) {
        return [...prev, ...Array.from({ length: numParticipants - prev.length }, () => ({ name: '', rating: 0 }))];
      }
      return prev.slice(0, numParticipants);
    });
  }, [numParticipants, setParticipants]);

  useEffect(function syncNumParticipant() {
    setNumParticipants(participants.length)
  }, [participants, setNumParticipants])

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
      <AddItemButton itemLength={participants.length} onAdd={handleAddItem} label='Add Participant' />
    </div>
  );
};

export default ParticipantList;

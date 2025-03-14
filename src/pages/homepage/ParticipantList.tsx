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
  totalParticipants: number;
  setTotalParticipants: React.Dispatch<React.SetStateAction<number>>;
}
const ParticipantList = ({ participants, setParticipants, setTotalParticipants, totalParticipants }: Props) => {

  useEffect(function syncParticipant() {
    setParticipants((prev) => {
      if (totalParticipants > prev.length) {
        return [...prev, ...Array.from({ length: totalParticipants - prev.length }, () => ({ name: '', rating: 0 }))];
      }
      return prev.slice(0, totalParticipants);
    });
  }, [totalParticipants, setParticipants]);

  useEffect(function syncNumParticipant() {
    setTotalParticipants(participants.length)
  }, [participants, setTotalParticipants])

  const removeItem = (index: number) => {
    if (participants.length > 1) {
      setParticipants(participants.filter((_, i) => i !== index));
    }
  };

  const handleAddItem = () => {
    setParticipants([...participants, { name: '', rating: 0 }]);
  };

  const handleChange = (index: number, field: keyof ParticipantType, value: string | number) => {
    setParticipants((prev) =>
      prev.map((participant, i) =>
        i === index ? { ...participant, [field]: field === 'rating' ? Number(value) : value } : participant
      )
    );
  };

  return (
    <div className="flex flex-col mt-6">
      <div className='flex'>
        <Dropdown
          label="Participants"
          options={Array.from({ length: 60 }, (_, i) => i + 1)}
          value={totalParticipants}
          onChange={(val) => setTotalParticipants(val)}
        />
      </div>
      {participants.map(({ name, rating }, index) => (
        <div key={index} className="flex items-center mb-2 gap-4">
          <Item
            name={name}
            onRemoveItem={() => removeItem(index)}
            onNameChange={(newName) => handleChange(index, 'name', newName)}
            placeholder={`Participant ${index + 1}`}
          />
          <Rating
            onRatingChange={(rating) => handleChange(index, 'rating', rating)}
            rating={rating}
          />
        </div>
      ))}
      <AddItemButton itemLength={participants.length} onAdd={handleAddItem} label='Add Participant' />
    </div>
  );
};

export default ParticipantList;

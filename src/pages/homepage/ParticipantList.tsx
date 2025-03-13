import Item from '@src/pages/homepage/components/Item';
import { ParticipantType } from '@src/pages/homepage/TeamGenerator';
import { useState } from 'react';


// type ParticipantListProps = {

// };

const ParticipantList = () => {
  const [participants, setParticipants] = useState<ParticipantType[]>(Array.from({ length: 10 }, (_, i) => ({
    name: `Participant ${i + 1}`,
    rating: null,
  })));

  const removeItem = (index: number) => {
    const updatedItems = participants.filter((_, i) => i !== index);
    // Update numbering of remaining participants
    const renumberedItems = updatedItems.map(({ name, rating },) => ({ name, rating }));
    setParticipants(renumberedItems);
  };

  const handleAddItem = () => {
    setParticipants([...participants, { name: `Participant ${participants.length + 1}`, rating: null }]);
    console.log(participants)
  };

  console.log(participants)

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md">
      <h2 className="font-bold mb-2">Participant</h2>
      {participants.map(({ name }, index) => (
        <div key={index} className="flex participants-center gap-2 mb-2">
          <Item label={name} onRemoveItem={() => removeItem(index)} />
        </div>
      ))}
      <div className='flex'>
        <span className="flex participants-center bg-gray-300 text-gray-700 px-3 py-1 align-participants-center">{participants.length}</span>
        <button className="flex participants-center bg-gray-500 text-white font-semibold px-4 py-2 cursor-pointer" onClick={handleAddItem}>
          Add Participant
        </button>
      </div>
    </div>
  );
};

export default ParticipantList;
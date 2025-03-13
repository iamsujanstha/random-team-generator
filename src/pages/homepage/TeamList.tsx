import Item from '@src/pages/homepage/components/Item';
import { useState } from 'react';

const TeamList = () => {
  const [teams, setTeams] = useState<string[]>(Array.from({ length: 2 }, (_, i) => `Team ${i + 1}`));

  const removeItem = (index: number) => {
    const updatedItems = teams.filter((_, i) => i !== index);
    const renumberedItems = updatedItems.map((_, idx) => (`Team ${idx + 1}`));
    setTeams(renumberedItems);
  };

  const handleAddItem = () => {
    setTeams([...teams, `Team ${teams.length + 1}`]);
    console.log(teams)
  };

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md">
      <h2 className="font-bold mb-2">Teams</h2>
      {teams.map((_, index) => (
        <div key={index} className="flex teams-center gap-2 mb-2">
          <Item label='Team' onRemoveItem={() => removeItem(index)} />
        </div>
      ))}
      <div className='flex'>
        <span className="flex teams-center bg-gray-300 text-gray-700 px-3 py-1 align-teams-center">{teams.length}</span>
        <button className="flex teams-center bg-gray-500 text-white font-semibold px-4 py-2 cursor-pointer" onClick={handleAddItem}>
          Add Team
        </button>
      </div>
    </div>
  );
};

export default TeamList;
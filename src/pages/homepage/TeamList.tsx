import Item from '@src/pages/homepage/components/Item';
import { useState } from 'react';

const TeamList = () => {
  const [teams, setTeams] = useState<string[]>(Array.from({ length: 2 }, () => ''));

  const removeItem = (index: number) => {
    if (teams.length > 1) {
      setTeams(teams.filter((_, i) => i !== index));
    }
    return;
  };

  const handleAddItem = () => {
    setTeams([...teams, '']);
  };

  const handleNameChange = (index: number, newName: string) => {
    setTeams(prev => prev.map((p, i) => (i === index ? newName : p)));
  };

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md">
      <h2 className="font-bold mb-2">Teams</h2>
      {teams.map((team, index) => (
        <div key={index} className="flex teams-center gap-2 mb-2">
          <Item
            name={team}
            onRemoveItem={() => removeItem(index)}
            onNameChange={(newName) => handleNameChange(index, newName)}
            placeholder={`Team ${index + 1}`}
          />
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
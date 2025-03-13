import Dropdown from '@components/Dropdown';
import AddItemButton from '@src/pages/homepage/components/AddItemButton';
import Item from '@src/pages/homepage/components/Item';
import { useEffect, useState } from 'react';

const DEFAULT_TEAMS = 2
const TeamList = () => {
  const [numTeams, setNumTeams] = useState(DEFAULT_TEAMS);
  const [teams, setTeams] = useState<string[]>(Array.from({ length: 2 }, () => ''));

  useEffect(function syncParticipant() {
    setTeams((prev) => {
      if (numTeams > prev.length) {
        return [...prev, ...Array.from({ length: numTeams - prev.length }, () => '')];
      }
      return prev.slice(0, numTeams);
    });
  }, [numTeams]);

  useEffect(function syncNumParticipant() {
    setNumTeams(teams.length)
  }, [teams])

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
    <div className="flex flex-col mt-6">
      <div className='flex'>
        <Dropdown
          label="Teams"
          options={Array.from({ length: 10 }, (_, i) => i + 1)}
          value={numTeams}
          onChange={(val) => setNumTeams(val)}
        />
      </div>
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
      <AddItemButton itemLength={teams.length} onAdd={handleAddItem} label='Team' />
    </div>
  );
};

export default TeamList;
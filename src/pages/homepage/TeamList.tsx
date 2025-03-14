import Dropdown from '@components/Dropdown';
import AddItemButton from '@src/pages/homepage/components/AddItemButton';
import Item from '@src/pages/homepage/components/Item';
import { useEffect } from 'react';

type Props = {
  teams: string[];
  setTeams: React.Dispatch<React.SetStateAction<string[]>>;
  totalTeams: number;
  setTotalTeams: React.Dispatch<React.SetStateAction<number>>;
}
const TeamList = ({ teams, setTeams, totalTeams, setTotalTeams }: Props) => {

  useEffect(function syncParticipant() {
    setTeams((prev) => {
      if (totalTeams > prev.length) {
        return [...prev, ...Array.from({ length: totalTeams - prev.length }, () => '')];
      }
      return prev.slice(0, totalTeams);
    });
  }, [totalTeams, setTeams]);

  useEffect(function syncNumParticipant() {
    setTotalTeams(teams.length)
  }, [setTotalTeams, teams])

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
          value={totalTeams}
          onChange={(val) => setTotalTeams(val)}
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
      <AddItemButton itemLength={teams.length} onAdd={handleAddItem} label='Add Team' />
    </div>
  );
};

export default TeamList;
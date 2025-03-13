import Button from "@components/Button";
import Input from "@components/Input";
import MessageDrawer from "@src/components/core/MessageDrawer";
import useDrawer from "@src/hooks/useDrawer";
import { useGetGenerateTeams } from "@src/hooks/useGetGenerateTeams";
import ParticipantList, { ParticipantType } from "@src/pages/homepage/ParticipantList";
import TeamList from "@src/pages/homepage/TeamList";
import { generateRandomTeams } from "@src/utils/generateRandomTeams";
import { validationCheck } from "@src/utils/validationCheck";
import { useState } from "react";
import { useNavigate } from "react-router";


const DEFAULT_PARTICIPANTS = 10;
const DEFAULT_TEAMS = 2;
const TeamGenerator: React.FC = () => {
  const [teams, setTeams] = useState<string[]>(Array.from({ length: DEFAULT_TEAMS }, () => ''));
  const [numParticipants, setNumParticipants] = useState(DEFAULT_PARTICIPANTS);

  const [participants, setParticipants] = useState<ParticipantType[]>(
    Array.from({ length: numParticipants }, () => ({
      name: '',
      rating: 0,
    }))
  );

  const navigate = useNavigate();

  const { setGroupedTeams, groupedTeams, setShareableLink, title, setTitle } = useGetGenerateTeams();
  const { isDrawerOpen, drawerContent, openDrawer } = useDrawer();

  const generateShareableLink = () => {
    if (!groupedTeams) return;

    const dataString = encodeURIComponent(JSON.stringify(groupedTeams));
    const link = `${window.location.origin}/view?data=${dataString}`;

    setShareableLink(link);
  };

  const handleGenerateTeam = async () => {
    const isValid = validationCheck(participants, teams, title, openDrawer)
    if (!isValid) return;

    const groups = await generateRandomTeams(participants, teams);
    setGroupedTeams(groups)
    generateShareableLink();
    navigate('/view-groups')
  }

  return (
    <div className="w-full">
      <header className=' bg-[#43464d] p-8 flex gap-4 justify-center'>
        <div className='w-96'>
          <label className="text-white font-semibold text-xl">Title</label>
          <Input
            placeholder='Please enter title'
            onChange={(name) => setTitle(name)}
            value={title}
          />
        </div>
      </header>
      <section className="flex justify-center">
        <div className="md:w-2/3 md:text-center">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <ParticipantList
              participants={participants}
              setParticipants={setParticipants}
              numParticipants={numParticipants}
              setNumParticipants={setNumParticipants}
            />
            <TeamList
              teams={teams}
              setTeams={setTeams}
            />
          </div>
          <Button
            className="w-1/2 my-8"
            label="Generate Teams"
            onClick={handleGenerateTeam}
          />
        </div>
      </section>
      {isDrawerOpen && (
        <MessageDrawer isOpen={isDrawerOpen} content={drawerContent} type="error" />
      )}
    </div>
  );
};

export default TeamGenerator;

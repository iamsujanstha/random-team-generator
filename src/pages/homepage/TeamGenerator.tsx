import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@components/Button";
import MessageDrawer from "@src/components/core/MessageDrawer";
import useDrawer from "@src/hooks/useDrawer";
import { useGetGenerateTeams } from "@src/hooks/useGetGenerateTeam";
import ParticipantList, { ParticipantType } from "@src/pages/homepage/ParticipantList";
import TeamList from "@src/pages/homepage/TeamList";
import { generateRandomTeams } from "@src/utils/generateRandomTeams";
import { generateShareableLink } from "@src/utils/generateShareableLink";
import { validationCheck } from "@src/utils/validationCheck";
import { Input } from "@components/InputField";
import Header from "@src/components/core/Header";


const DEFAULT_PARTICIPANTS = 10;
const DEFAULT_TEAMS = 2;
const TeamGenerator: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [teams, setTeams] = useState<string[]>(Array.from({ length: DEFAULT_TEAMS }, () => ''));
  const [numParticipants, setNumParticipants] = useState(DEFAULT_PARTICIPANTS);
  const [numTeams, setNumTeams] = useState(DEFAULT_TEAMS);
  const [participants, setParticipants] = useState<ParticipantType[]>(
    Array.from({ length: numParticipants }, () => ({
      name: '',
      rating: 0,
    }))
  );

  const navigate = useNavigate();

  const { setGroupedTeams, setShareableLink, title, setTitle } = useGetGenerateTeams();
  const { isDrawerOpen, drawerContent, openDrawer } = useDrawer();

  const handleGenerateTeam = async () => {
    const isValid = validationCheck(participants, teams, title, openDrawer)
    if (!isValid) return;

    setLoading(true);
    const groups = await generateRandomTeams(participants, teams, title);
    setLoading(false);
    setGroupedTeams(groups)
    const encodedLink = generateShareableLink(groups);
    if (encodedLink) navigate(encodedLink)

    setShareableLink(`${window.location}` + encodedLink as string)
  }

  return (
    <div className="w-full">
      <Header>
        <div className='w-96'>
          <label className="text-white font-semibold text-xl">Title</label>
          <Input>
            <Input.Field onChange={(e) => setTitle(e.target.value)} placeholder="Please enter title" />
          </Input>
        </div>
      </Header>
      <section className="flex justify-center">
        <div className="lg:w-2/3 md:text-center">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <ParticipantList
              participants={participants}
              setParticipants={setParticipants}
              totalParticipants={numParticipants}
              setTotalParticipants={setNumParticipants}
            />
            <TeamList
              teams={teams}
              setTeams={setTeams}
              totalTeams={numTeams}
              setTotalTeams={setNumTeams}
            />
          </div>
          <Button
            className="w-1/2 my-8 bg-red-400 p-4 rounded-sm"
            label={isLoading ? 'Generating Team...' : 'Generate Team'}
            onClick={handleGenerateTeam}
            disabled={isLoading}
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

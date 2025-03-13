import Button from "@components/Button";
import Input from "@components/Input";
import MessageDrawer from "@src/components/core/MessageDrawer";
import useDrawer from "@src/hooks/useDrawer";
import ParticipantList from "@src/pages/homepage/ParticipantList";
import TeamList from "@src/pages/homepage/TeamList";
import { useState } from "react";

const TeamGenerator: React.FC = () => {
  const [name, setName] = useState('');
  
  const { isDrawerOpen, drawerContent, openDrawer } = useDrawer();

  // const assignParticipantsToTeams = (participants: ParticipantType[], teamNames: string[])=> {
  //   // Initialize teams with names and total ratings set to 0
  //   const teams = teamNames.map(name => ({ name, members: [], totalRating: 0 }));
  
  //   // Distribute participants using forEach
  //   participants.forEach(participant => {
  //       // Find the team with the lowest total rating
  //       const minTeam = teams.reduce((min, team) => 
  //           team.totalRating < min.totalRating ? team : min, teams[0]);
        
  //       // Assign the participant to this team
  //       minTeam.members.push(participant);
  //       minTeam.totalRating += participant.rating;
  //   });
  
  //   return teams;
  // }

  const handleGenerateTeam = () => {
    if(name===''){
      openDrawer('Please enter the title')
    }

  }
  return (
    <div className="w-full">
      <header className=' bg-[#43464d] p-8 flex gap-4 justify-center'>
        <div className=''>
          <label className="text-white font-semibold">Title</label>
          <Input
            placeholder='Please enter title'
            onChange={(name) => setName(name)}
            value={name}
          />
        </div>
      </header>
      <section className="flex justify-center">
        <div className="w-2/3 text-center">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <ParticipantList />
            <TeamList />
          </div>
          <Button
            className="w-1/2 my-4"
            label="Generate Teams"
            onClick={handleGenerateTeam}
          />
        </div>
      </section>
      {isDrawerOpen && (
        <MessageDrawer isOpen={isDrawerOpen} content={drawerContent} />
      )}
    </div>
  );
};

export default TeamGenerator;

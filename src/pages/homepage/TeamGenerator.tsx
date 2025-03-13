// import Button from "@components/Button";
// import Dropdown from "@components/Dropdown";
import ParticipantList from "@src/pages/homepage/ParticipantList";
import TeamList from "@src/pages/homepage/TeamList";

const TeamGenerator: React.FC = () => {

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      {/* <div className="flex gap-6">
        <Dropdown<number>
          label="Participants"
          options={[5, 10, 15, 20]}
          value={numParticipants}
          onChange={(val) => setNumParticipants(val)}
        />
        <Dropdown<number>
          label="Teams"
          options={[2, 3, 4, 5]}
          value={numTeams}
          onChange={(val) => setNumTeams(val)}
        />
      </div> */}

      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2"> */}
      <ParticipantList />
      <TeamList />
      {/* </div> */}

      {/* <Button text="Generate Teams" onClick={() => console.log("Teams Generated!")} disabled={participants.length < numTeams} /> */}
    </div>
  );
};

export default TeamGenerator;

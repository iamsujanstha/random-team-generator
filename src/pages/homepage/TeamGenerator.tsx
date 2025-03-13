import Button from "@components/Button";
import ParticipantList from "@src/pages/homepage/ParticipantList";
import TeamList from "@src/pages/homepage/TeamList";

const TeamGenerator: React.FC = () => {

  return (
    <main>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <ParticipantList />
        <TeamList />
      </div>
      <Button
        className="w-1/2 mt-4"
        text="Generate Teams"
        onClick={() => console.log("Teams Generated!")}
      />
    </main>
  );
};

export default TeamGenerator;

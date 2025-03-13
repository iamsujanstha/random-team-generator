import EntityList from "@src/pages/homepage/components/EntityList";
import { useState } from "react";

const TeamGenerator: React.FC = () => {
  const [participants, setParticipants] = useState<string[]>(Array.from({ length: 10 }, (_, i) => `Participant ${i + 1}`));
  const [teams, setTeams] = useState<string[]>(Array.from({ length: 2 }, (_, i) => `Team ${i + 1}`));

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      <EntityList title="Participants" items={participants} setItems={setParticipants} showRating={true} />

      <EntityList title="Teams" items={teams} setItems={setTeams} showRating={false} />
    </div>
  );
};

export default TeamGenerator;
